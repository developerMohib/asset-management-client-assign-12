import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useUser = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // const email = user?.email;
  const {
    data: loginUser = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  return { loginUser, isLoading, refetch };
};

export default useUser;
