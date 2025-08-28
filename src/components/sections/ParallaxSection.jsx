import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const maskRef = useRef(null);
  const contentRef = useRef(null);
  const borderRef = useRef(null);
  const floatingElementsRef = useRef([]);
  const [isFullyExpanded, setIsFullyExpanded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    const mask = maskRef.current;
    const content = contentRef.current;
    const border = borderRef.current;
    
    if (!container || !section || !mask || !content || !border) return;

    // Create timeline for the circle expansion animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const expansionProgress = 15 + (progress * 85);
          setIsFullyExpanded(expansionProgress >= 90);
        }
      }
    });

    // Animate the circle mask expansion
    tl.fromTo(mask, 
      { 
        clipPath: "circle(15% at 50% 50%)" 
      },
      { 
        clipPath: "circle(100% at 50% 50%)",
        ease: "power2.inOut"
      }
    );

    // Animate the decorative border
    tl.fromTo(border,
      {
        width: "120px",
        height: "120px",
        opacity: 0
      },
      {
        width: "800px",
        height: "800px",
        opacity: 0.8,
        ease: "power2.inOut"
      },
      0
    );

    // Animate content fade in after expansion
    gsap.set(content, { opacity: 0, y: 30 });
    
    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (self.progress > 0.8) {
          gsap.to(content, { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            ease: "power2.out"
          });
        }
      }
    });

    // Animate floating elements with parallax
    floatingElementsRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: -100 * (index + 1),
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} id="parallax-container" style={{ height: `300vh` }}>
      <section 
        ref={sectionRef}
        id="parallax-section" 
        className="sticky top-0 h-screen bg-[#1c1815] overflow-hidden flex items-center justify-center"
      >
      
      {/* Expanding Mandala Shape Mask */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Mandala SVG Mask */}
        <div 
          ref={maskRef}
          className="absolute inset-0"
          style={{
            clipPath: "circle(15% at 50% 50%)",
            backgroundImage: 'url(/wedding.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Decorative Mandala Border */}
        <div 
          ref={borderRef}
          className="absolute border-4 border-[#AA7220] rounded-full"
          style={{
            width: "120px",
            height: "120px",
            opacity: 0,
            boxShadow: `0 0 50px rgba(170, 114, 32, 0.5)`
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
          ref={contentRef}
          className="relative z-10 text-center"
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
          ref={(el) => floatingElementsRef.current[0] = el}
          className={`absolute top-20 left-20 transition-opacity duration-1000 ${
            isFullyExpanded ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <div className="w-2 h-2 bg-[#AA7220] rounded-full animate-pulse"></div>
        </div>
        <div 
          ref={(el) => floatingElementsRef.current[1] = el}
          className={`absolute bottom-32 right-24 transition-opacity duration-1000 ${
            isFullyExpanded ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <div className="w-3 h-3 bg-[#d8ad7f] rounded-full animate-pulse"></div>
        </div>
        <div 
          ref={(el) => floatingElementsRef.current[2] = el}
          className={`absolute top-40 right-32 transition-opacity duration-1000 ${
            isFullyExpanded ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <div className="w-1 h-1 bg-[#fdf8f3] rounded-full animate-pulse"></div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default ParallaxSection;