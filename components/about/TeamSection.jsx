import { executionTeam, leadershipTeam } from "@/data/about";
import SectionHeader from "../shared/SectionHeader";
import TeamCard from "../shared/TeamCard";


export default function TeamSection() {


  return (
    <div className="mb-24">
      <SectionHeader title="Meet Our Team" />
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">Leadership</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {leadershipTeam.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">Execution Experts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {executionTeam.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}