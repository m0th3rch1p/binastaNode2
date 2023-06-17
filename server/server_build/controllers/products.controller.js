"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.searchUserProducts = exports.fetchUserProductsByCategorySlug = exports.fetchUserProductBySlug = exports.fetchAllUserProducts = exports.index = void 0;
const multer_1 = __importDefault(require("multer"));
const queryHelpers_1 = require("@/helpers/queryHelpers");
const lodash_1 = __importDefault(require("lodash"));
const StrHelper_1 = require("@/helpers/StrHelper");
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
    const { response: productsArr, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, `
    SELECT p.id, p.name as name, p.slug as slug, p.description FROM products p 
    INNER JOIN (SELECT p.id FROM products p LIMIT ${req.query.per_page} OFFSET ${req.query.offset}) AS tmp USING (id)
    ORDER BY id DESC
    `);
    if (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching products"
        });
        return;
    }
    else if (productsArr) {
        const productIds = lodash_1.default.map(productsArr[0], (product) => product.id);
        const { response: variationsArr, error } = await (0, queryHelpers_1.execQuery)("product_variations", `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds);
        const { response: imagesArr, error: imagesError } = await (0, queryHelpers_1.execQuery)("producty_images", `SELECT pi.product_id, pi.path_url as url, pi.ext FROM product_images pi WHERE pi.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds);
        const groupedVariations = lodash_1.default.groupBy(variationsArr?.[0], 'product_id');
        const groupImages = lodash_1.default.groupBy(imagesArr?.[0], 'product_id');
        const productsEmbedded = lodash_1.default.map(productsArr[0], (record) => {
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
    const { response: productsArr, error: productsErr } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, `SELECT p.id, p.category_id, p.name as name, p.slug as slug, p.description FROM products p WHERE p.slug = ? LIMIT 1`, null, [req.params.slug]);
    if (productsErr) {
        res.status(500).json({
            message: "Error fetching products"
        });
    }
    else if (productsArr) {
        const productIds = lodash_1.default.map(productsArr[0], (product) => product.id);
        const { response: variationsArr, error } = await (0, queryHelpers_1.execQuery)("product_variations", `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds);
        const { response: imagesArr, error: imagesError } = await (0, queryHelpers_1.execQuery)("producty_images", `SELECT pi.product_id, pi.path_url as url FROM product_images pi WHERE pi.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds);
        const { response: relatedArr } = await (0, queryHelpers_1.execQuery)("products", `SELECT p.id, p.name as name, p.slug as slug, p.description FROM products p WHERE p.category_id = ? LIMIT 8`, null, [productsArr[0][0].category_id]);
        if (relatedArr) {
            const relatedProductsId = lodash_1.default.map(relatedArr[0], (related) => related.id);
            const { response: relatedVariationsArr } = await (0, queryHelpers_1.execQuery)("product_variations", `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(relatedProductsId.length).slice(1)})`, null, relatedProductsId);
            const groupedRelatedVariations = lodash_1.default.groupBy(relatedVariationsArr?.[0], 'product_id');
            const groupedVariations = lodash_1.default.groupBy(variationsArr?.[0], 'product_id');
            const groupImages = lodash_1.default.groupBy(imagesArr?.[0], 'product_id');
            const relatedEmbedded = lodash_1.default.map(relatedArr?.[0], (record) => {
                return {
                    ...record,
                    variations: groupedRelatedVariations[record.id]
                };
            });
            const productsEmbedded = lodash_1.default.map(productsArr?.[0], (record) => {
                return {
                    ...record,
                    variations: groupedVariations[record.id],
                    images: groupImages[record.id],
                    related: relatedEmbedded
                };
            });
            res.status(200).json({ product: productsEmbedded });
        }
    }
};
exports.fetchUserProductBySlug = fetchUserProductBySlug;
const fetchUserProductsByCategorySlug = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT pc.name as category_name, pc.slug as category_slug, p.name, p.slug FROM products p INNER JOIN product_categories pc ON p.category_id = pc.id WHERE pc.slug = ?", null, [req.params.slug]);
    if (error) {
        res.status(500).json({
            message: "Error fetching products"
        });
    }
    else if (response) {
        res.status(200).json({
            products: response[0]
        });
    }
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
