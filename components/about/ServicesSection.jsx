import { services } from "@/data/about";
import SectionHeader from "../shared/SectionHeader";
import ServiceCard from "../shared/ServiceCard";

export default function ServicesSection() {

  return (
    <div className="mb-24">
      <SectionHeader
        title="What We Do"
        subtitle="Integrated strategy. Operational excellence. Real growth."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}