import { z } from 'zod';

const projectCreateValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be string',
      required_error: 'Name is required.',
    }),
    overview: z.string({
      invalid_type_error: 'Overview must be string',
      required_error: 'Overview is required.',
    }),
    link: z.string({
      invalid_type_error: 'Link must be string',
      required_error: 'Link is required',
    }),
  }),
});

export const projectValidations = {
  projectCreateValidationSchema,
};
