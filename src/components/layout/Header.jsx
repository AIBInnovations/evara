// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Preload both logo images
    const preloadImages = () => {
      const img1 = new Image();
      const img2 = new Image();
      img1.src = "/logo.png";
      img2.src = "/logo1.png";
    };
    preloadImages();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#fdf8f3] shadow-md pt-6 pb-2' : 'bg-transparent pt-6 pb-4'
    }`}>
      <nav className={`container mx-auto px-6 lg:px-12 transition-all duration-300 ${
        isScrolled ? 'py-8' : 'py-8'
      }`}>
        <div className="relative flex items-center">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-7 h-5 relative focus:outline-none z-10"
          >
            <span className={`block absolute h-0.5 w-full left-0 top-0 transition-all duration-300 ${
              isScrolled ? 'bg-[#00223f]' : 'bg-[#fdf8f3]'
            }`}></span>
            <span className={`block absolute h-0.5 w-full left-0 top-2 transition-all duration-300 ${
              isScrolled ? 'bg-[#00223f]' : 'bg-[#fdf8f3]'
            }`}></span>
            <span className={`block absolute h-0.5 w-full left-0 top-4 transition-all duration-300 ${
              isScrolled ? 'bg-[#00223f]' : 'bg-[#fdf8f3]'
            }`}></span>
          </button>
          
          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-0">
            <a href="#packages" className={`text-sm font-medium tracking-wider hover:opacity-80 transition-all duration-300 ${
              isScrolled ? 'text-[#00223f]' : 'text-[#fdf8f3]'
            }`}>
              WEDDING PACKAGES
            </a>
            <div className={`w-px h-4 ${isScrolled ? 'bg-[#00223f]/30' : 'bg-[#fdf8f3]/30'} transition-all duration-300`}></div>
            <a href="#services" className={`text-sm font-medium tracking-wider hover:opacity-80 transition-all duration-300 ${
              isScrolled ? 'text-[#00223f]' : 'text-[#fdf8f3]'
            }`}>
              SERVICES
            </a>
            <div className={`w-px h-4 ${isScrolled ? 'bg-[#00223f]/30' : 'bg-[#fdf8f3]/30'} transition-all duration-300`}></div>
            <a href="#about" className={`text-sm font-medium tracking-wider hover:opacity-80 transition-all duration-300 ${
              isScrolled ? 'text-[#00223f]' : 'text-[#fdf8f3]'
            }`}>
              ABOUT
            </a>
          </div>
          
          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="text-center">
              <img 
                src={isScrolled ? "/logo.png" : "/logo1.png"}
                alt="Evora - Elegance & Dreams" 
                className="h-28 lg:h-36 w-auto mx-auto transition-all duration-300"
              />
            </div>
          </div>
          
          {/* CTA Button - Right */}
          <div className="hidden lg:block absolute right-0">
            <Button 
              variant={isScrolled ? "scrolled" : "outline"} 
              size="lg"
            >
              BOOK A CONSULTATION
            </Button>
          </div>
          
          {/* Mobile CTA - Right */}
          <button className={`lg:hidden text-[10px] tracking-wider font-medium border px-3 py-2 transition-all duration-300 absolute right-0 z-10 ${
            isScrolled 
              ? 'text-[#00223f] border-[#00223f]/50 hover:bg-[#00223f] hover:text-[#fdf8f3]' 
              : 'text-[#fdf8f3] border-[#fdf8f3]/50 hover:bg-[#fdf8f3] hover:text-[#00223f]'
          }`}>
            BOOK
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'bg-[#fdf8f3]/95' : 'bg-[#1c1815]/90'
        } ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col p-6 space-y-4">
            <a href="#packages" className={`text-sm font-medium tracking-wider transition-all duration-300 ${
              isScrolled ? 'text-[#00223f]' : 'text-[#fdf8f3]'
            }`}>
              WEDDING PACKAGES
            </a>
            <a href="#services" className={`text-sm font-medium tracking-wider transition-all duration-300 ${
              isScrolled ? 'text-[#00223f]' : 'text-[#fdf8f3]'
            }`}>
              SERVICES
            </a>
            <a href="#about" className={`text-sm font-medium tracking-wider transition-all duration-300 ${
              isScrolled ? 'text-[#00223f]' : 'text-[#fdf8f3]'
            }`}>
              ABOUT
            </a>
            <Button variant={isScrolled ? "scrolled" : "outline"} size="sm" className="w-full mt-4">
              BOOK A CONSULTATION
            </Button>
          </div>
        </div>
      </nav>
      {/* Bottom Border Line */}
      <div className={`container mx-auto px-16 lg:px-24 pt-6 transition-all duration-300 ${
        isScrolled ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="h-px bg-[#fdf8f3]/20"></div>
      </div>
    </header>
  );
};

export default Header;