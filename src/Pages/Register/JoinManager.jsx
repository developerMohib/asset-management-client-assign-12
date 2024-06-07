import toast from "react-hot-toast";
import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleLogin from "../../Component/SocialLogin/GoogleLogin/GoogleLogin";
import FacebookLogin from "../../Component/SocialLogin/FacebookLogin/FacebookLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const imgBB_api_Key = import.meta.env.VITE_imgbb_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${imgBB_api_Key}` ;

const JoinManager = () => {
  const axiosPublic = useAxiosPublic() ;
  const { createUser, updateProfileUser } = useAuth();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const [value, setValue] = useState('');

  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const birthDate = data.date;
    const companyName = data.companyName;
    const member = data.member;
    const imageFile = { image: data.logo[0] };

    console.log(
      member,
      name,
      email,
      password,
      birthDate,
      companyName,
      imageFile,
      value     
    );

    const res = await axiosPublic.post(img_hosting_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    const photoURL = res.data.data.display_url;

    // sign up
    createUser(email, password)
      .then(() => {
        updateProfileUser(name, photoURL).then(() => {
          const userInfo = {
            name: name,
            email: email,
            birthDate : birthDate ,
            companyLogo : photoURL,
            status : 'manager'
          };

          // data send to database
          axiosPublic.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
              toast.success('log in successfully as a manager')
              navigate("/", { replace: true });
            }
          })
          .catch(err => {
            console.log('err ',err)
          })

        });
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };
  return (
    <div>
      <HelmetTitle routeName={"Join Manager"}> </HelmetTitle>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center pt-10 bg-[#f4f3f0]">
        <div className="mt-3 w-full">
          <p className="text-center font-bold text-3xl mb-10 ">Welcome back </p>
        </div>
        <div className="flex shadow-md pb-10 w-full">
          <div className="flex flex-wrap content-center justify-center rounded-l-md w-full">
            <div className="md:w-4/5">
              <h1 className="text-xl font-semibold">
                Please Register as a Manager
              </h1>
              <small className="text-gray-400">
                Welcome back! Please enter your details
              </small>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="md:flex gap-4">
                  {/* Manager Name */}
                  <div className="mb-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-semibold">
                      Name
                    </label>
                    <input
                      {...register("name", { required: true, maxLength: 20 })}
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                    {errors.name?.type === "required" && (
                      <p className="text-red-600">Name is required</p>
                    )}
                    {errors.name?.type === "maxLength" && (
                      <p className="text-red-600">
                        Name should not be lenght 20 char
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-semibold">
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                    {errors.email?.type === "required" && (
                      <p className="text-red-600">Email is required</p>
                    )}
                  </div>
                </div>

                <div className="md:flex gap-4">
                  {/* Password */}
                  <div className="mb-3 relative md:w-1/2">
                    <label className="mb-2 block text-xs font-semibold">
                      Password
                    </label>
                    <input
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                      })}
                      type={showPass ? "password" : "text"}
                      name="password"
                      placeholder="*****"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                    <span
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-1 top-1/2 cursor-pointer "
                    >
                      {" "}
                      {showPass === true ? "Show" : "Hide"}{" "}
                    </span>
                    {errors.password?.type === "required" && (
                      <p className="text-red-600">password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        password lenght must be 6 char
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-red-600">
                        password should not be lenght 20 char
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        password should not be one uppercase, one lowercase and
                        one special charecter
                      </p>
                    )}
                  </div>

                  {/* date of birth */}
                  <div className="mb-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-semibold">
                      Date Of Birth
                    </label>
                    <input
                      {...register("date", { required: true })}
                      type="date"
                      name="date"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>
                </div>
                <div className="md:flex gap-4">
                  {/* Company Name */}
                  <div className="mb-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-semibold">
                      Company Name
                    </label>
                    <input
                      {...register("companyName", { required: true })}
                      type="text"
                      name="companyName"
                      placeholder="Enter Company name"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                    {errors.companyName?.type === "required" && (
                      <p className="text-red-600">Company Name is required</p>
                    )}
                    {errors.name?.type === "maxLength" && (
                      <p className="text-red-600">
                        Name should not be lenght 20 char
                      </p>
                    )}
                  </div>

                  {/* Company logo */}
                  <div className="mb-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-semibold">
                      Logo{" "}
                      <span className="font-semibold text-sm text-gray-400">
                        {" "}
                        (if you have){" "}
                      </span>
                    </label>
                    <input
                      {...register("logo")}
                      name="logo"
                      type="file"
                      accept="image/*"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>
                </div>

                {/* Packages Selection */}
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Select Member {value}
                  </label>
                  <select
                    value={value}
                    onChange={handleSelectChange}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  >
                    <option value="">Select a Package </option>
                    <option value="member3">5 Members for $5</option>
                    <option value="member10">10 Members for $8</option>
                    <option value="member20">20 Members for $15</option>
                  </select>
                </div>

                {/* Submit */}
                <div className="mb-3">
                  <input
                    className={`mb-1.5 block w-full text-center text-white bg-blue-600 hover:bg-green-500 px-2 py-1.5 rounded-md cursor-pointer`}
                    type="submit"
                    value="Sign up"
                  />
                  <div className="md:flex gap-4 items-center">
                    <div className="md:w-1/2">
                      <GoogleLogin></GoogleLogin>
                    </div>
                    <div className="md:w-1/2">
                      <FacebookLogin> </FacebookLogin>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center">
                <span className="text-xs text-gray-600 font-semibold">
                  Already have an account?
                </span>
                <Link
                  className="text-xs font-semibold text-purple-700"
                  to="/login"
                >
                  {" "}
                  Sign in{" "}
                </Link>
              </div>
              <div className="text-center">
                <span className="text-xs text-gray-600 font-semibold">
                  Don't want to join as a Manager?
                </span>
                <Link
                  className="text-xs font-semibold text-purple-700"
                  to="/join-employee"
                >
                  {" "}
                  Sign up{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinManager;
