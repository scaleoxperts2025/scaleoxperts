import SectionHeader from "../shared/SectionHeader";
import ProcessStep from "../shared/ProcessStep";
import { processSteps } from "@/data/about";

export default function ProcessSection() {

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Our Strategic Process"
          subtitle="ISO 9001:2015 certified. Battle-tested. Built for scale."
        />
        <div className="space-y-10">
          {processSteps.map((step, index) => (
            <ProcessStep key={index} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}