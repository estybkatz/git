import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import PAGES from "../models/pageModel.js";
import handlePageChange from "../routes/router.js";
/* import the variables of input from the document */
const loginEmailInput = document.getElementById("login-input-email");
const loginPasswordInput = document.getElementById("login-input-password");
const loginBtn = document.getElementById("login-btn");
const clickHereLogin = document.getElementById("click-here-login");
/*set by default that the password and email are correct inputs, does not check if they exists in the storage, that will be cheked in function loginPasswordInput.addEventListener("input", () =>   */
let passwordOk = false;
let emailOk = false;
clickHereLogin.addEventListener("click", () => {
  handlePageChange(PAGES.SIGNUP);
});
/* check if the mail is valid */
loginEmailInput.addEventListener("input", () => {
  let validMail = validateEmail(loginEmailInput.value);
  if (validMail.length === 0) {
    //the text is ok
    loginEmailInput.classList.remove("is-invalid");
    document.getElementById("login-alert-email").classList.add("d-none");
    emailOk=true;
    //emailOk = true;
  } else {
    //the text is not ok
    loginEmailInput.classList.add("is-invalid");
    document.getElementById("login-alert-email").classList.remove("d-none");
    emailOk=false;
    // document.getElementById("login-alert-email").innerHTML +=
    // errorArr.join("<br>");
    //emailOk = false;
  }
});
/*check if the password is valid */
loginPasswordInput.addEventListener("input", () => {
  let validPassword = validatePassword(loginPasswordInput.value);
  if (validPassword.length === 0) {
    //the text is ok
    loginPasswordInput.classList.remove("is-invalid");
    document.getElementById("login-alert-password").classList.add("d-none");
    passwordOk = true;
  } else {
    passwordOk=false;
    //the text is not ok
    loginPasswordInput.classList.add("is-invalid");
    document.getElementById("login-alert-password").classList.remove("d-none");
  }
  //checkIfCanEnableBtn();
});
/*this function chcecks if the user name and password exists in the storage, and if they exist log them in  */
loginBtn.addEventListener("click", () => {
  if (validateEmail(loginEmailInput.value).length) {
    return;
  }
  if (validatePassword(loginPasswordInput.value).length) {
    return;
  }
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    //users === null
    return;
  }
  let user = users.find(
    (item) =>
      item.email === loginEmailInput.value &&
      item.password === loginPasswordInput.value
  );
  if (!user) {
    return;
  }
  //remember who connected
  localStorage.setItem(
    "token",
    JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  );
  // handlePageChange(PAGES.HOME);
  location.reload(); // refresh the page
});
