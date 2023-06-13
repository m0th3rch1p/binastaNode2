import api from "./api"

export type Product = {
    name: string,
    slug: string,
    buyPrice: number
};

export type ProductsResponse = {
    products: Product[]
};

export const fetchProducts = () => api.get<ProductsResponse>("/products").then((res) => res.data.products);