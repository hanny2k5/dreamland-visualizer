
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-20 overflow-hidden gradient-bg">
      <div className="absolute inset-0 hero-gradient z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block rounded-full px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-4">
            Powered by AI
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient">
            Your Personal AI Career Coach
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Unlock your professional potential with personalized career guidance, resume optimization, and job search strategies - all powered by advanced AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a 
              href="#features" 
              className="px-6 py-3 rounded-full btn-gradient text-white font-medium transition-all hover:shadow-lg hover:scale-105 w-full sm:w-auto"
            >
              Explore Features
            </a>
            <a 
              href="#" 
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 text-white font-medium transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <span>Try for free</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none h-40 bottom-0"></div>
          <div className="mx-auto max-w-5xl glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in">
            <img 
              src="https://placehold.co/1200x675/13151a/white?text=AI+Career+Coach+Dashboard" 
              alt="AI Career Coach Dashboard" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
