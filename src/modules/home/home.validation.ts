import { z } from 'zod';

const heroSectionCreateValidationSchema = z.object({
  body: z.object({
    stack: z.enum(['frontend', 'backend', 'full-stack']).refine((val) => val, {
      message: 'Stack is required',
    }),
    // stack: z.string({
    //   invalid_type_error: 'Stack must be string',
    //   required_error: 'Stack is required.',
    // }),
    tagline: z.string({
      invalid_type_error: 'Tagline must be string',
      required_error: 'Tagline is required.',
    }),
    about_me: z.string({
      invalid_type_error: 'About Me must be string',
      required_error: 'About Me is required',
    }),
  }),
});

const skillCreateValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be string',
      required_error: 'Name is required.',
    }),
    description: z.string({
      invalid_type_error: 'Description must be string',
      required_error: 'Description is required.',
    }),
  }),
});

export const heroValidations = {
  heroSectionCreateValidationSchema,
  skillCreateValidationSchema,
};
