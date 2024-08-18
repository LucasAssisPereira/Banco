import { z } from 'zod'
// TODO: o password tem que ter um regex, mas deixa assim por enquanto pra facilitar desenvolver
export const emailSchema = z.string().email().min(1).max(255)
export const passwordSchema = z.string().min(8).max(255)

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  userAgent: z.string().optional()
})

export const registerSchema = loginSchema.extend({
  confirmPassword: z.string().min(8).max(255)
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password do not match',
  path: ['confirmPassword']
})

export const verificationCodeSchema = z.string().min(1).max(32)

export const resetPasswordSchema = z.object({
  password: passwordSchema,
  verificationCode: verificationCodeSchema
})
