import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required.' })
      .email('Invalid email format'),
    password: z.string({
      invalid_type_error: 'Password must be string',
      required_error: 'Password is required',
    }),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});

export const userValidations = {
  loginValidationSchema,
  refreshTokenValidationSchema,
};
