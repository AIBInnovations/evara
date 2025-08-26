import React, { useEffect, useState } from 'react';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if section is in view
      const section = document.getElementById('parallax-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setSectionInView(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate expansion based on scroll position within the container
  const calculateExpansion = () => {
    const container = document.getElementById('parallax-container');
    if (!container) return 15;
    
    const rect = container.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const containerHeight = rect.height;
    const viewportHeight = window.innerHeight;
    
    // Only start expansion when container top reaches viewport top (section fully visible)
    const sectionFullyVisible = containerTop <= scrollY;
    
    if (!sectionFullyVisible) return 15; // Keep initial circle until section is fully visible
    
    // Calculate how far we've scrolled beyond the section being fully visible
    const scrollBeyondVisible = scrollY - containerTop;
    
    // Full expansion happens over the extra height we added (200vh)
    const expansionDistance = containerHeight - viewportHeight; // The extra scroll distance
    
    if (scrollBeyondVisible <= 0) return 15; // Initial circle at the start
    if (scrollBeyondVisible >= expansionDistance) return 100;
    
    const progress = scrollBeyondVisible / expansionDistance;
    return Math.min(100, Math.max(15, 15 + progress * 85));
  };

  const expansionProgress = calculateExpansion();
  const isFullyExpanded = expansionProgress >= 90;

  return (
    <div id="parallax-container" style={{ height: `300vh` }}>
      <section 
        id="parallax-section" 
        className="sticky top-0 h-screen bg-[#1c1815] overflow-hidden flex items-center justify-center"
      >
      
      {/* Expanding Mandala Shape Mask */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Mandala SVG Mask */}
        <div 
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            clipPath: `circle(${expansionProgress}% at 50% 50%)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <img 
            src="/wedding.jpg"
            alt="Wedding celebration"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
            onLoad={(e) => {
              e.target.parentElement.style.background = 'url(/wedding.jpg)';
            }}
          />
        </div>
        
        {/* Decorative Mandala Border */}
        <div 
          className="absolute transition-all duration-500 ease-out border-4 border-[#AA7220] rounded-full"
          style={{
            width: `${expansionProgress * 8}px`,
            height: `${expansionProgress * 8}px`,
            opacity: expansionProgress > 10 ? 0.8 : 0,
            boxShadow: `0 0 ${expansionProgress}px rgba(170, 114, 32, 0.5)`
          }}
        >
          {/* Inner decorative rings */}
          <div 
            className="absolute inset-2 border-2 border-[#d8ad7f] rounded-full opacity-60"
            style={{
              boxShadow: 'inset 0 0 20px rgba(216, 173, 127, 0.3)'
            }}
          />
          <div 
            className="absolute inset-4 border border-[#fdf8f3] rounded-full opacity-40"
            style={{
              boxShadow: 'inset 0 0 10px rgba(253, 248, 243, 0.2)'
            }}
          />
        </div>

        {/* Content Overlay - appears after full expansion */}
        <div 
          className={`relative z-10 text-center transition-all duration-1000 ${
            isFullyExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#AA7220]/30">
            <h2 className="text-4xl lg:text-6xl font-serif text-[#fdf8f3] mb-6 leading-tight">
              Sacred Union
            </h2>
            <p className="text-lg lg:text-xl text-[#fdf8f3]/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Where tradition meets timeless love, we craft ceremonies that honor heritage 
              while celebrating your unique journey together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#AA7220] text-[#fdf8f3] px-8 py-4 rounded-full font-medium tracking-wider transition-all duration-300 hover:bg-[#d8ad7f] hover:text-[#00223f] hover:scale-105 shadow-lg">
                EXPLORE PACKAGES
              </button>
              <button className="border-2 border-[#fdf8f3]/50 text-[#fdf8f3] px-8 py-4 rounded-full font-medium tracking-wider transition-all duration-300 hover:bg-[#fdf8f3] hover:text-[#00223f] hover:scale-105">
                VIEW GALLERY
              </button>
            </div>
          </div>
          
          {/* Decorative elements around content */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#AA7220]"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#AA7220]"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#AA7220]"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#AA7220]"></div>
        </div>

        {/* Floating decorative elements */}
        <div 
          className={`absolute top-20 left-20 transition-all duration-1000 ${
            isFullyExpanded ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${scrollY * -0.2}px)`
          }}
        >
          <div className="w-2 h-2 bg-[#AA7220] rounded-full animate-pulse"></div>
        </div>
        <div 
          className={`absolute bottom-32 right-24 transition-all duration-1000 ${
            isFullyExpanded ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        >
          <div className="w-3 h-3 bg-[#d8ad7f] rounded-full animate-pulse"></div>
        </div>
        <div 
          className={`absolute top-40 right-32 transition-all duration-1000 ${
            isFullyExpanded ? 'opacity-40' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${scrollY * -0.15}px)`
          }}
        >
          <div className="w-1 h-1 bg-[#fdf8f3] rounded-full animate-pulse"></div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default ParallaxSection;