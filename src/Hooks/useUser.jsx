import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
    const axiosPublic = useAxiosPublic() ;
    const {data : users = []} = useQuery({
        queryKey:['users'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/users`)
          return res.data
        }
      })
    return [users]
};

export default useUser;