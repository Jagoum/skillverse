
import React from 'react';
import { Logo } from './IconComponents';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-slate-400 text-sm">Unlock your potential with skills from the best creators in design and development.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold">Platform</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-brand-primary">Courses</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-primary">Become a Creator</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-primary">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Community</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-brand-primary">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-primary">Discord</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-primary">Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-brand-primary">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-primary">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-base-300 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SkillVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
