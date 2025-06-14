import Card from "../shared/Card";

export default function CTASection() {
  return (
    <Card className="p-12 text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">
        Get in Touch
      </h2>
      <p className="text-xl text-gray-600 mb-8 font-inter">
        Let's co-build your growth engine.
      </p>
      
      <ContactInfo />
      
      <a 
        href="https://cal.com/scaleoxperts-zmmvor/30min" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 font-poppins">
          Get Free Business Audit
        </button>
      </a>
      
      <OfferDetails />
    </Card>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-4 mb-8">
      <p className="text-gray-600 font-inter flex items-center justify-center">
        <span className="mr-2">📞</span> +91 8008129875
      </p>
      <p className="text-gray-600 font-inter flex items-center justify-center">
        <span className="mr-2">📧</span> scaleoxperts@gmail.com
      </p>
      <p className="text-gray-600 font-inter flex items-center justify-center">
        <span className="mr-2">📍</span> 3rd Floor, Oyster Complex, Somajiguda, Hyderabad
      </p>
    </div>
  );
}

function OfferDetails() {
  const offerItems = [
    "60-min strategy call with experts",
    "Sector-specific growth opportunities",
    "Immediate action recommendations",
    "No-obligation strategic roadmap"
  ];

  return (
    <div className="mt-8">
      <h4 className="font-semibold text-gray-800 mb-4 font-poppins">What You'll Get:</h4>
      <ul className="flex flex-wrap justify-center gap-4">
        {offerItems.map((item, index) => (
          <li key={index} className="bg-gray-50 px-4 py-2 rounded-lg text-gray-700 font-inter">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}