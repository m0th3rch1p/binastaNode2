import { Product } from "@/store/reducers/productsSlice"

export type ProductVariation = {
    id?: number,
    product_name?: string,
    variation: string,
    buy_price: number,
    wholesale_min?: number,
    images?: Product["images"],
    quantity?: number,
}