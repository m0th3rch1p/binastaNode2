"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.searchUserProducts = exports.fetchUserProductBySlug = exports.fetchAllUserProducts = exports.index = void 0;
const multer_1 = __importDefault(require("multer"));
const queryHelpers_1 = require("../helpers/queryHelpers");
const lodash_1 = __importDefault(require("lodash"));
const StrHelper_1 = require("../helpers/StrHelper");
const productServices = __importStar(require("../services/products.services"));
const productVariations_services_1 = require("../services/productVariations.services");
const productImages_services_1 = require("../services/productImages.services");
const TABLE_NAME = "products";
const multerStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'productImages');
    }
});
const multerFilter = (req, file, cb) => {
    switch (file.mimetype.split("/")[1].toLowerCase()) {
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
        case "svg":
        case "ico":
        case "svg+xml":
        case "webp":
            cb(null, true);
            break;
        default:
            cb(new Error("File is not an image"));
            break;
    }
};
const upload = (0, multer_1.default)({
    storage: multerStorage,
    fileFilter: multerFilter
}).array('img[]', 2);
const index = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECTALL");
    if (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching products"
        });
    }
    else if (response) {
        const [products] = response;
        res.status(200).json({
            products
        });
    }
};
exports.index = index;
const fetchAllUserProducts = async (req, res) => {
    let products = await productServices.fetchProducts({ perPage: parseInt(req.query.per_page), offset: parseInt(req.query.offset), });
    if (!products) {
        res.status(500).json({
            message: "Error fetching products"
        });
        return;
    }
    else if (!products.length) {
        res.status(200).json({ products });
        return;
    }
    const productIds = (products).map((product) => product.id);
    const productVariations = await (0, productVariations_services_1.fetchProductVariationByProductsArray)({ productIds: productIds, client: "user" });
    const productImages = await (0, productImages_services_1.fetchProductImagesByProductIdArray)(productIds);
    const groupedVariations = lodash_1.default.groupBy(productVariations, 'product_id');
    const groupImages = lodash_1.default.groupBy(productImages, 'product_id');
    const productsEmbedded = products.map(product => ({
        ...product,
        variations: groupedVariations[product.id],
        images: groupImages[product.id]
    }));
    res.status(200).json({ products: productsEmbedded });
};
exports.fetchAllUserProducts = fetchAllUserProducts;
const fetchUserProductBySlug = async (req, res) => {
    const product = await productServices.fetchProductsBySlug(req.params.slug);
    if (product === null) {
        res.status(500).json({ message: "Error fetching products" });
        return;
    }
    const productVariations = await (0, productVariations_services_1.fetchProductVariationsByProductId)({ productId: product.id, client: "user" });
    if (!productVariations) {
        res.status(500).json({ message: "Error fetching products" });
        return;
    }
    const productImages = await (0, productImages_services_1.fetchProductImagesByProductId)(product.id);
    product.variations = productVariations;
    product.images = productImages ?? [];
    let relatedProducts = [];
    const related = await productServices.fetchRelatedProductsByProductId(product.id);
    if (related && related.length) {
        const relatedIds = related?.map(product => product.id);
        const relatedProductVariations = (0, productVariations_services_1.fetchProductVariationByProductsArray)({ productIds: relatedIds, client: "user" });
        const groupedRelatedVariations = lodash_1.default.groupBy(relatedProductVariations, "product_id");
        const relatedImages = await (0, productImages_services_1.fetchProductImagesByProductIdArray)(relatedIds);
        const groupedRelatedImages = lodash_1.default.groupBy(relatedImages, "product_id");
        //@ts-expect-error
        relatedProducts = related.map(product => ({
            ...product,
            images: groupedRelatedImages[product.id],
            variations: groupedRelatedVariations[product.id]
        }));
    }
    product.related = relatedProducts;
    res.status(200).json({ product });
};
exports.fetchUserProductBySlug = fetchUserProductBySlug;
const searchUserProducts = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT pc.name as category_name, pc.slug as category_slug, p.name, p.slug FROM products p INNER JOIN product_categories pc ON p.category_id = pc.id WHERE p.name LIKE ? LIMIT 10", null, [`%${req.params.query}%`]);
    if (error) {
        res.status(500).json({
            message: "Error searching for products"
        });
    }
    else if (response) {
        res.status(200).json({
            products: response[0]
        });
    }
};
exports.searchUserProducts = searchUserProducts;
const store = async (req, res) => {
    upload(req, res, async (err) => {
        if (err instanceof multer_1.default.MulterError) {
            res.status(422).json({ errors: [{
                        img: err.message
                    }] });
        }
        else if (err) {
            res.status(500).json({ message: "Error uploading file" });
        }
        else {
            if (!req.files || !req.files.length) {
                res.status(422).json({
                    errors: [{
                            img: "Please inlcude product images"
                        }]
                });
            }
            else {
                const product = req.body;
                product.slug = (0, StrHelper_1.slugify)(product.name);
                product.categoryId = req.body.category_id;
                const { response, error } = await (0, queryHelpers_1.execQuery)("products", "INSERT", ['category_id', 'name', 'slug', 'description'], [product.categoryId, product.name, product.slug, product.description]);
                if (error) {
                    res.status(500).json({ message: "There was an error storing product" });
                }
                else {
                    const files = req.files;
                    files.forEach(async (file) => {
                        const productImage = {
                            productId: response?.[0].insertId,
                            pathUrl: file.filename,
                            ext: file.mimetype
                        };
                        await (0, queryHelpers_1.execQuery)("product_images", "INSERT", ['product_id', 'path_url', 'ext'], [productImage.productId, productImage.pathUrl, productImage.ext]);
                    });
                    res.status(200).json({
                        status: true
                    });
                }
            }
        }
    });
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
};
exports.destroyById = destroyById;
