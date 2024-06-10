import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllUser = () => {
    const axiosPublic = useAxiosPublic();
      const { data: allUser = [], refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/users`);
          return res.data;
        },
      });
      return {allUser, refetch}
};

export default useAllUser;