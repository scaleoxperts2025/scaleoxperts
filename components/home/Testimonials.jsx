import Reviews from "../Reviews/Reviews";

export default function Testimonials() {
  return (
    <section className="flex flex-col w-[100%] max-w-[77rem] mx-auto mt-[4.5rem] relative">
      <h2 className="text-center font-inter font-medium text-[#090909] sm:text-5xl xs:text-4xl xss:text-4xl leading-10 relative xs:w-full xss:w-[97%] z-10">
        Loved by people around the world
      </h2>
      <h4 className="text-center font-inter font-medium text-[#393939] sm:text-base xss:text-sm sm:w-[60%] mt-3 xss:w-[90%] mx-auto relative z-10">
        Trusted and admired globally, our agency brings innovation to users
        everywhere.
      </h4>
      <Reviews />
    </section>
  );
}