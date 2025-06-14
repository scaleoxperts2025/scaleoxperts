export default function ServiceCard({ service }) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-500 hover:shadow-xl h-full">
        <div className="text-orange-500 text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
          {service.title}
        </h3>
        <p className="text-gray-600 font-inter mb-4">{service.description}</p>
        <ul className="space-y-2 mb-4">
          {service.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-500 mr-2">✓</span>
              <span className="text-gray-600 font-inter">{item}</span>
            </li>
          ))}
        </ul>
        {service.impact && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2 font-poppins">Real Impact:</h4>
            <p className="text-gray-600 font-inter">{service.impact}</p>
          </div>
        )}
      </div>
    );
  }