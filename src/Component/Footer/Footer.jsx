import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const date = new Date();
const yyyy = date.getFullYear();
const Footer = () => {
  return (
    <div className="border-t-4 border-blue-500">
      <div className="bg-black pt-9">
        <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-[316px]">
              <h1 className="text-[18px] font-medium text-white">
                <p className="text-white font-extrabold">
                  <span className="text-blue-600">CORPORATE </span>SOLUTION
                </p>
              </h1>
              <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                fugit non. Incidunt dolorum adipisci, tempore asperiores nemo
                odio facere officiis enim animi placeat eaque nesciunt alias
                beatae id, at dicta.
              </p>
              <div className="mt-[18px] flex gap-4 text-white">
                <Link>
                  <FaFacebook className="hover:text-blue-600 text-2xl hover:-translate-y-1 transition-all">
                    {" "}
                  </FaFacebook>
                </Link>

                <Link>
                  <FaLinkedin className="hover:text-blue-600 text-2xl hover:-translate-y-1 transition-all"></FaLinkedin>
                </Link>

                <Link>
                  <FaInstagram className="hover:text-blue-600 text-2xl hover:-translate-y-1 transition-all">
                    {" "}
                  </FaInstagram>
                </Link>

                <Link>
                  <FaTwitter className="hover:text-blue-600 text-2xl hover:-translate-y-1 transition-all"></FaTwitter>
                </Link>

                <Link>
                  <FaYoutube className="hover:text-blue-600 text-2xl hover:-translate-y-1 transition-all"></FaYoutube>
                </Link>
              </div>
            </div>
            <div className="md:w-[316px]">
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <FaPhone className="hover:text-blue-600 text-xl text-white"></FaPhone>
                </div>
                <div className="ml-[18px]">
                  <a
                    href="tel:+8801706439736"
                    className="font-Inter text-[14px] font-medium text-white"
                  >
                    +8801706439736
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-blue-600">
                    Support Number
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <FaEnvelope className="hover:text-blue-600 text-xl text-white"></FaEnvelope>
                </div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:mohibullahmohim2020@gmail.com"
                    className="font-Inter text-[14px] font-medium text-white"
                  >
                    mohibullahmohim2020@gmail.com
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-blue-600">
                    Support Email
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-[50px] border-white/[0.20]" />
          <div className="mt-[30px] flex flex-col justify-between md:flex-row pb-5">
            <h1 className="text-[12px] font-medium text-white/[0.70]">
              © {yyyy} All Rights Reserved. Various trademarks held by their
              respective manager and employee.
            </h1>
            <div className="mt-[10px] flex items-center gap-4 md:mt-0">
              <a href="/" className="text-[12px] font-medium text-white">
                Privacy Policy
              </a>
              <a href="/" className="text-[12px] font-medium text-white">
                Terms of Service
              </a>
              <a href="/" className="text-[12px] font-medium text-white">
                Cookie settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
