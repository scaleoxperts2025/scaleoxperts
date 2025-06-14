import Link from "next/link";
import { services } from "../../data/home";

export default function Services() {

  return (
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
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-amber-100 hover:border-amber-200 transition-all duration-300 group transform hover:-translate-y-1 filter hover:drop-shadow-lg">
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
  );
}