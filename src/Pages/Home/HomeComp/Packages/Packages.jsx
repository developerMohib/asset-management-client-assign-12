import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <section className="py-6 text-textPri sm:py-12 md:py-16">
      <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
        <div className="flex flex-col items-center text-center text-textPri border-0 border-borderPri">
          <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-textPri border-solid sm:text-4xl md:text-5xl mb-3">
            Simple, Transparent Pricing
          </h2>
        </div>

        <div className="grid gap-4 mt-4 text-textPri border-0 border-borderPri sm:mt-6 sm:gap-6 md:mt-8 lg:grid-cols-3">
          {/* Price 1 */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border rounded-lg sm:my-0 sm:p-6 md:my-8 md:p-8 hover:-translate-y-2 transition-all">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-textPri border-0 border-borderPri sm:text-3xl md:text-4xl">
              Starter
            </h3>
            <div className="flex items-end mt-6 text-textPri border-0 border-borderPri">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $5
              </p>
              <p className="box-border m-0 border-solid">/ month</p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 text-textPri border-0 border-borderPri">
              <li className="inline-flex items-center w-full mb-2 ml-3 font-semibold border-solid">
                <IoCheckmark className="w-5 h-5 mr-2 font-light text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                5 Employees
              </li>

              <li className="inline-flex items-center w-full mb-2 ml-3 font-semibold border-solid">
                <IoCheckmark className="w-5 h-5 mr-2 font-light text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"></IoCheckmark>
                SSL (HTTPS)
              </li>

              <li className="inline-flex items-center w-full mb-2 ml-3 font-semibold border-solid">
                <IoCheckmark className="w-5 h-5 mr-2 font-light text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"></IoCheckmark>
                SiteFast Domain
              </li>
            </ul>
            <Link to='/' className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-primary no-underline bg-transparent border border-borderSec rounded-md cursor-pointer hover:bg-primary hover:border-borderSec hover:text-white focus-within:bg-borderSec focus-within:border-borderSec sm:text-base md:text-lg">
              Start Now
            </Link>
          </div>

          {/* Price 2 */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border rounded-lg sm:my-0 sm:p-6 md:my-8 md:p-8 hover:-translate-y-2 transition-all">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-textPri border-0 border-borderPri sm:text-3xl md:text-4xl">
              Basic
            </h3>
            <div className="flex items-end mt-6 text-textPri border-0 border-borderPri">
              <p className="box-border m-0 text-6xl font-semibold">$8</p>
              <p className="box-border m-0 border-solid">/ month</p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 text-textPri border-0 border-borderPri">
              <li className="inline-flex items-center w-full mb-2 ml-3 font-semibold border-solid">
                <IoCheckmark className="w-5 h-5 mr-2 font-light text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"></IoCheckmark>
                10 Employees
              </li>

              <li className="inline-flex items-center w-full mb-2 ml-3 font-semibold border-solid">
                <IoCheckmark className="w-5 h-5 mr-2 font-light text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"></IoCheckmark>
                SSL (HTTPS)
              </li>

              <li className="inline-flex items-center w-full mb-2 ml-3 font-semibold border-solid">
                <IoCheckmark className="w-5 h-5 mr-2 font-light text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"></IoCheckmark>
                Custom Domain
              </li>

              <li className="inline-flex items-center w-full mb-2 ml-3 font-semibold  border-solid">
                <IoCheckmark className="w-5 h-5 mr-2 font-light text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"></IoCheckmark>
                SiteFast Branding Removal
              </li>
            </ul>
            <Link className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm text-center text-white bg-blue-600 rounded-md hover:bg-blue-700  hover:text-white sm:text-base md:text-lg">
              Start Now
            </Link>
          </div>

          {/* Price 3 */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border rounded-lg sm:my-0 sm:p-6 md:my-8 md:p-8 hover:-translate-y-2 transition-all">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-textPri border-0 border-borderPri sm:text-3xl md:text-4xl">
              Advancd
            </h3>
            <div className="flex items-end mt-6 text-textPri border-0 border-borderPri">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $15
              </p>
              <p className="box-border m-0 border-solid">/ month</p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 text-textPri border-0 border-borderPri">
              <li className="inline-flex items-center w-full mb-2 ml-3 font-semibold border-solid">
                <IoCheckmark className="w-5 h-5 mr-2 font-light text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"></IoCheckmark>
                20 Employees
              </li>

              <li className="inline-flex items-center w-full mb-2 ml-3 font-semibold border-solid">
                <IoCheckmark className="w-5 h-5 mr-2 font-light text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"></IoCheckmark>
                SSL (HTTPS)
              </li>

              <li className="inline-flex items-center w-full mb-2 ml-3 font-semibold border-solid">
                <IoCheckmark className="w-5 h-5 mr-2 font-light text-primary sm:h-5 sm:w-5 md:h-6 md:w-6"></IoCheckmark>
                SiteFast Domain
              </li>
            </ul>
            <Link to='/' className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-primary no-underline bg-transparent border border-borderSec rounded-md cursor-pointer hover:bg-primary hover:border-borderSec hover:text-white focus-within:bg-borderSec focus-within:border-borderSec sm:text-base md:text-lg">
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
