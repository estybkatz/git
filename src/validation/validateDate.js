import validate from "./validate.js";
const validateDate = (value) => {
  const reg = new RegExp(
    "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
  );
  return validate(reg, value, 5, 255).map((err) => `date is ${err}`);
};

export default validateDate;
