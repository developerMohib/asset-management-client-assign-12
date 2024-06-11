import useAuth from "../../Hooks/useAuth";
import Spinner from "../Spinner/Spinner";

const NotAffaliate = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1> You are not affaliate yet </h1>
        <p> Contact Your HR Manager </p>
      </div>
    </div>
  );
};

export default NotAffaliate;
