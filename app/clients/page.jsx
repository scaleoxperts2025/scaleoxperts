import { generateMetadata } from './metadata';
import React from 'react';
import Image from 'next/image';
import { NavBar, Footer } from "@/components/layout";
import  clients from "@/data/clients/clients.json";

export { generateMetadata }

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
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Our Esteemed Clients
        </h1>
        <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-12">
          We’re not here to do average work. At <strong>ScaleOXperts</strong>, we help MSMEs and startups scale through sharp execution in <strong>strategy consulting</strong>, <strong>sales consulting</strong>, and <strong>growth consulting</strong>. We deliver real <strong>go to market strategies</strong>, simplify operations with <strong>IT consulting services</strong>, and optimize workflows via expert <strong>business process consulting</strong>. If you’re ready to solve real problems and grow fast — you're in the right place.
        </p>
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
