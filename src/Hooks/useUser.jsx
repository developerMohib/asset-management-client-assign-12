import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useUser = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const email = user?.email;
    const { data: loginUser = [], refetch } = useQuery({
      queryKey: ["user"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/users/${email}`);
        return res.data;
      },
    });
    return {loginUser, refetch};
};

export default useUser;