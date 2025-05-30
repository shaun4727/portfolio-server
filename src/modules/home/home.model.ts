import { model, Schema } from 'mongoose';
import { TBlog, TExperience, THeroSection, TSkill } from './home.interface';

// Modified project schema
const heroSectionSchema = new Schema<THeroSection>(
  {
    stack: {
      type: String,
      required: true,
      enum: ['frontend', 'backend', 'full-stack'],
    },
    thumbnail: { type: String }, // Array of image objects
    tagline: { type: String, required: true },
    about_me: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const HeroSectionData = model<THeroSection>(
  'HeroSection',
  heroSectionSchema
);

// skill section schema

const skillSectionSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    skill_icon: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const skillSectionData = model<TSkill>(
  'SkillSection',
  skillSectionSchema
);

// experience section schema
const experienceSectionSchema = new Schema<TExperience>(
  {
    company_name: { type: String, required: true },
    currently_working: { type: Boolean, required: false },
    designation: { type: String, required: true },
    end_date: { type: String, required: false },
    start_date: { type: String, required: true },
    responsibilities: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

export const experienceSectionData = model<TExperience>(
  'ExperienceSection',
  experienceSectionSchema
);

// blog section schema
const blogSectionSchema = new Schema<TBlog>(
  {
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    question: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const blogSectionData = model<TBlog>('BlogSection', blogSectionSchema);
