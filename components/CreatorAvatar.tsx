
import React from 'react';
import type { Creator } from '../types';

interface CreatorAvatarProps {
  creator: Creator;
}

export const CreatorAvatar: React.FC<CreatorAvatarProps> = ({ creator }) => {
  return (
    <div className="flex items-center space-x-2">
      <img className="w-6 h-6 rounded-full" src={creator.avatarUrl} alt={creator.name} />
      <span className="text-xs text-slate-400">{creator.name}</span>
    </div>
  );
};
