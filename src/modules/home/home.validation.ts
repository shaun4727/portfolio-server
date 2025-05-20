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

const experienceCreateValidationSchema = z.object({
  body: z.object({
    company_name: z.string({
      invalid_type_error: 'Company Name must be string',
      required_error: 'Company Name is required.',
    }),
    currently_working: z.boolean({
      invalid_type_error: 'Currently Working must be boolean',
      required_error: 'Currently Working is required.',
    }),
    designation: z.string({
      invalid_type_error: 'Designation must be string',
      required_error: 'Designation is required.',
    }),
    end_date: z.string({
      invalid_type_error: 'End Date must be string',
      required_error: 'End Date is required.',
    }),
    start_date: z.string({
      invalid_type_error: 'Start Date must be string',
      required_error: 'Start Date is required',
    }),
    responsibilities: z.array(
      z.string({
        invalid_type_error: 'Responsibility must be string',
        required_error: 'Responsibility is required',
      })
    ),
  }),
});

const blogCreateValidationSchema = z.object({
  body: z.object({
    content: z.string({
      invalid_type_error: 'Content must be string',
      required_error: 'Content is required.',
    }),
    excerpt: z.string({
      invalid_type_error: 'Excerpt must be string',
      required_error: 'Excerpt is required.',
    }),
    question: z.string({
      invalid_type_error: 'Question must be string',
      required_error: 'Question is required.',
    }),
  }),
});

export const heroValidations = {
  heroSectionCreateValidationSchema,
  skillCreateValidationSchema,
  experienceCreateValidationSchema,
  blogCreateValidationSchema,
};
