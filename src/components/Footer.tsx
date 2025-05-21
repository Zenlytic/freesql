import React from 'react';
import { Github, Twitter, Database } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black border-t border-red-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Database className="text-red-700 h-6 w-6 mr-2" />
            <span className="text-lg font-bold text-white">FreeSQL</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {currentYear} FreeSQL. All rights reserved.
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
          <p>Launching Summer 2025. Join the waitlist for early access.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;