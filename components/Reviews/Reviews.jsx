import React, { useState, useEffect } from "react";
import "./Reviews.css";

// Updated testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company A",
    quote:
      "This digital marketing agency has completely transformed our business. Their strategies and insights have increased our ROI tremendously.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO, Company B",
    quote:
      "Their innovative approach to digital marketing has boosted our online presence and engagement like never before.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Founder, Startup X",
    quote:
      "Our partnership with this digital marketing agency has been extremely beneficial. Their creativity and data-driven strategies are unmatched.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Brown",
    position: "COO, Tech Innovators",
    quote:
      "The results from this digital marketing agency are impressive; they've elevated our brand to new heights.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Alex Chen",
    position: "Lead Developer, AI Solutions",
    quote:
      "We appreciate this digital marketing agency for their exceptional service and commitment to delivering measurable results.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Sarah Thompson",
    position: "Data Scientist, Research Labs",
    quote:
      "This digital marketing agency combines creativity with analytics, creating a winning formula for success.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Robert Garcia",
    position: "Marketing Director, Global Brands",
    quote:
      "Amazing digital marketing agency! Their expertise has helped us optimize our campaigns and reach customers globally.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Lisa Wong",
    position: "UX Designer, Creative Solutions",
    quote:
      "Their digital marketing strategies are innovative and effective, truly making a difference in our growth.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "David Patel",
    position: "CFO, Financial Tech",
    quote:
      "This agency's digital marketing solutions are top-notch and have significantly boosted our brand awareness.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Emma Wilson",
    position: "HR Manager, People First",
    quote:
      "Choosing this digital marketing agency was the best decision we made; their strategies are very effective.",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: 11,
    name: "Chris Taylor",
    position: "Operations Manager, Logistics Pro",
    quote:
      "The digital marketing agency's approach is modern and innovative, consistently driving excellent results.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 12,
    name: "Olivia Martinez",
    position: "Product Manager, Innovate Inc.",
    quote:
      "This digital marketing agency has redefined our marketing strategies, delivering outstanding growth and engagement.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 13,
    name: "Ryan Lee",
    position: "Security Analyst, Cyber Shield",
    quote:
      "A trailblazer in digital marketing, their campaigns deliver remarkable ROI and brand visibility.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 14,
    name: "Sophia Anderson",
    position: "Content Strategist, Media Minds",
    quote:
      "Their digital marketing strategies are creative and impactful, truly transforming our market approach.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 15,
    name: "Daniel Kim",
    position: "CIO, Tech Frontiers",
    quote:
      "Impressive performance by this digital marketing agency; their techniques have boosted our business metrics.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 16,
    name: "Rachel Green",
    position: "Customer Success Manager, Happy Clients",
    quote:
      "The digital marketing agency's insights and execution are exceptionally professional and results-driven.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    id: 17,
    name: "Thomas Wright",
    position: "Research Scientist, BioTech Innovations",
    quote:
      "Working with this digital marketing agency has been a game-changer, showcasing innovative strategies in every campaign.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    id: 18,
    name: "Natalie Clark",
    position: "Sustainability Officer, Green Future",
    quote:
      "Their digital marketing expertise has accelerated our growth, making them a valuable partner in our success.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
];

const ReviewChild = ({ name, position, quote, image }) => {
  return (
    <div className="child w-full rounded-3xl bg-[#f4f4f4] p-8 pb-8 mb-6 shadow-lg">
      <div className="flex">
        <img src={image} className="h-10 w-10 rounded-full" alt={name} />
        <div className="flex flex-col ml-4">
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
