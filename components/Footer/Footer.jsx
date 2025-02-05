import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <div className="w-full flex flex-col xss:items-center sm:flex-row sm:justify-between mt-[10rem] border-t py-10 bg-white text-black">
      <div className="xss:mb-8 sm:mb-0 xss:text-center sm:text-left">
        <div className="flex xss:justify-center sm:justify-start items-center space-x-1.5 font-bold">
          <img
            src="/plain.webp"
            alt="ScaleOxperts Logo"
            className="w-12 h-auto object-contain"
          />
          <h2 className="text-[1.5rem] text-black leading-5 font-bold">
            ScaleOxperts
          </h2>
        </div>
        <p className="text-sm mt-2.5 font-inter text-gray-900">
          Scaling Business Unlocking Potential
        </p>
        <p className="text-xs mt-1 font-inter text-gray-600 italic">
          ISO 9001:2015 Certified Consulting Organization
        </p>
      </div>
      <div className="flex xss:justify-center sm:justify-start items-center space-x-3 text-sm">
        <a
          href="mailto:contact@scaleoxperts.com"
          className="ri-at-line sm:text-[2.2rem] xss:text-[2rem] text-black transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
        ></a>
        <a
          href="https://wa.me/1234567890"
          className="ri-whatsapp-fill sm:text-[2.2rem] xss:text-[2rem] text-black transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
        ></a>
        <a
          href="https://linkedin.com/company/scaleoxperts"
          className="ri-linkedin-fill sm:text-[2.2rem] xss:text-[2rem] text-black transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
        ></a>
        {/* <a href="https://github.com/scaleoxperts" className="ri-github-fill sm:text-[2.2rem] xss:text-[2rem] text-black transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"></a> */}
      </div>
    </div>
  );
};

export default Footer;
