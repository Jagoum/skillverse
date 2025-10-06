export interface Creator {
  id: string;
  name: string;
  avatarUrl: string;
  title: string;
}

export interface Skill {
  id: string;
  title: string;
  category: string;
  creator: Creator;
  thumbnailUrl: string;
  rating: number;
  reviewCount: number;
  price: number | 'Free';
  isPaid: boolean;
}

export interface User {
  username: string;
  role: 'user' | 'admin';
}
