
import React from 'react';
import type { Skill } from '../types';
import { CreatorAvatar } from './CreatorAvatar';
import { StarIcon } from './IconComponents';

interface SkillCardProps {
  skill: Skill;
}

const PriceTag: React.FC<{ price: number | 'Free' }> = ({ price }) => {
  if (price === 'Free') {
    return <span className="text-lg font-bold text-green-400">Free</span>;
  }
  return <span className="text-lg font-bold text-slate-200">${price.toFixed(2)}</span>;
};


export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-base-200/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-base-300/50 group transition-all duration-300 hover:border-brand-primary/50 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        <img className="w-full h-40 object-cover" src={skill.thumbnailUrl} alt={skill.title} />
        <div className="absolute top-2 right-2 bg-base-100/70 text-brand-secondary text-xs font-bold px-2 py-1 rounded-full">
          {skill.category}
        </div>
      </div>
      <div className="p-4 flex flex-col space-y-3">
        <h3 className="text-md font-bold text-slate-200 group-hover:text-brand-primary transition-colors">{skill.title}</h3>
        <CreatorAvatar creator={skill.creator} />
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center text-sm">
            <StarIcon className="w-4 h-4 text-amber-400 mr-1" />
            <span className="text-slate-300 font-semibold">{skill.rating}</span>
            <span className="text-slate-400 ml-1">({skill.reviewCount})</span>
          </div>
          <PriceTag price={skill.price} />
        </div>
      </div>
    </div>
  );
};
