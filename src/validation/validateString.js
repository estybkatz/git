import validate from "./validate.js";
/* this function validates that the string contains only letters and numbers */
const validateString = (value) => {
  const reg = new RegExp("^[a-zA-Z0-9\\s]*$");
  return validate(reg, value, 1, 255).map((err) => `It is ${err}`);
};

export default validateString;