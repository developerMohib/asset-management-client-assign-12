import { useQuery } from "@tanstack/react-query";
import useUser from "./useUser";
import useAxiosSecure from "./useAxiosSecure";

const useEmployee = () => {
  const { loginUser } = useUser();
  const axiosSecure = useAxiosSecure();
  const {
    data: employee = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["employee", loginUser._id], 
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/teams/${loginUser._id}`);
        return res.data;
      } catch (error) {
        throw new Error("Failed to fetch employee data");
      }
    },
  });

  if (error) {
    console.error("Error fetching employee data:", error);
  }
  return [employee, isLoading, refetch];
};

export default useEmployee;
