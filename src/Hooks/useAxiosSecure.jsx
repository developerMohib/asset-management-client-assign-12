import axios from "axios";
const axiosSecure = axios.create({
  // baseURL: "https://asset-management-server-brown.vercel.app",
  baseURL: "http://localhost:9000",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
