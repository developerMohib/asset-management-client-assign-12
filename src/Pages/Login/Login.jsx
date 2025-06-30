import { Link, useLocation, useNavigate } from "react-router-dom";
import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import loginImage from "../../assets/login-to-access.jpg";
import GoogleLogin from "../../Component/SocialLogin/GoogleLogin/GoogleLogin";
import FacebookLogin from "../../Component/SocialLogin/FacebookLogin/FacebookLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [passValue, setPassValue] = useState("");
  const { loginWithEmailPass } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const notifyLogin = () => toast.success("Login successfully");

  const handleLogin = (e) => {
    e.preventDefault();
    const value = e.target;
    const email = value.email.value;
    const password = value.password.value;

    loginWithEmailPass(email, password)
      .then(() => {
        notifyLogin();
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed")
      });
  };

  return (
    <div>
      <HelmetTitle routeName={"Login"}></HelmetTitle>

      <div className="md:flex flex-wrap min-h-screen w-full content-center justify-center py-5">
        <div className="mt-3 w-full">
          <p className="text-center font-bold text-3xl mb-5">Please Sign in </p>
        </div>
        <div className="md:flex shadow-md p-2 ">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md"
            style={{ width: "24rem", height: "32rem" }}
          >
            <div className="w-72">
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <small className="text-gray-400">
                Welcome back! Please enter your details
              </small>

              <form onSubmit={handleLogin} className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-borderPri focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-textPri"
                  />
                </div>

                <div className="mb-3 relative ">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    onChange={(e) => setPassValue(e.target.value)}
                    name="password"
                    placeholder="*****"

                    className="block w-full rounded-md border border-borderPri focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                  {passValue.length > 0 && (
                    <span
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-1 top-1/2 cursor-pointer"
                    >
                      {showPass ? (
                        <IoEyeOff className="text-2xl" />
                      ) : (
                        <IoMdEye className="text-2xl" />
                      )}
                    </span>
                  )}

                </div>
                {/* Third Party Login  */}
                <div className="mb-3">
                  <input
                    className={`mb-1.5 block w-full text-center text-white bg-primary hover:bg-green-500 px-2 py-1.5 rounded-md cursor-pointer`}
                    type="submit"
                    value="Sign in"
                  />
                  <GoogleLogin />
                  <FacebookLogin />
                </div>
              </form>

              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">
                  Dont have account? {"  "}
                </span>

                {/* go to sign up */}

                <button
                  onClick={() => document.getElementById("signUp").showModal()}
                >
                  {" "}
                  sign up{" "}
                </button>
                <dialog className="modal" id="signUp">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="text-lg my-5">
                      {" "}
                      COOL! Which one you prefer!{" "}
                    </h3>
                    <div>
                      <Link to="/join-employee">
                        {" "}
                        <button className="btn btn-outline">
                          As an Employee
                        </button>{" "}
                      </Link>
                      <Link to="/join-manager">
                        {" "}
                        <button className="btn btn-outline">
                          As a Manager
                        </button>
                      </Link>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>

          <div
            className="flex flex-wrap content-center justify-center rounded-r-md"
            style={{ width: "24rem", height: "32rem" }}
          >
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src={loginImage}
              alt="Log in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
