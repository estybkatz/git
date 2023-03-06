import validate from "./validate.js";/* 
const validateDate = (value) => {
  const reg = new RegExp("^d{4}-d{2}-d{2}$");
  return validate(reg, value, 5, 255).map((err) => `date is ${err}`);
}; */
const validateDate=(dateString)=> {
  const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  return regex.test(dateString);
}


export default validateDate;

//^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$

//^$?d+(,d{3})*(.d{2})?$
