import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUser from "./useUser";


const useRequAssets = () => {
    const axiosSecure = useAxiosSecure();
    const {loginUser} = useUser();
    console.log(loginUser.email,'login user')
    const {data : requProducts = [], isLoading, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/requ-product/${loginUser?.email}`);
            return res.data ;
        }
    })
    return [requProducts, isLoading, refetch]
};

export default useRequAssets;