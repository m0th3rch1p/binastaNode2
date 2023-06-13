import { useFetchProductCategoriesQuery } from "@/store/reducers/productCategorySlice";

const useFetchProductCategories = () => {
    const { data: categories, isLoading, isSuccess, isError } = useFetchProductCategoriesQuery();
    return {
        categories,
        isLoading,
        isSuccess,
        isError
    }
};

export default useFetchProductCategories;