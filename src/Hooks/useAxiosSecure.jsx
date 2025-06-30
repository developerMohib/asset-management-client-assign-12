import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://asset-management-server-brown.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
