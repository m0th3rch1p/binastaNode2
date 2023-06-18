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
exports.destroyById = exports.updateById = exports.store = exports.fetchDistributorProducts = exports.searchUserProducts = exports.fetchUserProductsByCategorySlug = exports.fetchUserProductBySlug = exports.fetchAllUserProducts = exports.index = void 0;
const multer_1 = __importDefault(require("multer"));
const queryHelpers_1 = require("../helpers/queryHelpers");
const lodash_1 = __importDefault(require("lodash"));
const StrHelper_1 = require("../helpers/StrHelper");
const productServices = __importStar(require("../services/products.services"));
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
    if (!products[0].length) {
        res.status(200).json({ products: products[0] });
    }
    else {
        const productIds = products[0].map((product) => product.id);
        const { response: variationsArr, error } = await (0, queryHelpers_1.execQuery)("product_variations", `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds);
        const { response: imagesArr, error: imagesError } = await (0, queryHelpers_1.execQuery)("producty_images", `SELECT pi.product_id, pi.path_url as url, pi.ext FROM product_images pi WHERE pi.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds);
        const groupedVariations = lodash_1.default.groupBy(variationsArr?.[0], 'product_id');
        const groupImages = lodash_1.default.groupBy(imagesArr?.[0], 'product_id');
        const productsEmbedded = lodash_1.default.map(products[0], (record) => {
            return {
                ...record,
                variations: groupedVariations[record.id],
                images: groupImages[record.id]
            };
        });
        res.status(200).json({ products: productsEmbedded });
    }
};
exports.fetchAllUserProducts = fetchAllUserProducts;
const fetchUserProductBySlug = async (req, res) => {
    const productArr = await productServices.fetchProductsBySlug(req.params.slug);
    if (!productArr) {
        res.status(500).json({
            message: "Error fetching products"
        });
    }
    else if (!productArr[0]) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    const { response: variationsArr, error } = await (0, queryHelpers_1.execQuery)("product_variations", `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id = ?`, null, [productArr?.[0].id]);
    const { response: imagesArr, error: imagesError } = await (0, queryHelpers_1.execQuery)("producty_images", `SELECT pi.product_id, pi.path_url as url FROM product_images pi WHERE pi.product_id = ?`, null, [productArr?.[0].id]);
    const { response: relatedArr } = await (0, queryHelpers_1.execQuery)("products", `SELECT p.id, p.name as name, p.slug as slug, p.description FROM products p WHERE p.category_id = ? LIMIT 8`, null, [productArr?.[0].category_id]);
    if (relatedArr) {
        const relatedProductsId = lodash_1.default.map(relatedArr[0], (related) => related.id);
        const { response: relatedVariationsArr } = await (0, queryHelpers_1.execQuery)("product_variations", `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(relatedProductsId.length).slice(1)})`, null, relatedProductsId);
        const groupedRelatedVariations = lodash_1.default.groupBy(relatedVariationsArr?.[0], 'product_id');
        const groupedVariations = lodash_1.default.groupBy(variationsArr?.[0], 'product_id');
        const groupedImages = lodash_1.default.groupBy(imagesArr?.[0], 'product_id');
        const relatedEmbedded = lodash_1.default.map(relatedArr?.[0], (record) => {
            return {
                ...record,
                variations: groupedRelatedVariations[record.id]
            };
        });
        (productArr?.[0]).variations = groupedVariations;
        (productArr?.[0]).images = groupedImages;
        res.status(200).json({ product: productArr?.[0], related: relatedEmbedded });
    }
};
exports.fetchUserProductBySlug = fetchUserProductBySlug;
const fetchUserProductsByCategorySlug = async (req, res) => {
    const { response: productsResponse, error: productsError } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, `SELECT pc.name as category_name, pc.slug as category_slug, p.id p.name, p.slug FROM products p 
         INNER JOIN product_categories pc ON p.category_id = pc.id WHERE pc.slug = ?`, null, [req.params.slug]);
    if (!productsError) {
        res.status(500).json({ message: "Error fetching products" });
        return;
    }
    const productIds = productsResponse[0].map((product) => product.id);
    const { response: productVariationsResponse, error: productVariationsError } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, `
        SELECT pv.variation, pv.buyPrice FROM product_variations pv WHERE product_id IN (?)
    `, null, productIds);
    if (productVariationsError) {
        res.status(500).json({ message: "Error fetching products" });
        return;
    }
    const { response: productImagesResponse, error: productImagesError } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, `SELECT path_url FROM product_images WHERE product_id IN (?)`, null, productIds);
    if (productImagesError) {
        res.status(500).json({ message: "Error fetching products" });
        return;
    }
    const groupedProductVariations = lodash_1.default.groupBy(productVariationsResponse[0], 'product_id');
    const groupProductImages = lodash_1.default.groupBy(productImagesResponse[0], 'product_id');
    const products = productsResponse[0].map(product => ({
        ...product,
        images: groupProductImages[product.id],
        variations: groupedProductVariations[product.id]
    }));
    res.status(200).json({ products });
};
exports.fetchUserProductsByCategorySlug = fetchUserProductsByCategorySlug;
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
const fetchDistributorProducts = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT pc.category_name, pc.slug, p.id, p.name, p.slug, p.description FROM products p INNER JOIN product_categories pc ON pc.id = p.category_id ORDERBY DESC");
    if (error) {
        res.status(500).json({
            message: 'Error fetching distributor products'
        });
    }
    else if (response && response[0]) {
        const productIds = response[0].map(product => product.id);
        const { response: productVariationsResponse, error: productVariationsError } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT pv.variation, pv.wholesale_price, pv.recommended_price, pv.wholesale_min WHERE product_variations pv WHERE pv.product_id IN (?)", null, productIds);
        if (productVariationsError || !productVariationsResponse) {
            res.status(500).json({ message: "Error fetching product variations" });
            return;
        }
        const { response: productImagesResponse, error: productImagesError } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT path_url FROM product_images pi WHERE pi.product_id IN (?)", null, productIds);
        if (productImagesError || !productImagesResponse) {
            res.status(500).json({ message: "Error fetching product images" });
            return;
        }
        const groupedVariations = lodash_1.default.groupBy(productVariationsResponse[0], 'product_id');
        const groupedImages = lodash_1.default.groupBy(productImagesResponse[0], 'product_id');
        const products = response[0].map((product => ({
            ...product,
            variations: groupedVariations[product.id],
            images: groupedImages[product.id]
        })));
        res.status(200).json({ products });
    }
};
exports.fetchDistributorProducts = fetchDistributorProducts;
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
