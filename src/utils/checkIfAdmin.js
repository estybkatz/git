const checkIfAdmin = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  token = JSON.parse(token);
  return token.btnBusinessClient;
};

export default checkIfAdmin;
