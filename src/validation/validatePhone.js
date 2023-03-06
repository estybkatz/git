import validate from "./validate.js";
const validatePhone = (value) => {
  const reg = new RegExp(`^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$`, "m")
;
  return validate(reg, value, 7, 15).map((err) => `phone is ${err}`);
};

export default validatePhone;
//^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$
//^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$
//^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$