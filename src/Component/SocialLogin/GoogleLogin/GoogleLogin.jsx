import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const { loginWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    loginWithGoogle().then((res) => {

      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
        birthDate: 'birthDate',
        userPhoto: res.user?.photoURL,
        companyLogo: 'company logoURL',
        status: "employee",
        affaliate: false,
      };

      // data send to database
      axiosPublic
        .post(`/users`, userInfo)
        .then((res) => {
          if (res?.data?.insertedId) {
            // toast.success("log in successfully as a employee");

            Swal.fire({
              position: "center",
              icon: "success",
              title: "log in successfully as a employee",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(from, { replace: true });
          }
        })
        .catch((err) => {
          console.log("err ", err);
        });

      // toast.success("login successfully");
      // navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md"
      >
        <img
          className="w-5 mr-2"
          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
