import { QueryKey } from "@tanstack/react-query";
import api from "./api"
import { ProductVariation } from "@/types/ProductVariation.type";

export type Product = {
    name: string,
    slug: string,
    category_name: string,
    category_slug: string,
    description: string,
    variations: ProductVariation[],
    images: {url:string}[]
};

export type ProductsResponse = {
    products: Product[]
};

export const fetchProducts = () => api.get<ProductsResponse>("/products").then((res) => res.data.products);
export const fetchSingleProduct = ({ queryKey }: { queryKey: QueryKey }) => api.get<ProductsResponse>(`/products/${queryKey}`).then((res) => res.data.products);