import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allUser = [ ], isLoading, refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      console.log('api ',res.data)
      return res.data;
    },
  });
  console.log('users -', allUser)
  return [allUser, isLoading, refetch];
};

export default useAllUser;
