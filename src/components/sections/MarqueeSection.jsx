import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MarqueeSection = () => {
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeInner = marqueeInnerRef.current;
    
    if (!marquee || !marqueeInner) return;

    // Calculate the width of the marquee content
    const marqueeWidth = marqueeInner.scrollWidth;
    const containerWidth = marquee.offsetWidth;

    // Create the infinite scroll animation
    const tl = gsap.timeline({ repeat: -1 });
    
    // Set initial position
    gsap.set(marqueeInner, { x: containerWidth });
    
    // Animate to the left
    tl.to(marqueeInner, {
      x: -marqueeWidth,
      duration: 20,
      ease: "none"
    });

    // Optional: Add hover pause functionality
    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.resume();
    
    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tl.kill();
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-8 bg-[#fafaf9] overflow-hidden">
      <div ref={marqueeRef} className="relative">
        {/* Marquee container */}
        <div 
          ref={marqueeInnerRef}
          className="flex whitespace-nowrap will-change-transform"
        >
          {/* Repeat the image multiple times for seamless scroll */}
          {[...Array(12)].map((_, index) => (
            <img 
              key={index}
              src="/foreground.png" 
              alt="Marquee decoration" 
              className="h-24 lg:h-32 w-auto mx-8 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;