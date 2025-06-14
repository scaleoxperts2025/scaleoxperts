import Image from "next/image";

export default function TeamCard({ member }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-100">
        <Image 
          src={member.image} 
          alt={member.name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1 font-poppins">{member.name}</h3>
      <p className="text-gray-600 text-sm font-inter">{member.role}</p>
    </div>
  );
}