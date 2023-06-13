import { useQuery } from "@tanstack/react-query";
import { fetchProductCategories, ProductCategory } from "@/api/productCategoryApi";

const useFetchProductCategories = () => {
    const { data: categories, isLoading, isSuccess, isError } = useQuery<ProductCategory[]>({
        queryKey: ['product-categories'],
        queryFn: fetchProductCategories
    });

    return {
        categories,
        isLoading,
        isSuccess,
        isError
    }
};

export default useFetchProductCategories;