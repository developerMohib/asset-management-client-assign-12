import { MdSevereCold } from "react-icons/md";
import {
  TbHexagonNumber1,
  TbHexagonNumber2,
  TbHexagonNumber3,
  TbHexagonNumber4,
} from "react-icons/tb";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="sm:flex items-center max-w-screen-xl pt-10 pb-5">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="Company" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-textPri border-b-2 border-primary uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-primary">Our Company</span>
            </h2>
            <p className="text-textPri">
            An asset management web application is designed to help businesses efficiently manage their assets, both tangible and intangible. These applications are especially useful for managers and employees in tracking, maintaining, and optimizing the use of company assets.
            </p>
          </div>
          <div className="my-4">
            <Link to='/about-us'>
            <button className="btn btn-outline border-none bg-primary text-textPri"> About Us </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg">
        <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2">
            <MdSevereCold className="text-textPri text-5xl" />
            <h2 className="my-8 text-2xl font-bold text-textPri md:text-4xl">
              How we work?
            </h2>
            <p className="text-textPri">
              We follow our process to get you started as quickly as possible
            </p>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-borderPri overflow-hidden rounded-3xl border text-textPri border-borderPri sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-bgPri transition">
              <div className="relative space-y-8 py-12 p-8">
                <TbHexagonNumber1 className="text-textSec text-5xl "/>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-textSec transition group-hover:text-secondary">
                    Initial Discussion
                  </h5>
                  <p className="text-textSec">
                    We will have discussions on the requirements to ensure your
                    MVP (Minimum Viable Product) is ready for the initial launch
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-bgPri transition">
              <div className="relative space-y-8 py-12 p-8">
                <TbHexagonNumber2 className="text-textSec text-5xl "></TbHexagonNumber2>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-textSec transition group-hover:text-secondary">
                    Deal Finalized
                  </h5>
                  <p className="text-textSec">
                    Once we agree on what to build, We will start working on it
                    right away.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-bgPri transition">
              <div className="relative space-y-8 py-12 p-8">
                <TbHexagonNumber3 className="text-textSec text-5xl "></TbHexagonNumber3>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-textSec transition group-hover:text-secondary">
                    Product Delivery
                  </h5>
                  <p className="text-textSec">
                    We will develop your product MVP in 15 days (more time
                    required depending on the complexity of the project)
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-bgPri transition">
              <div className="relative space-y-8 py-12 p-8">
                <TbHexagonNumber4 className="text-textSec text-5xl "></TbHexagonNumber4>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-textSec transition group-hover:text-secondary">
                    Celebrate your Launch
                  </h5>
                  <p className="text-textSec">
                    We love Celebrations. We will celebrate your launch on our
                    Social Profiles.
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

export default About;
