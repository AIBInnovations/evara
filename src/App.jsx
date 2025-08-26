// src/App.jsx
import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ParallaxSection from './components/sections/ParallaxSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ParallaxSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}

export default App;