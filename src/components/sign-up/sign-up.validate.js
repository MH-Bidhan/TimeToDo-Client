import Joi from "joi";

const signUpSchema = Joi.object({
  userName: Joi.string().min(4).max(50).required().label("User Name"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("email"),
  password: Joi.string().min(8).max(255).required().label("Password"),
  confirmPassword: Joi.string()
    .min(8)
    .max(255)
    .required()
    .label("Confirm Password"),
  avatar: Joi.string().required().label("Avatar"),
});

function validateSignUp(signUpCreds) {
  return signUpSchema.validate(signUpCreds, { abortEarly: true });
}

export default validateSignUp;
