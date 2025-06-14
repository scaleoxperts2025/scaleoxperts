import SectionHeader from "../shared/SectionHeader";
import Card from "../shared/Card";

export default function ValuesSection() {
  const coreValues = [
    "Results Over Reports",
    "Deep Industry Expertise",
    "Quality First (ISO Certified)",
    "Partnership-Led Approach",
    "Innovation in Every Engagement",
    "Data-Driven Decisions",
    "Client-Centric Solutions",
    "Transparent Processes"
  ];

  return (
    <div className="mb-24">
      <SectionHeader 
        title="Vision & Mission"
        subtitle="Our guiding principles"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <Card>
          <h3 className="text-xl font-semibold text-orange-500 mb-4 font-poppins">
            Our Vision
          </h3>
          <p className="text-gray-600 font-inter">
            To be the most trusted growth and Strategy consulting firm for MSMEs and startups, 
            driving 1000+ success stories by 2027.
          </p>
        </Card>
        
        <Card>
          <h3 className="text-xl font-semibold text-orange-500 mb-4 font-poppins">
            Our Mission
          </h3>
          <p className="text-gray-600 font-inter">
            To democratize access to high-quality consulting through affordable, 
            actionable, and execution-first strategies that deliver measurable results.
          </p>
        </Card>
      </div>

      <SectionHeader 
        title="Core Values"
        className="text-center"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreValues.map((value, index) => (
          <Card key={index} className="p-4 border border-gray-100">
            <p className="text-gray-800 font-inter font-medium">{value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}