import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <Database className="text-red-700 h-8 w-8 mr-2" /> */}
            <span className="text-xl font-bold tracking-tight text-red-800">FREE SQL</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="https://www.zenlytic.com/manifesto?utm_source=freesql" className="text-red-700 font-bold hover:text-red-800 transition-colors" target="_blank" rel="noopener noreferrer">
              Manifesto
            </a>
            <a href="#signup" className="text-red-700 font-bold hover:text-red-800 transition-colors">
              Join
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-red-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <a 
              href="#manifesto" 
              className="text-red-500 hover:text-red-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Manifesto
            </a>
            <a 
              href="#vision" 
              className="text-red-500 hover:text-red-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vision
            </a>
            <a 
              href="#signup" 
              className="text-red-500 hover:text-red-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;