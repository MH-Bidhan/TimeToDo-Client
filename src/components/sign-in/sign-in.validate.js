import Joi from "joi";

const signInSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Email"),
  password: Joi.string().min(8).max(255).required().label("Password"),
});

const validateSignIn = (signInCreds) => {
  const result = signInSchema.validate(signInCreds);

  return result;
};

export default validateSignIn;
