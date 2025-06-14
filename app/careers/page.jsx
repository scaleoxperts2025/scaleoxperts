import { generateMetadata } from "./metadata";
import React from "react";
import { NavBar } from "@/components/layout";
import {
  RiLinkedinBoxFill,
  RiMailFill,
} from "react-icons/ri";
import { applicationSteps, benefits } from "@/data/careers";

export { generateMetadata }

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection />
      <CompanyBenefits />
      <ApplicationProcess />
      <ContactSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      <div className="max-w-[77rem] z-50 mx-auto w-full">
        <NavBar />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="absolute inset-0 top-[100px] bg-gradient-to-r from-orange-500 to-orange-600 opacity-90"></div>
        {/* <div className="absolute inset-0 top-[64px] bg-[url('/images/team-collaboration.jpg')] bg-cover bg-center mix-blend-overlay"></div> */}
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shape the Future with Scaleoxperts
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Join a team of innovators dedicated to revolutionizing business
            scaling through cutting-edge technology and strategic expertise.
          </p>
          <a
            href="https://www.linkedin.com/company/scaleoxperts"
            target="_blank"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-semibold hover:bg-orange-100 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

const CompanyBenefits = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        Why Choose Scaleoxperts?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-orange-500 text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ApplicationProcess = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Application Process
        </h2>
        <div className="space-y-12">
          {applicationSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
            >
              <span className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold">
                {index + 1}
              </span>
              <div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-orange-500 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Join Our Team?</h2>
        <p className="text-xl mb-12">
          Take the first step towards an exciting career with Scaleoxperts.
          We're always looking for talented individuals to help us shape the
          future of business scaling.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="https://www.linkedin.com/company/scaleoxperts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-semibold hover:bg-orange-100 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <RiLinkedinBoxFill className="mr-2 text-2xl" />
            View Openings on LinkedIn
          </a>
          <a
            href="mailto:scaleoxperts@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <RiMailFill className="mr-2 text-2xl" />
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
};




export default CareersPage;
