"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.index = void 0;
const queryHelpers_1 = require("@/helpers/queryHelpers");
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
const store = async (req, res) => {
    const productVariation = req.body;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "INSERT", [
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
        productVariation.productId,
        productVariation.variation,
        productVariation.buyPrice,
        productVariation.salePrice,
        productVariation.wholesalePrice,
        productVariation.recommendedPrice,
        productVariation.wholesaleMin,
        productVariation.stock,
        productVariation.sold
    ]);
    if (error) {
        res.status(500).json({ message: 'Error storing product variations' });
    }
    else if (response) {
        res.status(200).json({
            status: response.affectedRows
        });
    }
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
        productVariation.productId,
        productVariation.variation,
        productVariation.buyPrice,
        productVariation.salePrice,
        productVariation.wholesalePrice,
        productVariation.recommendedPrice,
        productVariation.wholesaleMin,
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
