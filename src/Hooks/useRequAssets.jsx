import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useRequAssets = () => {
    const axiosSecure = useAxiosSecure();
    const {data : requProducts = [], isLoading, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get('/requ-product');
            // console.log(res.data);
            return res.data ;
        }
    })
    return [requProducts, isLoading, refetch]
};

export default useRequAssets;