'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = () => {
    window.open("https://cal.com/scaleoxperts-zmmvor/30min", "_blank");
  };

  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Services", route: "/services" },
    { 
      name: "Insights", 
      subitems: [
        { name: "Blog", route: "https://google.com/" },
        { name: "Clients", route: "/clients" }
      ]
    },
    { name: "Careers", route: "/careers" },
  ];

  const handleNavigation = (route, e) => {
    e.preventDefault();
    setIsOpen(false);

    if (route === '/') {
      router.push('/');
    } else if (route === '/?scroll=aboutus') {
      router.push('/?scroll=aboutus');
    } else if (route === '/services') {
      router.push('/services');
    } else if (route.startsWith('http')) {
      window.open(route, '_blank');
    } else {
      router.push(route);
    }
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className="flex max-w-[77rem] mx-auto items-center justify-between pt-6 text-white px-4 sm:px-6">
      <Link
        href="/"
        className="flex flex-col items-start cursor-pointer transition-all duration-300 hover:scale-105"
      >
        <div className="flex items-center space-x-2">
          <img
            src="/plain.webp"
            alt="ScaleOxperts Logo"
            className="sm:w-12 xss:w-11 h-auto object-contain"
          />
          <span className="text-black text-2xl font-mono font-semibold">
            ScaleOXperts
          </span>
        </div>
        <span className="text-[#666666ad] text-xs font-inter mt-0.5">
          ISO 9001-2015 certified consulting org
        </span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            {item.subitems ? (
              <div
                className="text-[#282828] hover:text-[#232323] text-sm sm:text-base font-inter transition-colors duration-300 relative group uppercase cursor-pointer flex items-center"
                onMouseEnter={() => setIsInsightsOpen(true)}
                onMouseLeave={() => setIsInsightsOpen(false)}
              >
                {item.name}
                <RiArrowDownSLine className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute left-0 right-0 bottom-[-1px] h-[1.3px] bg-[#282828] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                
                {/* Dropdown */}
                <div className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out z-50 ${isInsightsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  {item.subitems.map((subitem) => (
                    <a
                      key={subitem.name}
                      href={subitem.route}
                      onClick={(e) => handleNavigation(subitem.route, e)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {subitem.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                href={item.route}
                onClick={(e) => handleNavigation(item.route, e)}
                className="text-[#282828] hover:text-[#232323] text-sm sm:text-base font-inter transition-colors duration-300 relative group uppercase"
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-[-1px] h-[1.3px] bg-[#282828] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button and Contact */}
      <div className="hidden lg:flex">
        <button
          onClick={redirect}
          className="ml-4 inline-flex rounded-full h-[2.85rem] px-7 text-white bg-[#ff8d1a] hover:bg-[#fe9328] transition-all duration-300 ease-in-out transform hover:scale-[1.035] hover:shadow-[0_0_15px_rgba(255,165,0,0.3)] text-lg items-center justify-center"
        >
          Contact Us
        </button>
      </div>
      <div className="flex lg:hidden items-center gap-4">
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
                  {item.subitems ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsInsightsOpen(!isInsightsOpen)}
                        className="text-2xl text-[#1a1a1a] font-inter flex items-center justify-between w-full"
                      >
                        {item.name}
                        <RiArrowDownSLine className={`ml-2 transition-transform duration-300 ${isInsightsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`space-y-2 overflow-hidden transition-all duration-300 ${isInsightsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {item.subitems.map((subitem) => (
                          <a
                            key={subitem.name}
                            href={subitem.route}
                            className="block text-xl text-[#1a1a1a] font-inter hover:text-[#0b0b0b] transition-colors duration-300 pl-4"
                            onClick={(e) => {
                              handleNavigation(subitem.route, e);
                              setIsOpen(false);
                            }}
                          >
                            {subitem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.route}
                      className="text-2xl text-[#1a1a1a] font-inter hover:text-[#0b0b0b] transition-colors duration-300 relative group"
                      onClick={(e) => {
                        handleNavigation(item.route, e);
                        setIsOpen(false);
                      }}
                    >
                      {item.name}
                      <span className="absolute left-0 right-0 bottom-[-1px] h-[1.3px] bg-[#1a1a1a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <button
              
              className="w-full py-3 text-center rounded-full text-white bg-[#ff8d1a] hover:bg-[#fe9328] transition-all duration-300 block text-lg mt-8"
              onClick={redirect}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;