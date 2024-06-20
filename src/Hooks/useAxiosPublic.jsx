import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://asset-management-server-brown.vercel.app",
  baseURL: "http://localhost:9000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
