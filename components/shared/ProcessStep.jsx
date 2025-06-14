import Image from "next/image";

export default function ProcessStep({ step }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#fcfcfc] transition-all border duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center p-8 md:flex-row">
        <div className="relative mb-6 md:mb-0 md:mr-8 w-full md:w-auto">
          <Image
            src={step.image}
            alt={step.title}
            width={192}
            height={192}
            className="relative w-full h-auto md:h-48 md:w-48 rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <div className="mb-4 flex items-center">
            <div className="flex h-9 w-9 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-xl font-bold text-white">
              {step.number}
            </div>
            <h3 className="ml-4 font-poppins text-2xl font-bold text-gray-800">
              {step.title}
            </h3>
          </div>
          <p className="font-inter text-gray-600 mb-4">{step.description}</p>
          <ul className="space-y-2">
            {step.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-gray-600 font-inter">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}