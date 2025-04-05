import { model, Schema } from 'mongoose';
import { TImages, TProject } from './project.interface';

const ImageSchema = new Schema<TImages>({
  key: { type: Number, required: true },
  link: { type: String, required: true },
});

// Modified project schema
const projectSchema = new Schema<TProject>(
  {
    name: { type: String, required: true },
    thumbnail: { type: String }, // Optional (matches interface)
    images: { type: [ImageSchema] }, // Array of image objects
    overview: { type: String, required: true },
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>('Project', projectSchema);
