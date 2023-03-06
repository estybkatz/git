/*this functions validates that the user entered a valid url */
const validateUrl = (value) => {
  const regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?$/;
  return regex.test(value);
}

export default validateUrl;
