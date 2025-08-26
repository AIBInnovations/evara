import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const AboutSection = () => {
  const { elementRef, hasBeenInView } = useIntersectionObserver();

  return (
    <section 
      ref={elementRef}
      className={`relative py-20 bg-[#fdf8f3] overflow-hidden h-auto transition-all duration-1000 ${
        hasBeenInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Left side - About Us Text */}
          <div className="space-y-8 relative">
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#AA7220]/10 rounded-full blur-xl"></div>
            
            {/* Header with underline animation */}
            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-serif text-[#00223f] leading-tight mb-4 group cursor-default">
                About Us
                <div className="h-1 w-0 bg-gradient-to-r from-[#AA7220] to-[#d8ad7f] transition-all duration-700 group-hover:w-full mt-2"></div>
              </h2>
            </div>
            
            {/* Feature cards */}
            <div className="space-y-6">
              <div className="group cursor-default">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl transition-all duration-500 hover:bg-white/80 hover:shadow-xl hover:scale-105 border border-[#d8ad7f]/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#AA7220] to-[#d8ad7f] rounded-full flex items-center justify-center text-[#fdf8f3] font-bold text-lg transition-transform duration-300 group-hover:rotate-12">
                      ♦
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#00223f] mb-2 transition-colors duration-300 group-hover:text-[#AA7220]">
                        Dream to Reality
                      </h3>
                      <p className="text-[#7c756d] leading-relaxed">
                        We are passionate wedding planners dedicated to turning your dream wedding into reality. With years of experience and an eye for detail, we craft unforgettable moments that reflect your unique love story.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-default">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl transition-all duration-500 hover:bg-white/80 hover:shadow-xl hover:scale-105 border border-[#d8ad7f]/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#d77759] to-[#87241a] rounded-full flex items-center justify-center text-[#fdf8f3] font-bold text-lg transition-transform duration-300 group-hover:rotate-12">
                      ✦
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#00223f] mb-2 transition-colors duration-300 group-hover:text-[#d77759]">
                        Elegance & Precision
                      </h3>
                      <p className="text-[#7c756d] leading-relaxed">
                        From intimate ceremonies to grand celebrations, we handle every aspect of your special day with elegance, precision, and care. Our team works closely with you to ensure every detail is perfect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-[#d77759]/10 rounded-full blur-lg animate-pulse"></div>
          </div>
          
          {/* Right side - Circular element */}
          <div className="flex justify-end items-end">
            <div className="relative" style={{marginBottom: '-25%', marginRight: '-75%'}}>
              {/* Rotating text around circle - outside the image */}
              <div className="absolute w-[48rem] h-[48rem] lg:w-[64rem] lg:h-[64rem] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animation: 'rotate 20s linear infinite' }}>
                <svg className="w-full h-full" viewBox="0 0 320 320">
                  <defs>
                    <path
                      id="circle-path"
                      d="M 160, 160 m -136, 0 a 136,136 0 1,1 272,0 a 136,136 0 1,1 -272,0"
                    />
                  </defs>
                  <text className="text-sm lg:text-base font-medium tracking-[0.3em] fill-[#00223f]">
                    <textPath href="#circle-path" startOffset="0%">
                      CREATING UNFORGETTABLE MOMENTS • ELEGANCE & DREAMS • WEDDING PLANNING •
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Main circle image */}
              <div className="w-[36rem] h-[36rem] lg:w-[52rem] lg:h-[52rem] rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/circle.png" 
                  alt="Wedding celebration" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;