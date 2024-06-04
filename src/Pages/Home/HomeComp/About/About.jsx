import { MdSevereCold } from "react-icons/md";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonNumber4, } from "react-icons/tb";

const About = () => {
  return (
    <div className="bg-gray-700 p-4 min-h-screen mt-20 rounded-lg">
      <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2">
          <MdSevereCold className="text-white text-5xl "> </MdSevereCold>
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
            How we work?
          </h2>
          <p className="text-gray-300">
            We follow our process to get you started as quickly as possible
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
            <TbHexagonNumber1 className="text-white text-5xl " ></TbHexagonNumber1>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Initial Discussion
                </h5>
                <p className="text-gray-300">
                  We will have discussions on the requirements to ensure your
                  MVP (Minimum Viable Product) is ready for the initial launch
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
            <TbHexagonNumber2 className="text-white text-5xl " ></TbHexagonNumber2>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Deal Finalized
                </h5>
                <p className="text-gray-300">
                  Once we agree on what to build, We will start working on it
                  right away.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
            <TbHexagonNumber3 className="text-white text-5xl " ></TbHexagonNumber3>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Product Delivery
                </h5>
                <p className="text-gray-300">
                  We will develop your product MVP in 15 days (more time
                  required depending on the complexity of the project)
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
            <TbHexagonNumber4 className="text-white text-5xl " ></TbHexagonNumber4>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Celebrate your Launch
                </h5>
                <p className="text-gray-300">
                  We love Celebrations. We will celebrate your launch on our
                  Social Profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
