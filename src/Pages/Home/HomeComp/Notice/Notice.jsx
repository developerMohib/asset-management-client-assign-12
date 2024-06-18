

const Notice = () => {
  return (
    <div className="">
     <div className="container mx-auto my-8">
      <div className="flex flex-col border-l border-gray-200 dark:border-gray-700">
        {/* Timeline Item 1 */}
        <div className="mb-8 ml-4 relative">
          <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm text-gray-400 ml-3">February 2022</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <button className="mt-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            Learn More
            <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>
        {/* Timeline Item 2 */}
        <div className="mb-8 ml-4 relative">
          <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm ml-3 text-gray-400 ">March 2022</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
          </p>
          <button className="mt-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            Learn More
            <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>
        {/* Timeline Item 3 */}
        <div className="mb-8 ml-4 relative">
          <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm ml-3 text-gray-400">April 2022</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </p>
          <button className="mt-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            Learn More
            <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Notice;
