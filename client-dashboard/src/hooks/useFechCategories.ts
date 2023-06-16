import { useFetchBlogCategoriesQuery } from "@/store/reducers/blogCategoriesSlice";

function useFechCategories() {
    const { data: fetchedCategories, isLoading, isSuccess, isError } = useFetchBlogCategoriesQuery();

  return {
    fetchedCategories
  }
}

export default useFechCategories