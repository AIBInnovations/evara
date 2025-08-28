// src/components/sections/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../ui/Button';

const HeroSection = () => {
  const contentRef = useRef(null);
  const subheadingRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const subheading = subheadingRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const buttons = buttonsRef.current;

    if (!content || !subheading || !title || !description || !buttons) return;

    // Create main timeline
    const tl = gsap.timeline({ delay: 0.5 });

    // Set initial states
    gsap.set([subheading, title, description, buttons], {
      opacity: 0,
      y: 50
    });

    // Animate elements in sequence with overlapping
    tl.to(subheading, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.4")
    .to(description, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .to(buttons, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.4");

    // Add subtle floating animation to the entire content
    gsap.to(content, {
      y: -10,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      delay: 2
    });

    return () => {
      tl.kill();
    };
  }, []);

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
        <div ref={contentRef} className="text-center text-[#fdf8f3] px-6">
          <p 
            ref={subheadingRef}
            className="text-sm lg:text-base tracking-[0.3em] font-light mb-6 opacity-90"
          >
            CRAFTING UNFORGETTABLE MOMENTS
          </p>
          <h2 
            ref={titleRef}
            className="font-serif text-3xl lg:text-5xl xl:text-6xl font-light mb-6 leading-tight"
          >
            Your Dream<br />Wedding Awaits
          </h2>
          <p 
            ref={descriptionRef}
            className="text-sm lg:text-base font-light max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed"
          >
            From intimate gatherings to grand celebrations, we transform your vision 
            into a breathtaking reality with elegance and meticulous attention to detail
          </p>
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="primary" size="lg">
              START PLANNING
            </Button>
            <Button variant="outline" size="lg">
              VIEW PORTFOLIO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;