import Section from "../shared/Section";
import Image from "next/image";

export default function AboutStory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
      <div>
        <Section
          title="Our Story"
          content="Founded by practitioners—not career consultants—ScaleOXperts was born from the need to replace theory with execution. We understand the unique growth challenges faced by Indian MSMEs and startups. As an ISO 9001:2015 certified consulting organization, we've empowered 60+ businesses with data-backed strategies and execution-first consulting that drives 95%+ client satisfaction."
        />
        <Section
          title="Our Mission"
          content="We don't sell services. We drive outcomes. At ScaleOXperts, we're on a mission to help startups and MSMEs scale with clarity, speed, and purpose. Through tailored sales consulting, razor-sharp business growth strategy, and real-world execution, we help founders move from chaos to control. Our approach to consultancy sales is different — We build frameworks that work. And with our digital transformation consulting services, we don't just advise, we implement systems that unlock serious growth. Built for doers. Run by builders. Focused on results."
        />
      </div>
      <div className="hidden h-full lg:flex relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 to-gray-700 items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>
        <div className="relative z-10 text-center p-8">
          <h3 className="text-4xl font-bold text-white mb-4 font-poppins">
            Empowering Growth Through Proven Methodologies
          </h3>
          <p className="text-xl text-gray-200 font-inter">
            We've seen too many strategy decks collect dust. Our philosophy is different. Every framework we use is field-tested across industries like manufacturing, real estate, education, and hospitality, and designed to deliver ROI—not just recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}