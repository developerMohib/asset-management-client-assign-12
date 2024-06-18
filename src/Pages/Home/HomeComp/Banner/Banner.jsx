import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../../../assets/join-as-employee.jpg";
import banner2 from "../../../../assets/join-as-manager.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <header>
            <div
              className="w-full bg-center rounded-lg bg-cover h-[28rem]"
              style={{
                backgroundImage: `url(${banner1})`,
              }}
            >
              <div className="flex items-center justify-center rounded-lg w-full h-full bg-gray-900/65">
                <div className="text-center">
                  <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  Subscribe your <span className="text-blue-400"> web application <br/> </span>{" "}
                  to help businesses
                  </h1>
                  <Link to="/join-employee">
                    <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      Join as an Employee
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </SwiperSlide>

        <SwiperSlide>
          <header>
            <div
              className="w-full bg-center rounded-lg bg-cover h-[28rem]"
              style={{
                backgroundImage: `url(${banner2})`,
              }}
            >
              <div className="flex items-center justify-center rounded-lg w-full h-full bg-gray-900/65">
                <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  Subscribe your <span className="text-blue-400"> web application <br/> </span>{" "}
                  to help businesses
                  </h1>
                  <Link to="/join-manager">
                    <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      Join as a Manager
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
