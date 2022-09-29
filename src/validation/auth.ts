import z from 'zod';

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(3),
});

export const forgotPasswordSchema = z.object({
    email: z.string().email(),
});

export const resetPasswordSchema = z.object({
    password: z.string().min(8),
});

export const changePasswordSchema = z.object({
    oldPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmPassword: z.string().min(8),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
