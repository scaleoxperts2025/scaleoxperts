"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import Link from 'next/link'
import Tooltip from "../components/Tooltip/Tooltip";
import { useSearchParams } from "next/navigation";

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
import Footer from "../components/Footer/Footer";
import QuestionsCards from "../components/QuestionsCards/QuestionsCards";
import NavBar from "../components/NavBar/NavBar";
import ShinyText from "../components/ShinyText/ShinyText";
import Companies from "../components/Companies/Companies";
import Reviews from "../components/Reviews/Reviews";

export default function Home() {
  const aboutUsRef = useRef(null);
  const searchParams = useSearchParams();

  const redirect = () => {
    window.open("https://cal.com/siddharth-meena/15min", "_blank");
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState({}, "", "/");
  };

  useEffect(() => {
    if (searchParams.get("scroll") === "aboutus") {
      setTimeout(scrollToAboutUs, 100);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen pb-[2rem] bg-white relative overflow-hidden">
      {/* <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={100}
        ease={80}
        color="#FFD700"
        refresh
      /> */}
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
                  bg-[#ff8d1a] border border-[#ff8d1a] 
                  transition-all hover:scale-[1.03] hover:bg-[#fe9328] 
                  hover:border-[#fe9328] text-white 
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

        <section
          ref={aboutUsRef}
          className="w-full max-w-[83rem] mx-auto border-t flex justify-between border-gray-200 relative z-20 px-4 xss:px-6 xl:px-4"
        >
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
                    <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-pop text-[#ff8d1a] leading-tight">
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
                  shortName: "sales",
                  description:
                    "Boost revenue with proven sales strategies, lead generation, and CRM automation.",
                  icon: "📈",
                },
                {
                  title: "Digital Marketing & Branding",
                  shortName: "marketing",
                  description:
                    "Enhance brand visibility with SEO, social media marketing, and paid ad campaigns.",
                  icon: "🌐",
                },
                {
                  title: "Business Automation",
                  shortName: "automation",
                  description:
                    "Streamline operations with AI-driven automation, CRM solutions, and process optimization.",
                  icon: "🤖",
                },
                {
                  title: "Startup Scaling Solutions",
                  shortName: "startup",
                  description:
                    "Develop go-to-market strategies, optimize pricing, and secure funding for business growth.",
                  icon: "🚀",
                },
                {
                  title: "Market Research & Strategy",
                  shortName: "research",
                  description:
                    "Leverage data-driven insights to analyze competitors and craft winning business strategies.",
                  icon: "📊",
                },
                {
                  title: "Lead Generation & Outreach",
                  shortName: "leads",
                  description:
                    "Maximize conversions with targeted cold emails, outbound marketing, and sales funnel optimization.",
                  icon: "📩",
                },
                {
                  title: "Bookkeeping & Accounting",
                  shortName: "accounting",
                  description:
                    "Providing accurate, hassle-free financial management to streamline your business finances.",
                  icon: "📚",
                },
                {
                  title: "Virtual CFO Services",
                  shortName: "cfo",
                  description:
                    "Offering strategic financial planning, insights, and analysis to drive your company's growth.",
                  icon: "💼",
                },
                {
                  title: "Website & App Development",
                  shortName: "development",
                  description:
                    "Creating custom websites and apps through our network of skilled freelancers to enhance your digital presence.",
                  icon: "💻",
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
                  <Link href={`/services?scroll=${service.shortName}`} passHref>
                    <button className="text-[#FF8C00] font-pop text-sm hover:text-[#E67A00] transition-colors flex items-center gap-2">
                      Learn more
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
                  </Link>
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
                name: "Mohd Sameer",
                role: "Co-Founder & Head of Operations",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Nousheen Fatima",
                role: "Co-Founder & Advisory Partner",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Gaurav Kumar",
                role: "Senior Strategy Expert",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Srinihith",
                role: "Strategy Expert",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Surya E",
                role: "Business Associate",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Ashok Reddy",
                role: "Business Associate",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Kotla Rahul",
                role: "Business Associate",
                image:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "M. Sandeep",
                role: "Digital Marketing Associate",
                image:
                  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Madhusudan",
                role: "Digital Marketing Associate",
                image:
                  "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Avinasha",
                role: "HR Associate",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col group">
                <div className="w-full aspect-square mb-4 overflow-hidden rounded-[0.4rem]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-pop font-medium text-lg">{member.name}</h3>
                <p className="font-inter text-gray-600 text-sm">
                  {member.role}
                </p>
              </div>
            ))}
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
        <section className="mt-24 ">
          <h2 className="text-center font-inter text-[#090909] sm:text-5xl xs:text-4xl xss:text-3xl leading-10 relative xs:w-full xss:w-[97%] z-10 mb-10">
            Questions? Answers.
          </h2>
          <QuestionsCards redirect={redirect} />
        </section>

        <section className="mb-24 pt-14 max-w-[88rem] mt-24 bg-dot-[#D6D5D5] dark:bg-dot-[#333333] pb-16 border rounded-2xl border-black dark:border-white md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] mx-auto w-full">
          <div className="relative w-full">
            <h2 className="relative z-10 text-center text-[1.8rem] dark:text-white xss:text-[2.2rem] sm:text-[2.7rem] md:text-[3rem] lg:text-[3.5rem] xss:font-inter xss:font-bold sm:font-semibold sm:tracking-[0.032em] leading-[1.3] sm:leading-[1.12] sm:px-4 xss:px-6 ">
              <span className="sm:px-2 px-1 sm:inline-block backdrop-filter backdrop-blur-[2px]">
                What are you waiting for??{" "}
                {/* <span className="text-[#479fd2] dark:text-[#299fba] backdrop-filter backdrop-blur-[2px]"> */}
                {/* Join us */}
                {/* <span className="xss:opacity-100 sm:opacity-0">!</span> */}
                {/* </span> */}
              </span>
              <span className="sm:px-2 px-1 sm:inline-block backdrop-filter backdrop-blur-[2px]">
                {/* Don't miss out on the chance to{" "} */}
                <span className="text-[#fe9328] dark:text-[#0cff51]">
                  Limited slots
                </span>{" "}
                available
              </span>
            </h2>
          </div>

          <p className="text-center mb-5 mx-auto w-[80%] mt-3 font-inter font-medium text-[#666666] dark:text-[#cccccc] sm:text-xl">
            Access cutting-edge digital marketing solutions with our expert
            team. From crafting compelling campaigns to driving explosive
            growth, everything you need is just a click away.
          </p>

          <div className="flex mt-8 w-full justify-center">
            <button
              href="/register"
              className="px-[4.5vw] py-[1.9vw] xss:py-[0.65rem] xss:px-[1.18rem] xs:px-[4.2vw] xs:py-[1.5vw] sm:px-[2rem] sm:py-[0.6rem] md:px-[2.5rem] md:py-[0.7rem] lg:px-[2.15rem] lg:py-[0.7rem] bg-[#ff8d1a] border border-[#ff8d1a] transition-all hover:scale-[1.03] hover:bg-[#fe9328] hover:border-[#fe9328] text-white text-[4vw]sm:text-[1.1rem] md:text-[1.2rem] font-pop font-medium rounded-full"
            >
              Schedule an Meeting
              <i className="ri-arrow-right-line ml-2 text-lg"></i>
            </button>
          </div>
        </section>
        <footer className="max-w-[80rem] mx-auto">
          <Footer />
          <p
            className="text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 w-full overflow-hidden whitespace-nowrap"
            style={{ fontSize: "min(13vw)" }}
          >
            Scaleoxperts
          </p>
        </footer>
      </div>
    </div>
  );
}
