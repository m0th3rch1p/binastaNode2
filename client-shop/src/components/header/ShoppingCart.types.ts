import { Product } from "@/api/productsApi";
import { ProductVariation } from "@/types/ProductVariation.type";

export type ShoppingCart = {
    total: number,
    cart: {
        products: {
            selectedVariation: ProductVariation,
            quantity: number,
            product: Product
        }[]
    }
}