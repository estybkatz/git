import validate from "./validate.js";
const validatePhone = (value) => {
  const reg = new RegExp(
    "^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
   
  );
  return validate(reg, value, 7, 15).map((err) => `phone is ${err}`);
};

export default validatePhone;
//^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$
//^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$
