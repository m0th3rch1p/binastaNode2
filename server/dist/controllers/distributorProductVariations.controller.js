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
exports.destroyById = exports.updateById = exports.store = exports.fetchDistributorProductVariationsByProductSlug = exports.fetchDistributorProductVariations = exports.index = void 0;
const distributorProductVariationServices = __importStar(require("../services/distributorProductVariations.services"));
const queryHelpers_1 = require("../helpers/queryHelpers");
const products_services_1 = require("../services/products.services");
const productImages_services_1 = require("../services/productImages.services");
const index = async (req, res) => {
    const { response: distributorproductvariations, error } = await (0, queryHelpers_1.execQuery)("distributor_product_variations", "SELECTALL");
    if (error) {
        res.status(500).json({ message: "error fetching distributorproductvariations" });
    }
    else if (distributorproductvariations) {
        res.status(200).json({ distributorproductvariations });
    }
};
exports.index = index;
const fetchDistributorProductVariations = async (req, res) => {
    const products = await distributorProductVariationServices.fetchDistributorProductVariations("distributor", req.session.user_id);
    if (!products) {
        res.status(500).json({ message: 'Error fetching distributor product variations' });
    }
    else {
        res.status(200).json({ products });
    }
};
exports.fetchDistributorProductVariations = fetchDistributorProductVariations;
const fetchDistributorProductVariationsByProductSlug = async (req, res) => {
    const product = await (0, products_services_1.fetchProductsBySlug)(req.params.slug);
    if (!product) {
        res.status(500).json({ message: 'Error fetching distributor product' });
        return;
    }
    else if (!product.length) {
        res.status(404).json({ message: 'Product not found' });
        return;
    }
    const productImages = await (0, productImages_services_1.fetchProductImagesByProductId)(product[0].id);
    console.log(productImages);
    if (productImages) {
        product[0].images = productImages;
    }
    const productVaraitions = await distributorProductVariationServices.fetchDistributorProductVariationsByProductById("distributor", req.session.user_id, product[0].id);
    if (!productVaraitions) {
        res.status(500).json({ message: 'Error fetching distributor product' });
        return;
    }
    product[0].variations = productVaraitions;
    res.status(200).json({ product: product[0] });
};
exports.fetchDistributorProductVariationsByProductSlug = fetchDistributorProductVariationsByProductSlug;
const store = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_product_variations", "INSERT", [], []);
    if (error) {
        res.status(500).json({ message: "error fetching distributorproductvariations" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_product_variations", "UPDATEBYID", [], []);
    if (error) {
        res.status(500).json({ message: "error updating distributorproductvariations" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_product_variations", "DELETEBYID", ["id"], [req.params.id]);
    if (error) {
        res.status(500).json({ message: "error deleting distributorproductvariations" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
