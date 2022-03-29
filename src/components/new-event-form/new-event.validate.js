import Joi from "joi";

const eventSchema = Joi.object({
  name: Joi.string().min(3).max(255).required().label("Name"),
  description: Joi.string().min(10).max(1500).required().label("Description"),
  date: Joi.string().required().label("Date"),
  time: Joi.string().required().label("Time"),
});

function validateEvent(event) {
  return eventSchema.validate(event);
}

export default validateEvent;
