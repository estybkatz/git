import validate from "./validate.js";
/* const validatePrice = (value) => {
  const reg = new RegExp("(d+.*d{1,2})");
  return validate(reg, value, 5, 255).map((err) => `price is ${err}`);
}; */
function validatePrice(price) {
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(price);
}

export default validatePrice;

//(d+.*d{1,2})
//^$?d+(,d{3})*(.d{2})?$
