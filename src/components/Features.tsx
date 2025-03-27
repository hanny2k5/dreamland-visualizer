
import React from 'react';
import { Sparkles, FileText, Briefcase, Target, MessagesSquare, BookOpen } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-blue-400" />,
      title: "Personalized Career Guidance",
      description: "Get tailored career advice based on your skills, experience, and aspirations.",
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-400" />,
      title: "Resume Optimization",
      description: "AI-powered resume analysis and suggestions to make your CV stand out to employers.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-400" />,
      title: "Job Search Strategy",
      description: "Discover effective job hunting techniques customized to your industry and goals.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-400" />,
      title: "Skill Development Plans",
      description: "Identify skill gaps and get personalized learning paths to enhance your marketability.",
    },
    {
      icon: <MessagesSquare className="h-8 w-8 text-blue-400" />,
      title: "Interview Preparation",
      description: "Practice with AI-simulated interviews and receive feedback to improve your performance.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      title: "Career Resources Library",
      description: "Access a comprehensive collection of guides, templates, and industry insights.",
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[#0e1015] z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Everything You Need for Career Success
          </h2>
          <p className="text-lg text-white/80">
            Our AI-powered platform offers comprehensive tools and resources to help you navigate every step of your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 border border-white/10 transition-all hover:border-white/20 hover:bg-white/[0.07] group"
            >
              <div className="p-3 bg-white/5 rounded-lg inline-block mb-4 group-hover:bg-white/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
