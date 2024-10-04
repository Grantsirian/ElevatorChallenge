import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from './products';

const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
};

export default useProducts;