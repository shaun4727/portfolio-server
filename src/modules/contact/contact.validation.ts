import { z } from 'zod';

const contactValidationSchema = z.object({
  body: z.object({
    fullname: z.string({
      invalid_type_error: 'Name must be string',
      required_error: 'Name is required.',
    }),
    email: z
      .string({ required_error: 'Email is required.' })
      .email('Invalid email format'),
    message: z.string({
      invalid_type_error: 'Message must be string',
      required_error: 'Message is required',
    }),
  }),
});

export const contactValidations = {
  contactValidationSchema,
};
