import React from 'react';

const MarqueeSection = () => {
  return (
    <section className="relative py-8 bg-[#fafaf9] overflow-hidden">
      <div className="relative">
        {/* Marquee container */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Repeat the image multiple times for seamless scroll */}
          <img 
            src="/foreground.png" 
            alt="Marquee decoration" 
            className="h-24 lg:h-32 w-auto mx-8"
          />
          <img 
            src="/foreground.png" 
            alt="Marquee decoration" 
            className="h-24 lg:h-32 w-auto mx-8"
          />
          <img 
            src="/foreground.png" 
            alt="Marquee decoration" 
            className="h-24 lg:h-32 w-auto mx-8"
          />
          <img 
            src="/foreground.png" 
            alt="Marquee decoration" 
            className="h-24 lg:h-32 w-auto mx-8"
          />
          <img 
            src="/foreground.png" 
            alt="Marquee decoration" 
            className="h-24 lg:h-32 w-auto mx-8"
          />
          <img 
            src="/foreground.png" 
            alt="Marquee decoration" 
            className="h-24 lg:h-32 w-auto mx-8"
          />
        </div>
      </div>
      
      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MarqueeSection;