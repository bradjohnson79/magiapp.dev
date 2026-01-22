import { z } from 'zod';

export const signUpSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(2, 'Full name must be at least 2 characters.')
        .max(60, 'Full name is too long.'),
    email: z
        .string()
        .trim()
        .email('Enter a valid email address.'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters.')
        .max(72, 'Password is too long.')
        .regex(/[a-z]/, 'Password must include at least 1 lowercase letter.')
        .regex(/[A-Z]/, 'Password must include at least 1 uppercase letter.')
        .regex(/[0-9]/, 'Password must include at least 1 number.'),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
    email: z.string().trim().email('Enter a valid email address.'),
    password: z
        .string()
        .min(1, 'Password is required.')
        .max(72, 'Password is too long.'),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const verifyEmailSchema = z.object({
    code: z
        .array(z.string().trim().regex(/^\d?$/, 'Digits only.'))
        .length(6, 'Enter the 6-digit code.')
        .refine((arr) => arr.join('').length === 6, 'Enter the 6-digit code.'),
});

export type VerifyEmailValues = z.infer<typeof verifyEmailSchema>;