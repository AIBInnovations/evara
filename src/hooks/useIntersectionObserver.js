import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const inView = entry.isIntersecting;
      setIsInView(inView);
      
      if (inView && !hasBeenInView) {
        setHasBeenInView(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasBeenInView, options]);

  return { elementRef, isInView, hasBeenInView };
};

// Enhanced hook for GSAP animations
export const useGSAPIntersectionObserver = (
  animationConfig = {},
  options = {}
) => {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const timelineRef = useRef(null);

  const {
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    stagger = 0,
    triggerOnce = true
  } = animationConfig;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, from);

    const observer = new IntersectionObserver(([entry]) => {
      const inView = entry.isIntersecting;
      setIsInView(inView);
      
      if (inView && (!triggerOnce || !hasBeenInView)) {
        setHasBeenInView(true);
        
        // Kill any existing timeline
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
        
        // Create new animation
        if (stagger > 0) {
          // If stagger is specified, assume element has children to animate
          const children = element.children;
          gsap.set(children, from);
          timelineRef.current = gsap.to(children, {
            ...to,
            stagger
          });
        } else {
          timelineRef.current = gsap.to(element, to);
        }
      } else if (!inView && !triggerOnce) {
        // Reset animation if element leaves view and triggerOnce is false
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
        gsap.set(element, from);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [hasBeenInView, from, to, stagger, triggerOnce, options]);

  // Function to manually trigger animation
  const triggerAnimation = useCallback(() => {
    const element = elementRef.current;
    if (!element) return;

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    if (stagger > 0) {
      const children = element.children;
      timelineRef.current = gsap.to(children, {
        ...to,
        stagger
      });
    } else {
      timelineRef.current = gsap.to(element, to);
    }
  }, [to, stagger]);

  return { 
    elementRef, 
    isInView, 
    hasBeenInView, 
    triggerAnimation 
  };
};