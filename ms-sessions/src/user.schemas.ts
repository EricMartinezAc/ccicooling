import { z } from 'zod';

export const userSchema = z.object({
    email: z.string().email("Invalid email format"),
    user: z.string().min(3, "Username must be at least 3 characters"),
    psw: z.string().min(6, "Password must be at least 6 characters"),
});