/* this function validates that the user entered a valid number */
import validate from "./validate.js";
const validateNumber = (num) => {  
  var regex = /^\d+$/;
  return regex.test(num);
};

export default validateNumber;
 