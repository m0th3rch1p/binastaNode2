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
exports.destroyById = exports.updateById = exports.store = exports.fetchBySlug = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const StrHelper_1 = require("../helpers/StrHelper");
const multer_1 = __importDefault(require("multer"));
const productCategoriesServices = __importStar(require("../services/productCategories.services"));
const TABLE_NAME = "product_categories";
const multerStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'productCategories');
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
}).single('img');
const index = async (req, res) => {
    const categories = await productCategoriesServices.fetchCategories("admin");
    if (!categories) {
        res.status(500).json({ message: 'Error fetching product categories' });
        return;
    }
    res.status(200).json({ categories });
};
exports.index = index;
//@ts-expect-error
const fetchBySlug = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECTBYCOL", ["slug"], [req.params]);
    if (error) {
        console.error("Error fetching product categories", error);
        res.status(500).json({ message: 'Error fetching product categories' });
    }
    else if (response) {
        const [categories] = response;
        res.status(200).json({ category: categories[0] });
    }
};
exports.fetchBySlug = fetchBySlug;
const store = async (req, res) => {
    upload(req, res, async (err) => {
        if (err instanceof multer_1.default.MulterError || !req.file) {
            res.status(422).json({ errors: [{
                        img: err.message ?? "Please include an image for the category"
                    }] });
            return;
        }
        else if (err) {
            res.status(500).json({ message: "Error uploading file" });
            return;
        }
        const productCategory = req.body;
        productCategory.slug = (0, StrHelper_1.slugify)(productCategory.name);
        productCategory.image_path = req.file?.filename;
        productCategory.ext = req.file?.mimetype;
        const response = await productCategoriesServices.storeCategory(productCategory);
        if (!response) {
            res.status(500).json({ message: 'Error inserting product category' });
        }
        else if (response) {
            res.status(200).json({ status: response.affectedRows });
        }
    });
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const productCategory = req.body;
    productCategory.slug = (0, StrHelper_1.slugify)(productCategory.name);
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "UPDATEBYID", ['name', 'slug'], [productCategory.name, productCategory.slug, productCategory.id]);
    if (error) {
        res.status(500).json({ message: 'Error updating product category' });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "DELETEBYID", null, [req.params.id]);
    if (error) {
        res.status(500).json({ message: 'Error deleting product category' });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
