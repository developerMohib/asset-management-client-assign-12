import useUser from "../../Hooks/useUser";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaLinkedinIn,FaFacebookF } from "react-icons/fa";
import InstagramIcon from '@mui/icons-material/Instagram';
import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
const Profile = () => {
  const { loginUser } = useUser();
  console.log(loginUser);
  const profileUpdate = () => {
    console.log("ami ", loginUser.name);
  };
  return (
    <div>
      <HelmetTitle routeName={"Profile"}></HelmetTitle>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={loginUser.userPhoto}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  >
                    {/* <img src="https://randomuser.me/api/portraits/men/94.jpg" */}
                  </img>
                  <h1 className="text-xl font-bold">{loginUser.name}</h1>
                  <p className="text-gray-700 capitalize text-center ">
                    {" "}
                    {loginUser.status} of {loginUser.companyName}{" "}
                  </p>
                  <small>{loginUser.email}</small>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Contact
                    </a>
                    <a
                      onClick={profileUpdate}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Update
                    </a>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  {loginUser.status === "manager" ? (
                    <>
                      <span className="text-gray-700 uppercase font-bold tracking-wider my-2">
                        My Purchase Packages
                      </span>
                      <ul>
                        <li className="mb-2"> My Birth Date : {loginUser.birthDate} </li>
                        <li className="mb-2"> Member : {loginUser.member} </li>
                        <li className="mb-2"> Price : ${loginUser.price} </li>
                        <li className="mb-2"> Company Name : {loginUser.companyName} </li>
                      </ul>
                    </>
                  ) : (
                    <><span className="text-gray-700 uppercase font-bold tracking-wider my-2">
                    My Purchase Packages
                  </span>
                  <ul>
                    <li className="mb-2"> Name : {loginUser.name} </li>
                    <li className="mb-2"> My Birth Date : {loginUser.birthDate} </li>
                    </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700">
                  Authoritatively promote excellent human capital without
                  cooperative scenarios. Assertively extend focused platforms
                  with effective infrastructures. Compellingly network
                  backward-compatible human capital with emerging internal or
                  organic sources. Completely pontificate clicks-and-mortar
                  human capital through ubiquitous.
                </p>

                <h3 className="font-semibold text-center mt-3 -mb-2">
                  Find me on
                </h3>
                <div className="flex justify-center items-center gap-6 my-6">
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds LinkedIn"
                    href=""
                    target="_blank"
                  > <FaLinkedinIn></FaLinkedinIn>                    
                  </a>
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds YouTube"
                    href=""
                    target="_blank"
                  >
                    <YouTubeIcon className="h-6"></YouTubeIcon>
                  </a>
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds Facebook"
                    href=""
                    target="_blank"
                  >
                    <FaFacebookF></FaFacebookF>
                  </a>
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds Instagram"
                    href=""
                    target="_blank"
                  >
                    <InstagramIcon></InstagramIcon>
                  </a>
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds Twitter"
                    href=""
                    target="_blank"
                  >
                    <TwitterIcon></TwitterIcon>
                  </a>
                </div>

                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Web Developer
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">at ABC Company</span>
                      <span className="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Uniquely foster premium process improvements with front-end
                    convergence. Credibly deploy customized results through
                    multimedia based imperatives. Monotonectally monetize
                    optimal data.
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Web Developer
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">at ABC Company</span>
                      <span className="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Uniquely foster premium process improvements with front-end
                    convergence. Credibly deploy customized results through
                    multimedia based imperatives. Monotonectally monetize
                    optimal data.
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Web Developer
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">at ABC Company</span>
                      <span className="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Uniquely foster premium process improvements with front-end
                    convergence. Credibly deploy customized results through
                    multimedia based imperatives. Monotonectally monetize
                    optimal data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
