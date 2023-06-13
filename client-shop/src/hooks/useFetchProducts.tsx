import { useFetchProductsQuery, useFetchSingleProductQuery } from "@/store/reducers/productsSlice";

export const useFetchProducts = () => {
    const { data: products, isLoading, isSuccess, isError } = useFetchProductsQuery();

    return {
        products,
        isLoading,
        isSuccess,
        isError
    }
};

export const useFetchSingleProduct = (slug: string) => {
    const { data: product, isLoading, isSuccess, isError } = useFetchSingleProductQuery({ slug });

    return {
        product,
        isLoading,
        isSuccess,
        isError
    };
};

export default useFetchProducts;