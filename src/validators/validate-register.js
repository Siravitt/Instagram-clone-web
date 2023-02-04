import Joi from "joi";

const registerSchema = Joi.object({
  userName: Joi.string().trim().required().messages({
    "string.empty": "Username is required",
  }),
  email: Joi.string().email({tlds:{allow: false}}).required().messages({
    "string.empty": "Email is required",
    "string.email": "Must be a valid email"
  }),
  firstName: Joi.string().trim().required().messages({
    "string.empty": "First name is required",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "Last name is required",
  }),
  password: Joi.string().alphanum().min(6).trim().required().messages({
    "string.empty": "Password is required",
    "string.alphanum": "Password must contain number or alphabet",
    "string.min": "Password length must be at least 6 characters long",
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .messages({
      "any.only": "Password and confirm password did not match",
      "string.empty": "Confirm password is required",
    }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;