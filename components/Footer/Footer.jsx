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
        <p className="text-xs mt-2 font-inter text-gray-600">
          3rd Floor, Oyster Complex, Somajiguda, Hyderabad, India
        </p>
      </div>
      <div className="flex xss:justify-center sm:justify-start items-center space-x-3 sm:space-x-4 text-sm">
        <a
          href="mailto:scaleoxperts@gmail.com"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer border border-gray-300"
          aria-label="Email"
        >
          <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png" alt="Gmail" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
        </a>
        <a
          href="https://wa.me/918008129875"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer border border-gray-300"
          aria-label="WhatsApp"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" alt="WhatsApp" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
        </a>
        <a
          href="https://www.instagram.com/scaleoxperts"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer border border-gray-300"
          aria-label="Instagram"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png" alt="Instagram" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
        </a>
        <a
          href="https://maps.app.goo.gl/b74NdrsQJ9bA85vJ7"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer border border-gray-300"
          aria-label="Google Maps"
        >
          <img src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png" alt="Google Maps" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
        </a>
        <a
          href="https://www.linkedin.com/company/scaleoxperts/"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer border border-gray-300"
          aria-label="LinkedIn"
        >
          <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
        </a>
        <a
          href="https://www.facebook.com/share/16GkxrWsT3"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer border border-gray-300"
          aria-label="Facebook"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
