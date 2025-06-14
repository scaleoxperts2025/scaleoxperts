import { forwardRef } from 'react';
import Tooltip from "../Tooltip/Tooltip";
import Stats from "../shared/Stats";

const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full max-w-[83rem] mx-auto border-t flex justify-between border-gray-200 relative z-20 px-4 xss:px-6 xl:px-4"
    >
      <div className="h-full flex flex-col justify-between mx-auto pt-8 md:pt-16">
        <div className="sm:text-left text-center">
          <h2 className="text-gray-800 text-6xl font-pop sm:pt-[1rem] xs:pt-[3rem] xss:pt-[2rem]">
            About Us
          </h2>

          <h3 className="mt-9 font-pop font-medium text-gray-600 tracking-wide leading-[1.25] text-xl w-[80%] mx-auto sm:mx-0 sm:w-[75%] xss:w-[95%] xss:text-lg xss:mt-6 xss:leading-[1.4] sm:text-left text-center">
            ScaleOXperts is a growth Strategy firm dedicated to helping MSMEs and startups scale effectively. With data-driven go-to market strategy services, digital transformation, and hands-on execution, we optimize sales, enhance brand visibility, and automate operations to drive sustainable success.
          </h3>

          <h4 className="mt-7 font-inter font-medium text-gray-500 leading-[1.55] w-[74%] mx-auto sm:mx-0 sm:w-[74%] xss:w-[95%] xss:text-base xss:mt-4 xss:leading-[1.5] sm:text-left text-center">
            Choose ScaleOXperts for strategic growth consulting that blends data intelligence, hands-on execution, and measurable impact. From GTM planning to sales automation, we tailor high-impact business consulting to drive long-term success for MSMEs and high-growth startups.
          </h4>
        </div>

        <Stats />
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
  );
});

About.displayName = 'About';

export default About;