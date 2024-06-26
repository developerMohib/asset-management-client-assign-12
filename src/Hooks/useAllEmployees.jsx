import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllEmployees = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allEmployees = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/employees`);
      console.log("api ", res.data);
      return res.data;
    },
  });
  console.log("all employees", allEmployees);
  return [allEmployees, isLoading, refetch];
};

export default useAllEmployees;
