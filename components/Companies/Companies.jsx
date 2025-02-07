'use client';
import React from 'react';
import Image from 'next/image';

const Companies = () => {
  const companies = [
    { name: 'F3 FastFood', logo: '/logo1.webp' },
    { name: 'GreenChain', logo: '/logo2.webp' },
    { name: 'HS Dental', logo: '/logo3.webp' },
    { name: 'APAR Industries', logo: '/logo4.webp' },
    { name: 'Sandy Foods', logo: '/logo5.webp' },
    // { name: 'Eclipse Technologies', logo: '/path/to/eclipse-logo.png' }
  ];

  return (
    <div className="relative h-[5.3rem] w-full overflow-hidden">
      <div className="absolute left-0 right-0 top-1/2 mx-auto w-[70%] -translate-y-1/2">
        <div className="relative h-20 overflow-hidden">
          {/* Fade effects */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#0e0e0f]" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-[#0e0e0f]" />
          
          {/* Ticker content */}
          <div className="absolute flex h-full animate-ticker items-center gap-16">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="flex items-center gap-4">
                {company.logo && (
                  <div className="relative w-8 h-8">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <span className="text-nowrap text-[1.65rem] font-semibold text-gray-800 dark:text-[#dddddd] font-pop">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Companies;