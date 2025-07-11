const {z} =require('zod');

const signupSchema = z.object({
    username: z
    .string({required_error: "Username is required"})
    .trim()
    .min(3, {message: "Username must be at least 3 characters long"})
    .max(200, {message: "Username must be at most 200 characters long"}),

    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email format"})
    .min(5, {message: "Email must be at least 5 characters long"})
    .max(200, {message: "Email must be at most 200 characters long"}),

    password: z
    .string({required_error:"must be strong"})
    .trim()
    .min(6, "Password must be at least 6 characters long")
    .max(200, "Password must be at most 200 characters long"),

    phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 characters long")
    .max(11, "Phone number must be at most 15 characters long")
});

const loginSchema = z.object({
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email format"})
    .min(5, {message: "Email must be at least 5 characters long"})
    .max(200, {message: "Email must be at most 200 characters long"}),

    password: z
    .string({required_error:"must be strong"})
    .trim()
    .min(6, "Password must be at least 6 characters long")
    .max(200, "Password must be at most 200 characters long")
});

module.exports = {signupSchema , loginSchema};