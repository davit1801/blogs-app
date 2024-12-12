import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('auth.invalid-email'),
  password: z.string().min(8, 'auth.password-minlength'),
});