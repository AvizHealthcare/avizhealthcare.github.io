import React from "react";
import "./Footer.css";
import ItemContainer from "./ItemContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Unlock</span> the power of our app
          today! launch
        </h1>

        <div className="flex flex-col items-center">
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white w-full md:w-auto mb-4 mr-4">
            <span className="flex items-center">
              <FaApple className="h-5 w-5 mr-6" />
              <span>Download on the App Store</span>
            </span>
          </button>
          <span className="text-gray-500 mb-4 mt-3 mr-4">OR</span>
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white w-full md:w-auto mr-4">
            <span className="flex items-center">
              <FaGooglePlay className="h-5 w-5 mr-3" />
              <span>Get it on Google Play</span>
            </span>
          </button>
        </div>
      </div>

      <ItemContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8]"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
