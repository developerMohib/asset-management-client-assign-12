import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllRequestProducts = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: requestedProduct = [], isLoading, refetch,} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/requ-product`);
      return res.data;
    },
  });
  return [requestedProduct, isLoading, refetch];
};

export default useAllRequestProducts;
