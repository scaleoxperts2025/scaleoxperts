import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const clients = [
  { name: 'F3 FastFood', logo: '/logo1.webp' },
  { name: 'GreenChain', logo: '/logo2.webp' },
  { name: 'HS Dental', logo: '/logo3.webp' },
  { name: 'APAR Industries', logo: '/logo4.webp' },
  { name: 'Sandy Foods', logo: '/logo5.webp' },
];

const ClientCard = ({ name, logo }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500  ease-in-out hover:scale-105 hover:shadow-xl">
    <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
      <Image
        src={logo}
        alt={`${name} logo`}
        layout="fill"
        objectFit="cover"
        className=""
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 text-center">{name}</h3>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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