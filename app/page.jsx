"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import Tooltip from "../components/Tooltip/Tooltip";

const Particles = dynamic(
  () => import("../components/ui/particles").then((mod) => mod.Particles),
  {
    ssr: false,
    loading: () => <div></div>,
  }
);
const BackgroundBeams = dynamic(
  () =>
    import("../components/ui/background-beams").then(
      (mod) => mod.BackgroundBeams
    ),
  {
    ssr: false,
    loading: () => <div></div>,
  }
);
import QuestionsCards from "../components/QuestionsCards/QuestionsCards";
import NavBar from "../components/NavBar/NavBar";
import ShinyText from "../components/ShinyText/ShinyText";
import Companies from "../components/Companies/Companies";
import Reviews from "../components/Reviews/Reviews";

export default function Home() {
  const redirect = () => {
    window.open("https://cal.com/siddharth-meena/15min", "_blank");
  };

  return (
    <div className="min-h-screen pb-[100rem] bg-white relative overflow-hidden">
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={70}
        ease={80}
        color="#FFD700"
        refresh
      />
      <div className="relative z-10">
        <section className="bg-grid-black/[0.04] dark:bg-grid-white/[0.04]">
          <NavBar />
          <main className="xss:pt-[7rem] lg:min-h-[92.5vh] 2xl:min-h-1 sm:pt-[6rem] md:pt-[7.5rem] mb-8 md:mb-[] max-w-[77rem] mx-auto text-gray-800 px-4 xss:px-3">
            <ShinyText />

            <h2 className="text-4xl xss:text-4xl xs:text-5xl sm:text-6xl md:text-7xl sm:mt-[1rem] xss:mt-[1.2rem] text-center leading-[1.1] md:leading-[1.05] font-inter font-semibold">
              Transform Your Startup into <br className="hidden sm:block" /> an
              Industry Leader
            </h2>

            <h4 className="text-center mt-2 xs:mt-3 font-inter font-medium text-gray-600 text-sm xss:text-xs xs:text-base sm:text-lg w-[95%] xs:w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
              Turning startup visions into market-leading realities through
              strategic digital growth.
            </h4>

            <div className="hidden sm:flex flex-wrap justify-center items-center mt-3 mb-4 xs:mb-6 gap-2 xs:gap-4 text-gray-600">
              {[
                "Custom Design & Dev",
                "Expert Senior Talent",
                "Pause or Cancel Anytime",
                "48-Hour Feedback",
              ].map((text, index) => (
                <div key={index} className="flex items-center px-1 xs:px-0">
                  <svg
                    className="w-5 h-5 mr-1 xs:mr-2 text-[#FF8C00]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                  <span className="font-pop text-sm xs:text-base md:text-lg text-gray-800 leading-tight">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-row flex-wrap justify-center mt-4 xs:mt-6 gap-3">
              <button
                className="px-6 xs:px-8 sm:px-10 py-2 xs:py-3 
                  text-sm xs:text-base md:text-lg 
                  bg-[#FFA500] border border-[#FFA500] 
                  transition-all hover:scale-[1.03] hover:bg-[#E69500] 
                  hover:border-[#E69500] text-white 
                  font-pop font-medium rounded-full whitespace-nowrap"
              >
                Inquire Now
              </button>
              <button
                className="px-6 xs:px-8 sm:px-10 py-2 xs:py-3 
                  text-sm xs:text-base md:text-lg 
                  border border-gray-300 
                  text-gray-700 
                  font-pop hover:scale-[1.03] font-medium 
                  rounded-full backdrop-filter backdrop-blur-sm 
                  transition-all hover:bg-amber-50 whitespace-nowrap"
              >
                Book Appointment
              </button>
            </div>

            <div className="mt-8 xss:mt-16 sm:mt-16">
              <h2 className="text-center mt-2 xs:mt-3 font-inter font-medium text-gray-600 text-sm xs:text-base sm:text-lg w-[95%] mx-auto">
                Trusted by over 150 Businesses Globally
              </h2>
              <div className="mt-4 xs:mt-4 sm:mb-2 xss:mb-14">
                <Companies />
              </div>
            </div>
          </main>
        </section>

        <section className="w-full max-w-[83rem] mx-auto border-t flex justify-between border-gray-200 relative z-20 overflow-hidden px-4 xss:px-6 xl:px-4">
          <div className="h-full flex flex-col justify-between mx-auto pt-8 md:pt-16">
            <div className="sm:text-left text-center">
              <h2 className="text-gray-800 text-6xl font-pop sm:pt-[1rem] xs:pt-[3rem] xss:pt-[2rem]">
                About Us
              </h2>

              <h3 className="mt-9 font-pop font-medium text-gray-600 tracking-wide leading-[1.25] text-xl w-[80%] mx-auto sm:mx-0 sm:w-[75%] xss:w-[95%] xss:text-lg xss:mt-6 xss:leading-[1.4] sm:text-left text-center">
                ScaleOXperts is a growth consulting firm dedicated to helping
                MSMEs and startups scale effectively. With data-driven
                strategies and hands-on execution, we optimize sales, enhance
                brand visibility, and automate operations to drive long-term
                success.
              </h3>

              <h4 className="mt-7 font-inter font-medium text-gray-500 leading-[1.55] w-[74%] mx-auto sm:mx-0 sm:w-[74%] xss:w-[95%] xss:text-base xss:mt-4 xss:leading-[1.5] sm:text-left text-center">
                Choose us for data-driven growth strategies tailored to MSMEs
                and startups. With expert insights, hands-on execution, and a
                focus on revenue growth, brand visibility, and automation, we
                deliver measurable results that drive long-term success and
                sustainability.
              </h4>
            </div>

            <div className="flex-grow mb-20 my-auto flex items-center justify-center xss:mt-8 sm:mt-12">
              <div className="flex w-full justify-between sm:justify-start sm:space-x-14 flex-nowrap overflow-hidden">
                {[
                  { number: "150+", text: "Customers served" },
                  { number: "100%", text: "Client satisfaction" },
                  { number: "30+", text: "Partnerships" },
                ].map((stat, index) => (
                  <div key={index} className=" sm:flex-none flex-1 px-2">
                    <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-pop text-[#FF8C00] leading-tight">
                      {stat.number}
                    </h2>
                    <h4 className="font-inter ml-1 mt-1 text-xs xs:text-sm sm:text-base md:text-lg font-medium text-gray-600 leading-tight">
                      {stat.text}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block py-8 md:py-16">
            <div className="sm:pt-[1rem] xs:pt-[3rem] xss:pt-[2rem] w-[12rem] flex flex-col">
              <Tooltip />
              <div className="w-[80%] font-pop mx-auto mt-4 ml-6 bg-amber-100 text-[#FF8C00] py-2 px-4 rounded-full text-center hover:bg-amber-200 transition-colors duration-300">
                Our Team
              </div>
            </div>
          </div>
        </section>

        <section className="w-[95%] bg-[#ff8c001a] h-auto rounded-2xl mx-auto mt-3 border border-amber-100 px-6 py-12 md:px-12 lg:px-16 transition-transform duration-300 ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold font-inter text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 font-inter mb-12 max-w-2xl">
              We drive business growth with expert sales strategies, digital
              marketing, and automation solutions designed for MSMEs and
              startups.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Sales & Business Growth",
                  description:
                    "Boost revenue with proven sales strategies, lead generation, and CRM automation.",
                  icon: "📈",
                },
                {
                  title: "Digital Marketing & Branding",
                  description:
                    "Enhance brand visibility with SEO, social media marketing, and paid ad campaigns.",
                  icon: "🌐",
                },
                {
                  title: "Business Automation",
                  description:
                    "Streamline operations with AI-driven automation, CRM solutions, and process optimization.",
                  icon: "🤖",
                },
                {
                  title: "Startup Scaling Solutions",
                  description:
                    "Develop go-to-market strategies, optimize pricing, and secure funding for business growth.",
                  icon: "🚀",
                },
                {
                  title: "Market Research & Strategy",
                  description:
                    "Leverage data-driven insights to analyze competitors and craft winning business strategies.",
                  icon: "📊",
                },
                {
                  title: "Lead Generation & Outreach",
                  description:
                    "Maximize conversions with targeted cold emails, outbound marketing, and sales funnel optimization.",
                  icon: "📩",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-amber-100 hover:border-amber-200 transition-all duration-300 group transform hover:-translate-y-1 filter hover:drop-shadow-lg"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4 bg-[#f6f6f6] rounded-[0.4rem] transition-colors duration-300">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold font-pop text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <button className="text-[#FF8C00] font-pop text-sm hover:text-[#E67A00] transition-colors flex items-center gap-2">
                    {"What's included in service?"}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="sm:text-6xl xss:text-4xl font-pop sm:mb-3.5 xss:mb-1.5">
              Meet Our Team
            </h2>
            <p className="text-gray-800 font-inter max-w-xl sm:text-[1.05rem] xss:text-[0.93rem]">
              Our team of passionate digital marketing experts, dedicated to
              crafting innovative solutions that fuel success.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Product Designer",
                image:
                  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Marcus Johnson",
                role: "Frontend Developer",
                image:
                  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Emma Wilson",
                role: "Marketing Lead",
                image:
                  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "David Park",
                role: "UX Researcher",
                image:
                  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Lisa Rodriguez",
                role: "Content Strategist",
                image:
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
              },
            ].map((member, index) => {
              // On mobile, hide the fifth team member (index 4)
              const containerClass =
                index === 4 ? "hidden md:flex flex-col" : "flex flex-col";
              return (
                <div key={index} className={containerClass}>
                  <div className="w-full aspect-square mb-4 overflow-hidden rounded-[0.4rem]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover  transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-pop font-medium text-lg">
                    {member.name}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {member.role}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section
          // ref={sectionRef}
          className="flex flex-col w-[100%] max-w-[77rem] mx-auto mt-[4.5rem] relative"
        >
          <h2 className="text-center font-inter font-medium text-[#090909] sm:text-5xl xs:text-4xl xss:text-4xl leading-10 relative xs:w-full xss:w-[97%] z-10">
            Loved by people around the world
          </h2>
          <h4 className="text-center font-inter font-medium text-[#393939] sm:text-base xss:text-sm sm:w-[60%] mt-3 xss:w-[90%] mx-auto relative z-10">
            Trusted and admired globally, our agency brings innovation to users
            everywhere.
          </h4>
          <Reviews />
        </section>
        <section className="mt-24">
          <h2 className="text-center font-inter text-[#090909] sm:text-5xl xs:text-4xl xss:text-4xl leading-10 relative xs:w-full xss:w-[97%] z-10 mb-10">
            Questions? Answers.
          </h2>
          <QuestionsCards redirect={redirect} />
        </section>

      </div>
    </div>
  );
}
