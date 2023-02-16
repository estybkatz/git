import validate from "./validate.js";
const validateNumber = (value) => {
  const reg = new RegExp("[0-9\\/ ]");
  return validate(reg, value, 2, 255).map((err) => `It is ${err}`);
};

export default validateNumber;
