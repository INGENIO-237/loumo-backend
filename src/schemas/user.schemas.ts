import { object, string, TypeOf, nullable, number, boolean } from "zod";

const pwdLength = 6;

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    email: string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    }).email("Invalid email format"),
    password: string({ required_error: "Password is required" }).min(
      pwdLength,
      `Password must be at least ${pwdLength} chars long`
    ),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;

export const updateUserSchema = object({
  params: object({
    id: string({ required_error: "User ID is required", invalid_type_error: "User ID must be a string" }),
  }),
  body: object({
    name: nullable(
      string({
        invalid_type_error: "Name must be a string",
      })
    ),
    email: nullable(
      string({
        invalid_type_error: "Email must be a string",
      }).email("Invalid email format")
    ),
    password: nullable(
      string().min(
        pwdLength,
        `Password must be at least ${pwdLength} chars long`
      )
    ),
    otp: nullable(number()),
    isValid: nullable(boolean()),
    isVerified: nullable(boolean()),
  }),
});

export type UpdateUserInput = TypeOf<typeof updateUserSchema>;

export const deleteUserSchema = object({
  params: object({
    id: string({ required_error: "User ID is required", invalid_type_error: "User ID must be a string" }),
  }),
});

export type DeleteUserInput = TypeOf<typeof deleteUserSchema>;
