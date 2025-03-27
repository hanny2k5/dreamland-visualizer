
import React from 'react';
import { CheckCircle } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "Personalized career guidance",
    "AI-powered resume optimization",
    "Interview preparation tools",
    "Job search strategies",
    "Skill development plans",
    "Unlimited AI conversations"
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1015] to-background z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="glass-card rounded-2xl overflow-hidden border border-white/10 max-w-6xl mx-auto">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                  Ready to Transform Your Career Journey?
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Join thousands of professionals who have accelerated their career growth with our AI coach. Get started today with our 7-day free trial.
                </p>
                
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#" 
                    className="px-6 py-3 rounded-full btn-gradient text-white font-medium transition-all hover:shadow-lg hover:scale-105 text-center"
                  >
                    Start Free Trial
                  </a>
                  <a 
                    href="#" 
                    className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 text-white font-medium transition-all text-center"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
              
              <div className="relative h-full flex items-center justify-center animate-fade-in-right">
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://placehold.co/600x400/13151a/white?text=AI+Coach+Demo" 
                    alt="AI Coach Demo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
