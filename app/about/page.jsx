import React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const AboutSection = ({ title, content }) => (
  <div className="mb-16 ">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
      {title}
    </h2>
    <p className="text-gray-600 leading-relaxed font-inter">{content}</p>
  </div>
);

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:shadow-xl">
    <div className="text-orange-500 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
      {title}
    </h3>
    <p className="text-gray-600 font-inter">{description}</p>
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-4 sm:mb-0 sm:mr-4 font-poppins">
      {number}
    </div>
    <div className="text-center sm:text-left">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 font-poppins">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 font-inter">{description}</p>
    </div>
  </div>
);
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 pt-[5rem] sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-16 animate-fade-in-down font-poppins">
          About <span className="text-orange-500">ScaleOXperts</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <AboutSection
              title="Our Story"
              content="In the vibrant city of Hyderabad, Mr. Mohd Sameer noticed a common challenge: many MSMEs and startups had innovative ideas but struggled to grow in a competitive market. With over 7 years of experience, Mr. Sameer was determined to make a difference. This led to the creation of ScaleOXperts, a firm dedicated to empowering businesses to overcome obstacles and achieve lasting success."
            />
          </div>
          <div className="hidden lg:flex relative h-[350px] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 to-gray-700 items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            </div>
            <div className="relative z-10 text-center ">
              <h3 className="text-4xl font-bold text-white mb-4 font-poppins">
                Empowering Growth
              </h3>
              <p className="text-xl text-gray-200 font-inter">
                Innovative Solutions for Modern Businesses
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-poppins">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Boosting Sales and Revenue"
              description="We develop strategies to attract quality leads, improve sales processes, and increase profits."
              icon="📈"
            />
            <ServiceCard
              title="Building Strong Brands"
              description="We help businesses create unique identities and enhance their visibility both online and offline."
              icon="🎨"
            />
            <ServiceCard
              title="Streamlining Operations"
              description="We introduce smart tools to make daily tasks more efficient, saving time and reducing costs."
              icon="⚙️"
            />
          </div>
        </div>

        <div className="mb-24 bg-white rounded-lg shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-poppins">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProcessStep
              number="1"
              title="Discover"
              description="We start by understanding your business, market trends, competitors, and customer behavior to identify growth opportunities."
            />
            <ProcessStep
              number="2"
              title="Strategize"
              description="Next, we develop a customized action plan aligned with your business objectives, ensuring a high return on investment."
            />
            <ProcessStep
              number="3"
              title="Execute"
              description="Unlike traditional consultants, we go beyond recommendations – our team actively works with you to implement strategies for sales, branding, and automation."
            />
            <ProcessStep
              number="4"
              title="Optimize"
              description="We continuously monitor results, fine-tune strategies, and ensure maximum impact by leveraging data-driven insights."
            />
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-poppins">
            Vision & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-500 mb-4 font-poppins">
                Our Vision
              </h3>
              <p className="text-gray-600 font-inter">
                To be the trusted partner for MSMEs and startups, guiding them
                to become leaders in their industries through innovative
                strategies and active collaboration.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-500 mb-4 font-poppins">
                Our Mission
              </h3>
              <p className="text-gray-600 font-inter">
                To empower businesses with the tools, strategies, and expertise
                needed to scale, optimize operations, and drive profitability,
                ensuring long-term success in an evolving marketplace.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-2 font-inter">Phone: +91 8008129875</p>
          <p className="text-gray-600 mb-2 font-inter">
            Email: scaleoxperts@gmail.com
          </p>
          <p className="text-gray-600 font-inter">
            Headquarters: 3rd Floor, Oyster Complex, Somajiguda, Hyderabad,
            India
          </p>
        </div>
      </main>
      <div className="bg-white">
        <div className="max-w-[80rem] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
