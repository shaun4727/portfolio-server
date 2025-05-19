export type THeroSection = {
  _id: string;
  stack: 'frontend' | 'backend' | 'full-stack';
  tagline: string;
  thumbnail?: string;
  about_me: string;
};

export type TSkill = {
  _id: string;
  name: string;
  description: string;
  skill_icon: string;
};
