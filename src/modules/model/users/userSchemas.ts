import { z } from "zod";

const userSchema = z.object({
  name: z.string().optional().nullable(),
  email: z.string().email().optional().nullable(),
  image: z.string().optional().nullable(),
});

export const userWithEmailSchema = userSchema.extend({
  email: z.string().email(),
});

export const sessionSchema = z.object({
  user: userWithEmailSchema,
  expires: z.string(),
});
