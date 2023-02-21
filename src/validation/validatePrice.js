import validate from "./validate.js";
const validatePrice = (value) => {
  const reg = new RegExp("(d+.*d{1,2})");
  return validate(reg, value, 5, 255).map((err) => `price is ${err}`);
};

export default validatePrice;
