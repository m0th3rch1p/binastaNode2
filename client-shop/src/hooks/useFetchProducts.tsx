import { useFetchProductsQuery, useFetchSingleProductQuery } from "@/store/reducers/productsSlice";
import { useState } from "react";

export const useFetchProducts = () => {
    const [ currentOffset, setCurrentOffset ] = useState(0);
    
    const { data: products, isLoading, isSuccess, isError } = useFetchProductsQuery({ offset: currentOffset });

    return {
        currentOffset,
        setCurrentOffset,
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