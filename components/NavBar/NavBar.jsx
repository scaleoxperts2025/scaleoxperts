import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Careers", route: "/page" },
  ];

  return (
    <nav className="flex max-w-[77rem] mx-auto items-center justify-between pt-6 text-white px-4 sm:px-6">
      <Link
        href="/"
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8d1a] cursor-pointer to-[#CC9900] text-2xl font-mono font-semibold transition-all duration-300 hover:scale-105"
      >
        ScaleOXperts
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.route}
              key={item.name}
              className="text-[#282828] hover:text-[#232323] text-sm sm:text-base font-inter transition-colors duration-300 relative group uppercase"
            >
              {item.name}
              <span className="absolute left-0 right-0 bottom-[-1px] h-[1.3px] bg-[#282828] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button and Contact */}
      <div className="hidden md:flex">
        <Link
          href="/get-started"
          className="ml-4 inline-flex rounded-full h-[2.85rem] px-7 text-white bg-[#ff8d1a] hover:bg-[#fe9328] transition-all duration-300 ease-in-out transform hover:scale-[1.035] hover:shadow-[0_0_15px_rgba(255,165,0,0.3)] text-lg items-center justify-center"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex md:hidden items-center gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-3/4 bg-[#f4f2f0] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-black hover:text-gray-800"
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>
          </div>

          <div className="flex flex-col justify-between h-[calc(100%-2rem)] py-8">
            <ul className="flex flex-col space-y-6 mb-auto">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.route}
                    className="text-2xl text-[#1a1a1a] font-inter hover:text-[#0b0b0b] transition-colors duration-300 relative group"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-0 right-0 bottom-[-1px] h-[1.3px] bg-[#1a1a1a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/get-started"
              className="w-full py-3 text-center rounded-full text-white bg-[#ff8d1a] hover:bg-[#fe9328] transition-all duration-300 block text-lg mt-8"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
