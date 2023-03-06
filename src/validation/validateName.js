import validate from "./validate.js";
/* this function validates the user entered a valid name */
const validateName = (value) => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  return validate(reg, value, 2, 255).map((err) => `name is ${err}`);
};

export default validateName;
