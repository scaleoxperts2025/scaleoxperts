import { teamMembers } from "../../data/home";

export default function Team() {
  
    return (
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="sm:text-6xl xss:text-4xl font-pop sm:mb-3.5 xss:mb-1.5">
            Meet Our Team
          </h2>
          <p className="text-gray-800 font-inter max-w-xl sm:text-[1.05rem] xss:text-[0.93rem]">
            Our team of passionate digital marketing experts, dedicated to
            crafting innovative solutions that fuel success.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </section>
    );
  }
  
  function TeamMember({ member }) {
    return (
      <div className="flex flex-col group">
        <div className="w-full aspect-square mb-4 overflow-hidden rounded-[0.4rem] border border-[#e3e3e3]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <h3 className="font-pop font-medium text-lg">{member.name}</h3>
        <p className="font-inter text-gray-600 text-sm">
          {member.role}
        </p>
      </div>
    );
  }