
/* this function validates the user entered a valid name */
const validateName = (value) => { 
  const regex = /^(?:[A-Z][a-z0-9]*)(?:\s+[A-Z][a-z0-9]*)*\s*$/;
    return regex.test(value);
};
export default validateName;
