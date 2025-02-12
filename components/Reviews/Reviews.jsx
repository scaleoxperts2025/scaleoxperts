import React, { useState, useEffect } from "react";
import "./Reviews.css";
import Image from "next/image";

// Updated testimonial data
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CEO, TechInnovate India",
    quote:
      "The team was highly professional and helped us revamp our entire online strategy. We've seen a 60% increase in lead generation.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "CTO, DataSolutions Pvt Ltd",
    quote:
      "Our website traffic doubled within three months thanks to their innovative SEO and content marketing strategies.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Founder, StartupX India",
    quote:
      "Their social media campaigns gave our startup the visibility it needed. We gained thousands of organic followers in just a few months!",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 4,
    name: "Neha Gupta",
    position: "COO, IndiaTech Innovators",
    quote:
      "Exceptional service! Their team understands the Indian market well and tailored strategies that worked perfectly for us.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "Lead Developer, AI Solutions India",
    quote:
      "Their digital marketing team optimized our ad spend, leading to a 40% reduction in costs while increasing conversions.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 6,
    name: "Ananya Reddy",
    position: "Data Scientist, Research Labs Bangalore",
    quote:
      "We struggled with branding, but their team gave us a fresh perspective. Our engagement rates have never been higher.",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
  },
  {
    id: 7,
    name: "Arjun Mehta",
    position: "Marketing Director, Global Brands India",
    quote:
      "I’ve worked with multiple agencies, but none delivered like this one. The ROI on our PPC campaigns has been phenomenal!",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    id: 8,
    name: "Kavita Desai",
    position: "UX Designer, Creative Solutions Mumbai",
    quote:
      "Their branding expertise completely transformed how we present ourselves. Our brand identity is now stronger than ever.",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    id: 9,
    name: "Rahul Kapoor",
    position: "CFO, FinTech India",
    quote:
      "The insights we gained from their analytics team have shaped our business decisions. Their data-driven approach is excellent.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 10,
    name: "Meera Iyer",
    position: "HR Manager, People First India",
    quote:
      "Not only did they improve our employer branding, but their strategies also helped us attract top-tier talent.",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    id: 11,
    name: "Sanjay Verma",
    position: "Operations Manager, Logistics Pro India",
    quote:
      "They built a seamless digital presence for our logistics company, improving customer engagement and client retention.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
  },
  {
    id: 12,
    name: "Pooja Malhotra",
    position: "Product Manager, Innovate Inc. Delhi",
    quote:
      "I never imagined our local brand could have such a strong online presence. Their digital strategies exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/women/96.jpg",
  },
  {
    id: 13,
    name: "Karthik Nair",
    position: "Security Analyst, Cyber Shield India",
    quote:
      "They not only helped with marketing but also ensured our website was secure and fully optimized. A great team to work with!",
    image: "https://randomuser.me/api/portraits/men/97.jpg",
  },
  {
    id: 14,
    name: "Anjali Menon",
    position: "Content Strategist, Media Minds Kochi",
    quote:
      "The content marketing strategies they implemented helped our blog rank in the top 3 search results in just 6 months.",
    image: "https://randomuser.me/api/portraits/women/98.jpg",
  },
  {
    id: 15,
    name: "Vivek Choudhury",
    position: "CIO, Tech Frontiers Hyderabad",
    quote:
      "Their AI-powered analytics gave us a fresh perspective on user behavior. We optimized our funnel and increased sales by 30%.",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
  },
  {
    id: 16,
    name: "Riya Saxena",
    position: "Customer Success Manager, Happy Clients Pune",
    quote:
      "Working with them has been a smooth experience. Our customer engagement metrics have significantly improved!",
    image: "https://randomuser.me/api/portraits/women/100.jpg",
  },
  {
    id: 17,
    name: "Aditya Joshi",
    position: "Research Scientist, BioTech Innovations Chennai",
    quote:
      "They helped our research firm gain credibility through targeted PR and thought leadership campaigns.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    id: 18,
    name: "Nandini Rao",
    position: "Sustainability Officer, Green Future Bengaluru",
    quote:
      "Thanks to their strategies, we connected with the right audience and expanded our impact in the sustainability space.",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    id: 19,
    name: "Suresh Iyer",
    position: "Director, Retail Vision Mumbai",
    quote:
      "We struggled with online advertising before, but their approach increased our e-commerce sales by 50%.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 20,
    name: "Deepika Sharma",
    position: "Founder, Wellness Hub India",
    quote:
      "Their wellness-focused digital campaigns helped us gain thousands of new subscribers in record time.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

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
