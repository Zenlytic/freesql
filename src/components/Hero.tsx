import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToManifesto = () => {
    const manifestoSection = document.getElementById('manifesto');
    manifestoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-paper overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-24 flex flex-col items-center text-center">
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300 mb-12">
          <div className="vintage-border bg-paper p-8">
            <div className="triangle-eye w-32 h-32" />
          </div>
        </div>
        
        <h1 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-500 text-6xl md:text-8xl font-black tracking-tight mb-6">
          <span className="text-red-700">FREE</span> SQL
        </h1>
        
        <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-700 text-xl md:text-2xl max-w-2xl mb-8 text-black">
          The revolution in data analytics is coming. Let the machines do what they do best.
        </p>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-900">
          <a 
            href="#signup"
            className="bg-red-700 hover:bg-red-800 text-paper font-bold text-lg md:text-xl py-3 px-8 vintage-border transform transition-all hover:scale-105"
          >
            Join The Movement
          </a>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <button 
            onClick={scrollToManifesto}
            className="text-black opacity-75 hover:opacity-100 transition-opacity"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;