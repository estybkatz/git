
/* this function validates the user entered a valid name */
const validateName = (value) => { 
  const regex = /^\s*(?:[A-Z0-9][a-zA-Z0-9]*)(?:\s+[A-Z0-9][a-zA-Z0-9]*)*\s*$/;    return regex.test(value);
};
export default validateName;
