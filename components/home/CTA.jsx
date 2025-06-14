export default function CTA() {
    const redirect = () => {
      window.open("https://cal.com/scaleoxperts-zmmvor/30min", "_blank");
    };
  
    return (
      <section className="mb-24 pt-14 max-w-[88rem] mt-24 bg-dot-[#D6D5D5] dark:bg-dot-[#333333] pb-16 border rounded-2xl border-black dark:border-white md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] mx-auto w-full">
        <div className="relative w-full">
          <h2 className="relative z-10 text-center text-[1.8rem] dark:text-white xss:text-[2.2rem] sm:text-[2.7rem] md:text-[3rem] lg:text-[3.5rem] xss:font-inter xss:font-bold sm:font-semibold sm:tracking-[0.032em] leading-[1.3] sm:leading-[1.12] sm:px-4 xss:px-6 ">
            <span className="sm:px-2 px-1 sm:inline-block backdrop-filter backdrop-blur-[2px]">
              What are you waiting for??{" "}
            </span>
            <span className="sm:px-2 px-1 sm:inline-block backdrop-filter backdrop-blur-[2px]">
              <span className="text-[#fe9328] dark:text-[#0cff51]">
                Limited slots
              </span>{" "}
              available
            </span>
          </h2>
        </div>
  
        <p className="text-center mb-5 mx-auto w-[80%] mt-3 font-inter font-medium text-[#666666] dark:text-[#cccccc] sm:text-xl">
          Does your Business growth feel stagnant? Find out what's keeping your Business from growing with our 360° Business strategy, competitors and Marketing audit! Price? FREE!
        </p>
  
        <div className="flex mt-8 w-full justify-center">
          <button
            onClick={redirect}
            className="px-[4.5vw] py-[1.9vw] xss:py-[0.65rem] xss:px-[1.18rem] xs:px-[4.2vw] xs:py-[1.5vw] sm:px-[2rem] sm:py-[0.6rem] md:px-[2.5rem] md:py-[0.7rem] lg:px-[2.15rem] lg:py-[0.7rem] bg-[#ff8d1a] border border-[#ff8d1a] transition-all hover:scale-[1.03] hover:bg-[#fe9328] hover:border-[#fe9328] text-white text-[4vw]sm:text-[1.1rem] md:text-[1.2rem] font-pop font-medium rounded-full"
          >
            Book Free consultation call
            <i className="ri-arrow-right-line ml-2 text-lg"></i>
          </button>
        </div>
      </section>
    );
  }