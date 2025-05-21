import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "FreeSQL - Free the LLMs, Free SQL";
    
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'FreeSQL is revolutionizing data analytics by unleashing the power of LLMs to write SQL. Join the movement launching Summer 2025.';
    document.head.appendChild(metaDescription);
    
    return () => {
      // Clean up when component unmounts
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="font-sans min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;