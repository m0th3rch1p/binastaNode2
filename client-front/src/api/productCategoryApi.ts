import api from "./api";

export type ProductCategory = {
    name: string,
    slug: string
};

export type ProductCategoriesResponse = {
    categories: ProductCategory[]
};

export const fetchProductCategories = () => api.get<ProductCategoriesResponse>("product_categories").then((res) => {
    return res.data.categories;
});