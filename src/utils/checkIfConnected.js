/* this function checks if there is a user logged in now */
const checkIfConnected = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  token = JSON.parse(token);
  return !!token; //convert to boolean
};

export default checkIfConnected;
