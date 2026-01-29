// src/validation/account.ts
import { z } from 'zod';

export const accountDetailsSchema = z.object({
    fullName: z.string().trim().min(2, 'Full name must be at least 2 characters.').max(60, 'Full name is too long.'),
    email: z.string().trim().email('Enter a valid email address.'),
    role: z.string().optional(),
});

export type AccountDetailsValues = z.infer<typeof accountDetailsSchema>;