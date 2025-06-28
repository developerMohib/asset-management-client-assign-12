const Subscription = () => {
  return (
    <header className="text-gray-800">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-textPri lg:text-4xl">
                Subscribe To The{" "}
                <span className="text-primary">Newsletter</span>
              </h1>

              <p className="mt-3 text-textPri ">
                be the first to knows when our{" "}
                <span className="font-medium text-primary">Brand</span> is live
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-textPri bg-bgPr border rounded-md i dark:border-gray-600 focus:border-borderSec dark:focus:borderSec focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-borderSec"
                  placeholder="Email Address"
                />

                <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src="https://merakiui.com/images/components/Email-campaign-bro.svg"
              alt="email illustration vector art"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Subscription;
