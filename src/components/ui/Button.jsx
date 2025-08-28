// src/components/ui/Button.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  ...props 
}) => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    
    if (!button || !text) return;

    // Initial setup
    gsap.set(button, { scale: 1 });
    
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(text, {
        letterSpacing: "0.3em",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(text, {
        letterSpacing: "0.2em",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseDown = () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const handleMouseUp = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    // Add event listeners
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mousedown', handleMouseDown);
    button.addEventListener('mouseup', handleMouseUp);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousedown', handleMouseDown);
      button.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const baseStyles = 'font-medium tracking-[0.2em] transition-colors duration-300 uppercase rounded-full transform-gpu';
  
  const variants = {
    primary: 'bg-[#AA7220] text-[#fdf8f3] hover:bg-[#d8ad7f] hover:text-[#00223f] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#fdf8f3]/50 text-[#fdf8f3] hover:bg-[#fdf8f3] hover:text-[#00223f] hover:shadow-lg',
    scrolled: 'border-2 border-[#00223f]/50 text-[#00223f] hover:bg-[#00223f] hover:text-[#fdf8f3] hover:shadow-lg',
  };
  
  const sizes = {
    sm: 'text-[10px] px-3 py-2',
    md: 'text-xs px-6 py-3',
    lg: 'text-xs px-8 py-4',
  };

  const handleClick = (e) => {
    // Create ripple effect
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = variant === 'primary' ? 'rgba(253, 248, 243, 0.3)' : 'rgba(170, 114, 32, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '1';
    
    button.appendChild(ripple);
    
    gsap.to(ripple, {
      scale: 4,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        ripple.remove();
      }
    });

    if (onClick) onClick(e);
  };
  
  return (
    <button
      ref={buttonRef}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} relative overflow-hidden`}
      onClick={handleClick}
      {...props}
    >
      <span ref={textRef} className="relative z-10">
        {children}
      </span>
    </button>
  );
};

export default Button;