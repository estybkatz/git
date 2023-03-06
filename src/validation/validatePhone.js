import validate from "./validate.js";
/* this function validates a phone number containing +972, and only one 0 and only digits and of length 7 atleast */
const validatePhone = (value) => {
  const reg = new RegExp(`^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$`, "m")
;
  return validate(reg, value, 7, 15).map((err) => `phone is ${err}`);
};

export default validatePhone;