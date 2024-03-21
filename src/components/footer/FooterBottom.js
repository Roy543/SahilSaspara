import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";

const FooterBottom = () => {
  const year = new Date();

  return (
    <div className="w-full flex flex-col items-center py-10">

        <div className="w-[370px] h-[550px] md:w-[580px] md:h-[350px] rounded-xl flex flex-col md:flex-row items-center justify-center gap-4 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne">
          <div>
          <img className="w-52 rounded-full" src={logo} alt="logo" />
          </div>
            

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col h-full items-center gap-4">
              <h3 className="text-3xl font-bold text-white">Sahil Saspara</h3>
              <p className="text-lg font-normal text-gray-400">
                MERN Stack Developer
              </p>
              <p className="text-base text-gray-400 gap-2">
                Phone: <span className="text-lightText">+49 17658681229</span>
              </p>
              <p className="text-base text-gray-400 gap-2">
                WhatsApp: <span className="text-lightText">+91 9879833433</span>
              </p>
              <p className="text-base text-gray-400  gap-2">
                Email:{" "}
                <span className="text-lightText">
                  sahilsaspara2021@gmail.com
                </span>
              </p>
            </div>

            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>


      <p className="text-center text-gray-500 text-base py-8">
        © {year.getFullYear()}. All rights reserved by Sahil Saspara
      </p>
    </div>
  );
};

export default FooterBottom;
