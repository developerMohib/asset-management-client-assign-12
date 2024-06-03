import { useContext } from "react";

const useAuth = () => {
    const author = useContext()
    return author ;
};

export default useAuth;