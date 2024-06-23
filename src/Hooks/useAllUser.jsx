import { useEffect, useState } from "react";

const useAllUser = () => {
  const [allUser, setAllUser] = useState([]);
  // const axiosSecure = useAxiosSecure();
  // const { data: allUser = [ ], isLoading, refetch} = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/users`);
  //     console.log('api ',res.data)
  //     return res.data;
  //   },
  // });
  // return [allUser, isLoading, refetch];

  useEffect(() => {
    fetch("https://asset-management-server-brown.vercel.app/employees")
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);
  return [allUser];
};

export default useAllUser;
