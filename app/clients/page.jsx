import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';


export async function generateMetadata() {
  return {
    title: "ScaleoXperts Clients | Digital Marketing & Growth Success Stories",
    description:
      "Clients choose ScaleoXperts for digital marketing consulting, strategy consulting, and sales growth. See why we rank among the best digital marketing companies.",
    keywords: [
      "scaleoxperts",
      "digital marketing consulting",
      "strategy consulting",
      "digital marketing company",
    ],
    other: {
      "link:canonical": "https://www.scaleoxperts.com/clients"
    }
  };


}



const clients = [
  { name: 'F3 FastFood', logo: '/logo1.webp', description: 'Quick-service restaurant offering delicious and affordable fast food.' },
  { name: 'GreenChain', logo: '/logo2.webp', description: 'Serving fresh, organic, and authentic cuisine.' },
  { name: 'HS Dental', logo: '/logo3.webp', description: 'Advanced dental care services for healthy and beautiful smiles.' },
  { name: 'APAR Industries', logo: '/logo4.webp', description: 'Manufacturer of industrial components and engineering solutions.' },
  { name: 'Sandy Foods', logo: '/logo5.webp', description: 'Supplier of high-quality frozen food products.' },
  { name: 'SteelX Industries', logo: '/steel.webp', description: 'Leading provider of steel fabrication and industrial solutions.' },
  { name: 'Funkiezz Clothing Co.', logo: '/fun.webp', description: 'Trendy streetwear brand for bold and unique fashion.' },
  { name: 'SmartWonders Educational Institutions', logo: '/smart.webp', description: 'Providing quality education with a modern learning approach.' },
  { name: 'Vishwakarma Manufacturing Co.', logo: '/vish.webp', description: 'Precision manufacturing for industrial and engineering needs.' },
  { name: 'SteelWave Industries', logo: '/steel2.webp', description: 'Heavy steel fabrication and industrial structures.' },
  { name: 'MGR Builders & Developers', logo: '/mgr.webp', description: 'Experts in infrastructure and property development.' },
  { name: 'NKS Food Products', logo: '/nx.webp', description: 'Supplier of premium packaged and processed food products.' },
  { name: 'Prime Auto Components', logo: '/pime.webp', description: 'Manufacturer of high-quality automotive parts and accessories.' },
  { name: 'Divija Builders', logo: '/divija.webp', description: 'Real estate developers specializing in residential and commercial projects.' },
];

const ClientCard = ({ name, logo, description }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
    <div className="relative w-full h-[9.1rem] mb-4 rounded-xl">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-full h-full object-contain max-h-full max-w-full"
        />
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{name}</h3>
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </div>
);
const ClientsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <NavBar />
      <main className="mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Our Esteemed Clients
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <ClientCard key={index} {...client} />
          ))}
        </div>
      </main>
      <div className='bg-white'>
        <div className='max-w-[84rem] mx-auto'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;