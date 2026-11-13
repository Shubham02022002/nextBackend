import z, { email } from "zod";

export const UserSignUpSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Password must be at least 8 char long"),
  firstName: z.string().min(2, "First name must be at least 2 char long"),
  lastName: z.string().min(2, "Last name must be at least 2 char long"),
});

export const UserSignInSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Password must be at least 8 char long"),
});

export type UserSignUpSchema = z.infer<typeof UserSignUpSchema>;
export type UserSignInSchema = z.infer<typeof UserSignInSchema>;
