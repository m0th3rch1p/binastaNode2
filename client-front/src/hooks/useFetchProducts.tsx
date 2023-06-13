import { useQuery } from "@tanstack/react-query";
import { fetchProducts,Product } from "@/api/productsApi";

const useFetchProducts = () => {
    const { data: products, isLoading, isSuccess, isError } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    return {
        products,
        isLoading,
        isSuccess,
        isError
    }
};

export default useFetchProducts;