import React from 'react';
import type { Skill, Creator } from '../types';
import { SkillCard } from '../components/SkillCard';

const creators: Creator[] = [
  { id: 'c1', name: 'Elena V.', avatarUrl: 'https://picsum.photos/id/237/100/100', title: 'UI/UX Lead' },
  { id: 'c2', name: 'John D.', avatarUrl: 'https://picsum.photos/id/238/100/100', title: 'Senior Dev' },
  { id: 'c3', name: 'Aisha K.', avatarUrl: 'https://picsum.photos/id/239/100/100', title: 'Branding Expert' },
];

const skills: Skill[] = [
  { id: 's1', title: 'Advanced Figma: Prototyping & UI Animation', category: 'Design', creator: creators[0], thumbnailUrl: 'https://picsum.photos/id/10/600/400', rating: 4.9, reviewCount: 1250, price: 129.99, isPaid: true },
  { id: 's2', title: 'React for Beginners: Building Modern Web Apps', category: 'Code', creator: creators[1], thumbnailUrl: 'https://picsum.photos/id/20/600/400', rating: 4.8, reviewCount: 2300, price: 'Free', isPaid: false },
  { id: 's3', title: 'Brand Identity Design Essentials', category: 'Branding', creator: creators[2], thumbnailUrl: 'https://picsum.photos/id/30/600/400', rating: 4.9, reviewCount: 850, price: 99.99, isPaid: true },
  { id: 's4', title: 'TypeScript Deep Dive: From Novice to Expert', category: 'Code', creator: creators[1], thumbnailUrl: 'https://picsum.photos/id/40/600/400', rating: 5.0, reviewCount: 1800, price: 149.99, isPaid: true },
  { id: 's5', title: 'Social Media Strategy for Creatives', category: 'Social', creator: creators[2], thumbnailUrl: 'https://picsum.photos/id/50/600/400', rating: 4.7, reviewCount: 940, price: 'Free', isPaid: false },
  { id: 's6', title: 'Mastering Adobe Illustrator for Logos', category: 'Design', creator: creators[0], thumbnailUrl: 'https://picsum.photos/id/60/600/400', rating: 4.8, reviewCount: 1120, price: 119.99, isPaid: true },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-center text-white mb-12">{children}</h2>
);


const HomePage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-base-100 to-base-100 z-0"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                        Unlock Your Creative Potential
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                        Learn from industry experts in graphic design, software development, branding, and more. Master the skills of tomorrow, today.
                    </p>
                    <div className="flex justify-center items-center space-x-4">
                        <button className="bg-brand-primary hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                            Explore Skills
                        </button>
                        <button className="bg-base-200 hover:bg-base-300 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                            Teach on SkillVerse
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Skills Section */}
            <section className="py-20">
              <div className="container mx-auto px-6">
                <SectionTitle>Featured Skills</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {skills.map(skill => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            </section>
            
            {/* Become a Creator Section */}
            <section className="py-20 bg-base-200">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Share Your Passion. Shape the Future.</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                        Join our community of creators and share your expertise with learners across the globe. We provide the tools, you provide the talent.
                    </p>
                    <button className="bg-brand-secondary hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                        Start Teaching Today
                    </button>
                </div>
            </section>
        </>
    );
};

export default HomePage;
