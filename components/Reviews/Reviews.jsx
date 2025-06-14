import React, { useState, useEffect } from "react";
import "./Reviews.css";
import Image from "next/image";
import { testimonials } from "../../data/home";

const ReviewChild = ({ name, position, quote, image }) => {
  return (
    <div className="child w-full rounded-3xl bg-[#f4f4f4] p-8 pb-8 mb-6 shadow-lg">
      <div className="flex">
        {/* <Image
          src={image}
          width={40}
          height={40}
          className="rounded-full"
          alt={name}
        /> */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-800">{name}</h2>
          <h3 className="text-sm text-gray-600">{position}</h3>
        </div>
      </div>
      <p className="text-gray-700 mt-3">{quote}</p>
    </div>
  );
};

const Reviews = () => {
  const [hoveredColumns, setHoveredColumns] = useState([false, false, false]);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (columnIndex) => {
    setHoveredColumns((prev) => {
      const newState = [...prev];
      newState[columnIndex] = true;
      return newState;
    });
  };

  const handleMouseLeave = (columnIndex) => {
    setHoveredColumns((prev) => {
      const newState = [...prev];
      newState[columnIndex] = false;
      return newState;
    });
  };

  return (
    <div className="container mt-14 h-[90vh] overflow-hidden mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[0, 1, 2].map((columnIndex) => (
          <div
            key={columnIndex}
            className="relative"
            onMouseEnter={() => handleMouseEnter(columnIndex)}
            onMouseLeave={() => handleMouseLeave(columnIndex)}
          >
            <div
              className={`vertical-scroll ${
                hoveredColumns[columnIndex] ? "hovered" : ""
              } ${columnIndex === 0 || columnIndex === 2 ? "fast" : ""}`}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => {
                if (
                  (windowWidth >= 1024 && index % 3 === columnIndex) ||
                  (windowWidth >= 640 &&
                    windowWidth < 1024 &&
                    index % 2 === columnIndex % 2) ||
                  windowWidth < 640
                ) {
                  return (
                    <ReviewChild
                      key={`${testimonial.id}-${index}`}
                      name={testimonial.name}
                      position={testimonial.position}
                      quote={testimonial.quote}
                      image={testimonial.image}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
