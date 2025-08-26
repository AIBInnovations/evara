// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseStyles = 'font-medium tracking-[0.2em] transition-all duration-300 uppercase';
  
  const variants = {
    primary: 'bg-[#AA7220] text-[#fdf8f3] hover:bg-[#d8ad7f] hover:text-[#00223f]',
    outline: 'border border-[#fdf8f3]/50 text-[#fdf8f3] hover:bg-[#fdf8f3] hover:text-[#00223f]',
    scrolled: 'border border-[#00223f]/50 text-[#00223f] hover:bg-[#00223f] hover:text-[#fdf8f3]',
  };
  
  const sizes = {
    sm: 'text-[10px] px-3 py-2',
    md: 'text-xs px-6 py-3',
    lg: 'text-xs px-8 py-4',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;