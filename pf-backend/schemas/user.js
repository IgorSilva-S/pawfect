const { z } = require("zod");

const registerSchema = z.object({
  name: z.string().min(1).max(100),
  username: z.string().min(1).max(100),
  email: z.string().email().optional(),
  password: z.string().min(8).max(100),
  phone: z.string().min(8).max(15),
  address: z.string().min(1).max(255)
});

const loginSchema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(8).max(100),
});

const updateUserSchema = registerSchema.pick({
  name: true,
  password: true,
  email: true,
  phone: true,
  address: true
}).partial()

module.exports = { registerSchema, loginSchema, updateUserSchema };