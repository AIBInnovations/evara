import React, { useEffect, useState } from 'react';

const ServicesSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Wedding Planning",
      description: "Complete coordination from concept to celebration",
      accent: "from-[#AA7220] to-[#d8ad7f]",
      images: ["/circle.png", "/logo.png"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Event Design", 
      description: "Custom themes and décor for breathtaking spaces",
      accent: "from-[#d77759] to-[#87241a]",
      images: ["/circle.png", "/logo.png"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ),
      title: "Entertainment",
      description: "Professional booking and coordination services",
      accent: "from-[#76522a] to-[#AA7220]",
      images: ["/circle.png", "/logo.png"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 2l-1.83 3.34A10.81 10.81 0 008.83 9H12v10c0 .55.45 1 1 1s1-.45 1-1V9h3.17c.69-1.95.69-4.17 0-6.13L15 2H9z"/>
          <circle cx="9" cy="9" r="4"/>
        </svg>
      ),
      title: "Photography",
      description: "Capturing every precious moment beautifully",
      accent: "from-[#d8ad7f] to-[#d77759]",
      images: ["/circle.png", "/logo.png"]
    }
  ];

  return (
    <section className="relative py-20 bg-[#fafaf9] overflow-hidden">

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#00223f] leading-tight mb-4 relative">
              Our Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#AA7220] to-[#d8ad7f] rounded-full"></div>
            </h2>
          </div>
          <p className="text-lg text-[#7c756d] max-w-2xl mx-auto leading-relaxed mt-8">
            From intimate gatherings to grand celebrations, we provide comprehensive wedding planning services 
            tailored to your unique vision and style.
          </p>
        </div>

        {/* Clean Horizontal Services Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group cursor-default relative w-full max-w-xs"
                style={{
                  zIndex: services.length - index
                }}
              >
                {/* Image cards behind - sliding from deck */}
                <div className="absolute inset-0">
                  {service.images.map((image, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className={`absolute w-64 h-80 bg-gradient-to-br from-[#fdf8f3] to-[#d8ad7f] rounded-xl shadow-md border border-[#d8ad7f]/20 transition-transform duration-150 ease-out card-${imgIndex}`}
                      style={{
                        zIndex: -imgIndex - 1
                      }}
                    >
                      <div className="w-full h-full rounded-xl opacity-70 flex items-center justify-center">
                        <div className="text-6xl text-[#AA7220]/30">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main service card */}
                <div className="main-service-card w-64 h-80 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-400 group-hover:shadow-xl border border-[#d8ad7f]/30 relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.accent}`}></div>
                  
                  <div className="p-6 h-full flex flex-col justify-center text-center">
                    {/* Icon */}
                    <div className="text-[#AA7220] mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[#00223f] mb-3 transition-colors duration-300 group-hover:text-[#AA7220]">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[#7c756d] leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-4 mx-auto w-0 h-0.5 bg-gradient-to-r from-[#AA7220] to-[#d8ad7f] transition-all duration-400 group-hover:w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#d8ad7f]/30 transition-all duration-500 hover:bg-white hover:shadow-xl">
            <div className="text-3xl animate-pulse">✨</div>
            <div>
              <p className="text-xl text-[#00223f] font-medium mb-2">
                Ready to start planning your dream wedding?
              </p>
              <p className="text-sm text-[#7c756d]">Let's create something magical together</p>
            </div>
            <button className="bg-[#AA7220] text-[#fdf8f3] px-8 py-4 rounded-full font-medium tracking-wider transition-all duration-300 hover:bg-[#d8ad7f] hover:text-[#00223f] hover:scale-105 shadow-lg hover:shadow-xl">
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      {/* Bottom marquee with larger images */}
      <div className="relative mt-16 overflow-hidden">
        <div 
          className="flex whitespace-nowrap"
          style={{
            transform: `translateX(${-scrollY * 0.5}px)`,
            width: 'calc(100% + 1200px)'
          }}
        >
          {[...Array(12)].map((_, index) => (
            <img 
              key={index}
              src="/foreground.png" 
              alt="Bottom marquee decoration" 
              className="h-64 lg:h-80 w-auto mx-8"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* CSS for card sliding animation */}
      <style jsx>{`
        .card-0 {
          opacity: 1;
          transform: translateX(0px) translateY(0px) rotate(0deg);
        }
        
        .card-1 {
          opacity: 1;
          transform: translateX(0px) translateY(0px) rotate(0deg);
        }
        
        /* Main service card slides LEFT */
        .group:hover .main-service-card {
          transform: translateX(-80px) translateY(-10px) rotate(-6deg) scale(1.02);
        }
        
        /* First background card stays CENTER but moves up */
        .group:hover .card-0 {
          transform: translateX(0px) translateY(-20px) rotate(0deg);
        }
        
        /* Second background card slides RIGHT */
        .group:hover .card-1 {
          transform: translateX(80px) translateY(-10px) rotate(6deg);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;