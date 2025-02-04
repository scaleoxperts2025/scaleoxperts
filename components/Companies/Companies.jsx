'use client';
import React from 'react';

const Companies = () => {
  const companies = [
    'TechCorp',
    'InnovateX',
    'FutureWorks',
    'DigitalSphere',
    'NexGen',
    'QuantumLeap',
    'Visionary Labs',
    'AlphaWave',
    'PrimeSolutions',
    'Eclipse Technologies'
  ];

  return (
    <div className="relative h-[5.3rem] w-full overflow-hidden">
      <div className="absolute left-0 right-0 top-1/2 mx-auto w-[70%] -translate-y-1/2">
        <div className="relative h-20 overflow-hidden">
          {/* Fade effects */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#0e0e0f] " />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-[#0e0e0f] " />
          
          {/* Ticker content */}
          <div className="absolute flex h-full animate-ticker items-center gap-16">
            {[...companies, ...companies].map((company, index) => (
              <span
                key={index}
                className="text-nowrap text-3xl font-semibold text-gray-800 dark:text-[#dddddd] font-pop"
              >
                {company}
              </span>
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

        // @media (hover: hover) {
        //   .animate-ticker:hover {
        //     animation-play-state: paused;
        //   }
        // }
      `}</style>
    </div>
  );
};

export default Companies;