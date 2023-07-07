import * as distributorProductVariationServices from "@/services/distributorProductVariations.services";
import * as productVariationsServices from "@/services/productVariations.services";
import * as productsServices from "@/services/products.services";
import _ from 'lodash';
import * as productImagesServices from "@/services/productImages.services";

import { Client } from "@/types/common.types";

export const fetchDistributorProducts = async (client: Client, tenant_id: number, per_page: number, offset: number) => {
    const distributorProductVariations = await distributorProductVariationServices.fetchDistributorProductVariations(client, tenant_id);
    if (!distributorProductVariations || !distributorProductVariations.length) return null;

    const productVariations = distributorProductVariations.map(variation => variation.product_variation_id);
    if (!productVariations || !productVariations.length) return null;

    const productIds = distributorProductVariations.map(variation => variation.product_id as number);
    const products = await productsServices.fetchProductsByProductIdArray(client, productIds, { perPage: per_page, offset: offset});
    if (!products || !products.length) return null;

    const productImages = await productImagesServices.fetchProductImagesByProductIdArray(productIds);
    if (!productImages || !productImages.length) return null;
    const groupedImages = _.groupBy(productImages, "product_id");
    const groupedVariations = _.groupBy(distributorProductVariations, "product_id");

    return products.map((product) => ({
        ...product,
        images: groupedImages[product.id as number],
        variations: groupedVariations[product.id as number]
    }));
}