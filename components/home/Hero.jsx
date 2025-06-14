import Companies from "../Companies/Companies";
import ShinyText from "../ShinyText/ShinyText";

export default function Hero() {
  const redirect = () => {
    window.open("https://cal.com/scaleoxperts-zmmvor/30min", "_blank");
  };

  return (
    <main className="xss:pt-[7rem] lg:min-h-[92.5vh] 2xl:min-h-1 sm:pt-[6rem] md:pt-[7.5rem] mb-8 md:mb-[] max-w-[77rem] mx-auto text-gray-800 px-4 xss:px-3">
      <ShinyText />

      <h1 className="text-2xl xss:text-2xl xs:text-3xl sm:text-4xl md:text-5xl sm:mt-[0.6rem] xss:mt-[0.8rem] text-center leading-[1.2] md:leading-[1.15] font-inter sm:w-[85%] mx-auto font-semibold">
        Accelerate Your Business Growth with Data-Driven Digital transformation & Strategy Consulting
      </h1>

      <h2 className="text-center mt-2 xs:mt-3 font-inter font-medium text-gray-600 text-sm xss:text-xs xs:text-base sm:text-lg w-[95%] xs:w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
        We help MSMEs and startups scale their revenue with proven growth strategies, Go-to-market strategy services and tailored Business consulting solutions powered by intelligent automation.
      </h2>

      <div className="hidden sm:flex flex-wrap justify-center items-center mt-3 mb-4 xs:mb-6 gap-2 xs:gap-4 text-gray-600">
        {[
          "Customized strategies",
          "Expert Senior talent",
          "Customized Packages",
          "Dedicated Account Manager",
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
          onClick={redirect}
          className="px-6 xs:px-8 sm:px-10 py-2 xs:py-3 
            text-sm xs:text-base md:text-lg 
            bg-[#ff8d1a] border border-[#ff8d1a] 
            transition-all hover:scale-[1.03] hover:bg-[#fe9328] 
            hover:border-[#fe9328] text-white 
            font-pop font-medium rounded-full whitespace-nowrap"
        >
          Request Free Growth Audit
        </button>
      </div>

      <div className="mt-8 xss:mt-16 sm:mt-16">
        <h2 className="text-center mt-2 xs:mt-3 font-inter font-medium text-gray-600 text-sm xs:text-base sm:text-lg w-[95%] mx-auto">
          Trusted by 60+ Growing Startups and MSMEs
        </h2>
        <div className="mt-2.5 xs:mt-2.5 sm:mb-2 xss:mb-14">
          <Companies />
        </div>
      </div>
    </main>
  );
}