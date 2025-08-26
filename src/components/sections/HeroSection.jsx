// src/components/sections/HeroSection.jsx
import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 to-black/40"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://www.punjabi-rishtey.com/assets/WeddingVideo-DDenmgfZ.mp4" type="video/mp4" />
          {/* Fallback background */}
          <div className="w-full h-full bg-gradient-to-br from-rose-200 via-neutral-200 to-amber-100"></div>
        </video>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center text-[#fdf8f3] px-6">
          <div className="animate-fadeInUp">
            <p className="text-sm lg:text-base tracking-[0.3em] font-light mb-6 opacity-90">
              CRAFTING UNFORGETTABLE MOMENTS
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl xl:text-6xl font-light mb-6 leading-tight">
              Your Dream<br />Wedding Awaits
            </h2>
            <p className="text-sm lg:text-base font-light max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
              From intimate gatherings to grand celebrations, we transform your vision 
              into a breathtaking reality with elegance and meticulous attention to detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="lg">
                START PLANNING
              </Button>
              <Button variant="outline" size="lg">
                VIEW PORTFOLIO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;