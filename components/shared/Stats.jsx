export default function Stats() {
    return (
      <div className="flex-grow mb-20 my-auto flex items-center justify-center xss:mt-8 sm:mt-12">
        <div className="flex w-full justify-between sm:justify-start sm:space-x-14 flex-nowrap overflow-hidden">
          {[
            { number: "60+", text: "Customers served" },
            { number: "95%+", text: "Client satisfaction" },
            { number: "15+", text: "Partnerships" },
          ].map((stat, index) => (
            <div key={index} className="sm:flex-none flex-1 px-2">
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
    );
  }