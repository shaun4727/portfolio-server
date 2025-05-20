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

// experience section
export type TExperience = {
  _id: string;
  company_name: string;
  currently_working: boolean;
  designation: string;
  end_date: string;
  start_date: string;
  responsibilities: string[];
};
