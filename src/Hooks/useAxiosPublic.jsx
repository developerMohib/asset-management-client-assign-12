import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://asset-management-server-brown.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
