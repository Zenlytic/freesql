import React, { useEffect, useRef } from 'react';
import { Code, ArrowRight, Bot, Database, LineChart } from 'lucide-react';

const ManifestoSection: React.FC<{
  id: string;
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  background?: string;
  textColor?: string;
}> = ({ 
  id, 
  title, 
  children, 
  icon, 
  align = 'left',
  background = 'bg-paper',
  textColor = 'text-black'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-20');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const alignmentClasses = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center'
  };

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-20 ${background} ${textColor} opacity-0 translate-y-20 transition-all duration-1000`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto ${alignmentClasses[align]}`}>
          {icon && <div className="mb-6 text-red-700">{icon}</div>}
          {title && <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>}
          <div className="text-lg md:text-xl space-y-6">{children}</div>
        </div>
      </div>
    </section>
  );
};

const Manifesto: React.FC = () => {
  return (
    <>
      <ManifestoSection 
        id="manifesto" 
        icon={<Code size={48} />}
        background="bg-paper"
      >
        <p className="font-semibold text-2xl md:text-3xl mb-6 text-red-700">
          For 40 years we have been teaching humans to speak computer language.
        </p>
        <p className="mb-6">
          Computers now speak human language. And they can write SQL better than almost everyone.
        </p>
        <p className="text-xl md:text-2xl font-bold">
          Why are we still constraining them behind tools built for humans?
        </p>
      </ManifestoSection>

      <ManifestoSection 
        id="lesson" 
        background="bg-red-700" 
        align="right"
        textColor="text-paper"
        icon={<Bot size={48} className="text-paper" />}
      >
        <p className="font-semibold text-2xl md:text-3xl mb-6">
          The bitter lesson is coming to the data world.
        </p>
        <p className="mb-6">
          We can learn from other industries or keep the analytics adoption rate at 30%.
        </p>
        <p className="text-xl md:text-2xl font-bold">
          The gap between facts and decisions is still complicated and takes days.
        </p>
      </ManifestoSection>

      <ManifestoSection 
        id="vision" 
        background="bg-paper"
        align="center"
        icon={<LineChart size={48} />}
      >
        <p className="font-semibold text-2xl md:text-3xl mb-6">
          The gap between facts and decisions needs to close.
        </p>
        <p className="mb-6">
          Let's let the LLMs do what they are great at, writing code.
        </p>
        <p className="mb-6">
          The next generation of data tools will not constrain LLMs. It will give context and clarity to the code LLMs produce.
        </p>
        <div className="mt-10 flex justify-center">
          <p className="text-3xl md:text-4xl font-bold inline-flex items-center vintage-border p-4">
            Change is coming <ArrowRight className="ml-2" />
          </p>
        </div>
      </ManifestoSection>

      <ManifestoSection 
        id="launch" 
        background="bg-red-700"
        align="center"
        textColor="text-paper"
        icon={<Database size={48} className="text-paper" />}
      >
        <p className="font-bold text-3xl md:text-5xl mb-8">
          Free SQL with us.
        </p>
        <p className="text-xl md:text-2xl font-semibold mb-10">
          Launching Summer 2025.
        </p>
      </ManifestoSection>
    </>
  );
};

export default Manifesto;