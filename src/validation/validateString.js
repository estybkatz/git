import validate from "./validate.js";
const validateString = (value) => {
  const reg = new RegExp("^[a-zA-Z0-9\\s]*$");
  return validate(reg, value, 2, 255).map((err) => `It is ${err}`);
};

export default validateString;
//[A-Za-z0-9\\s]{0,}$", "g";
