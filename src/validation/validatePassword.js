import validate from "./validate.js";
/* this function validates that the user entered a valid password, containing uppercase and lowercase letters, digits and a special sign */
const validatePassword = (value) => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$",
    "g"
  );
  return validate(reg, value, 5, 255).map((err) => `password is ${err}`);
};

export default validatePassword;
