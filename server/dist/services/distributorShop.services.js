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
exports.fetchDistributorProducts = void 0;
const distributorProductVariationServices = __importStar(require("./distributorProductVariations.services"));
const productsServices = __importStar(require("./products.services"));
const lodash_1 = __importDefault(require("lodash"));
const productImagesServices = __importStar(require("./productImages.services"));
const fetchDistributorProducts = async (client, tenant_id, per_page, offset) => {
    const distributorProductVariations = await distributorProductVariationServices.fetchDistributorProductVariations(client, tenant_id);
    if (!distributorProductVariations || !distributorProductVariations.length)
        return null;
    const productVariations = distributorProductVariations.map(variation => variation.product_variation_id);
    if (!productVariations || !productVariations.length)
        return null;
    const productIds = distributorProductVariations.map(variation => variation.product_id);
    const products = await productsServices.fetchProductsByProductIdArray(client, productIds, { perPage: per_page, offset: offset });
    if (!products || !products.length)
        return null;
    const productImages = await productImagesServices.fetchProductImagesByProductIdArray(productIds);
    if (!productImages || !productImages.length)
        return null;
    const groupedImages = lodash_1.default.groupBy(productImages, "product_id");
    const groupedVariations = lodash_1.default.groupBy(distributorProductVariations, "product_id");
    return products.map((product) => ({
        ...product,
        images: groupedImages[product.id],
        variations: groupedVariations[product.id]
    }));
};
exports.fetchDistributorProducts = fetchDistributorProducts;
