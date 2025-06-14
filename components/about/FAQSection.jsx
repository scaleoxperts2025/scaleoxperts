import { faqs } from "@/data/about";
import SectionHeader from "../shared/SectionHeader";

export default function FAQSection() {

  return (
    <div className="mb-24">
      <SectionHeader 
        title="FAQs"
        subtitle="Common questions about our services"
      />
      
      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">
        {question}
      </h3>
      <p className="text-gray-600 font-inter">{answer}</p>
    </div>
  );
}