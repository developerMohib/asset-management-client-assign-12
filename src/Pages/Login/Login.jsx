import { Link } from "react-router-dom";
import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import loginImage from "../../assets/login-to-access.jpg";
import GoogleLogin from "../../Component/SocialLogin/GoogleLogin/GoogleLogin";
import FacebookLogin from "../../Component/SocialLogin/FacebookLogin/FacebookLogin";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const handleLogin = () => {
    console.log("hello");
  };
  return (
    <div>
      <HelmetTitle routeName={"Login"}></HelmetTitle>

      <div className="md:flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-5">
        <div className="mt-3 w-full">
          <p className="text-center font-bold text-3xl mb-5">Please Sign in </p>
        </div>
        <div className="md:flex shadow-md p-2 ">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
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
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3 relative ">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-1 top-1/2 cursor-pointer"
                  >
                    {showPass === false ? (
                      <IoMdEye className="text-2xl" />
                    ) : (
                      <IoEyeOff className="text-2xl" />
                    )}
                  </span>
                </div>
                {/* Third Party Login  */}
                <div className="mb-3">
                  <GoogleLogin></GoogleLogin>
                  <FacebookLogin></FacebookLogin>
                </div>
              </form>

              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">
                  Dont have account?
                </span>
                <Link
                  className="text-xs font-semibold text-purple-700"
                  to="/register"
                >
                  {" "}
                  Sign up{" "}
                </Link>
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
