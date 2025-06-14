"use client";
import React, { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { NavBar, Footer } from "@/components/layout";
import Image from "next/image";
import  categories from "@/data/services/categories.json";




const PageContent = () => {

  const serviceRefs = useRef({});

  const redirect = () => {
    window.open("https://cal.com/scaleoxperts-zmmvor/30min", "_blank");
  };


  return (
    <div className="min-h-screen pb-[2rem] bg-white relative overflow-hidden">
      <div className="max-w-[88rem] -z-10 mx-auto">
        <div className="z-50">
          <NavBar />
        </div>
        {categories.map((category, index) => (
          <section
            key={index}
            ref={(el) => (serviceRefs.current[category.shortName] = el)}
            className={`container mx-auto pt-[5rem] py-16 flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            <div className="md:w-1/2 relative flex justify-center">
              <div className="relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={550}  // Increased width
                  height={375} // Increased height
                  className="rounded-[0.45rem] shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <h3 className="text-orange-600 font-bold mb-2">OUR SERVICES</h3>
              <h2 className="text-4xl font-bold font-pop mb-4 text-[#0a0a0a]">
                {category.title}
              </h2>
              <p className="text-gray-700 mb-6 font-inter">
                {category.description}
              </p>
              <div className="flex space-x-4">
                <button onClick={redirect} className="bg-[#ff8d1a] text-white px-6 py-2 rounded-full hover:bg-[#fe9328] hover:scale-[1.03] transition duration-300">
                  Schedule a Meeting
                </button>
              </div>
            </div>
          </section>
        ))}
        <Footer />
      </div>
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageContent />
  </Suspense>
);

export default Page;
