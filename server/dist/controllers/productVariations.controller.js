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
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.fetchProductVariationsByProductRef = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const productVariationServices = __importStar(require("../services/productVariations.services"));
const TABLE_NAME = "product_variations";
const index = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECTALL");
    if (error) {
        res.status(500).json({ message: 'Error fetching product variants' });
    }
    else if (response) {
        const [variations] = response;
        res.status(200).json({
            variations
        });
    }
};
exports.index = index;
const fetchProductVariationsByProductRef = async (req, res) => {
    const product_variations = await productVariationServices.fetchProductVariationsByProductRef(req.params.ref, "admin");
    if (!product_variations) {
        res.status(500).json({ message: "Error fetching product variations" });
        return;
    }
    res.status(200).json({ product_variations });
};
exports.fetchProductVariationsByProductRef = fetchProductVariationsByProductRef;
const store = async (req, res) => {
    const productVariation = req.body;
    const response = await productVariationServices.storeProductVariation("admin", productVariation);
    if (!response) {
        res.status(500).json({ message: 'Error storing product variations' });
        return;
    }
    ;
    res.status(200).json({
        status: response.affectedRows
    });
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const productVariation = { ...req.params, ...req.body };
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "UPDATEBYID", [
        'product_id',
        'variation',
        'buy_price',
        'sale_price',
        'wholesale_price',
        'recommended_price',
        'wholesale_min',
        'stock',
        'sold'
    ], [
        productVariation.product_id,
        productVariation.variation,
        productVariation.buy_price,
        productVariation.sale_rice,
        productVariation.wholesale_price,
        productVariation.recommended_price,
        productVariation.wholesale_min,
        productVariation.stock,
        productVariation.sold,
        productVariation.id
    ]);
    if (error) {
        res.status(500).json({ message: 'Error updating product variations' });
    }
    else if (response) {
        res.status(200).json({
            status: response.affectedRows
        });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "DELETEBYID", null, [req.params.id]);
    if (error) {
        res.status(500).json({ message: 'Error deleting product variations' });
    }
    else if (response) {
        res.status(200).json({
            status: response.affectedRows
        });
    }
};
exports.destroyById = destroyById;
