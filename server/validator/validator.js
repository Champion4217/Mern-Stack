const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name should be greater than 3 characters " })
    .max(255, { message: "Name should be less than 255 character" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid Email address" })
    .trim()
    .min(3, { message: "Email should be greater than 3 characters" })
    .max(255, { message: "Email should be less than 255 characters" }),
  phone: z
    .string({ required_error: "Phone No is required" })
    .trim()
    .min(10, { message: "Phone No should be greater than 10 characters " })
    .max(13, { message: "Phone No should be less than 13 character" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password should be greater than 6 characters " })
    .max(18, { message: "Password should be less than 18 character" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid Email address" })
    .trim()
    .min(3, { message: "Email should be greater than 3 characters" })
    .max(255, { message: "Email should be less than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password should be greater than 6 characters " })
    .max(18, { message: "Password should be less than 18 character" }),
});

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name should be greater than 3 characters " })
    .max(255, { message: "Name should be less than 255 character" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid Email address" })
    .trim()
    .min(3, { message: "Email should be greater than 3 characters" })
    .max(255, { message: "Email should be less than 255 characters" }),
  message: z
    .string({ required_error: "message is required" })
    .trim()
    .min(10, { message: "message should be greater than 10 characters " }),
});

module.exports = {
  signupSchema,
  loginSchema,
  contactSchema,
};
