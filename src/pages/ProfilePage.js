import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import validateName from "../validation/validateName.js";
import showToast from "../utils/Toast.js";
import validateNumber from "../validation/validateNumber.js";
import validateString from "../validation/validateString.js";

const inputName = document.getElementById("profile-input-name");
const inputLastName = document.getElementById("profile-last-name");
const inputEmail = document.getElementById("profile-input-email");
const inputPassword = document.getElementById("profile-input-password1");
const inputRePassword = document.getElementById("profile-input-password2");
const inputStrings = document.getElementsByClassName("inp-string");
const inputPhoneNumber = document.getElementById("profile-input-phone");
const btnProfile = document.querySelector("#profile-btn");
const inputState = document.getElementById("profile-input-state");
const inputCountry = document.getElementById("profile-input-country");
const inputCity = document.getElementById("profile-input-city");
const inputStreet = document.getElementById("profile-input-street");
const inputHouseNumber = document.getElementById("profile-input-house-number");
const inputZipCode = document.getElementById("signup-input-zip");
const isAdmin = document.getElementById("business-client");
const cancelBtn = document.getElementById("profileCancelBtn");

let nameOk = false;
let emailOk = false;
let passwordOk = false;

window.addEventListener("load", () => {
  let users = localStorage.getItem("users");
  let token = localStorage.getItem("token");
  if (users && token) {
    //we have users
    users = JSON.parse(users); // convert from string to array of objects
    token = JSON.parse(token);
    let user = users.find((item) => item.id === token.id);
    if (user) {
      inputName.value = user.name;
      inputEmail.value = user.email;
      inputPassword.value = user.password;
    }
  }

  //when page loaded
  if (inputName.value !== "") {
    checkNameInput();
  }
  if (inputEmail.value !== "") {
    checkEmailInput();
  }
  if (inputPassword.value !== "") {
    checkPasswordInput();
  }
});

inputName.addEventListener("input", () => {
  checkNameInput();
});

inputEmail.addEventListener("input", () => {
  checkEmailInput();
});

inputPassword.addEventListener("input", () => {
  checkPasswordInput();
});

const checkNameInput = () => {
  let errorArr = validateName(inputName.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputName.classList.remove("is-invalid");
    document.getElementById("profile-alert-name").classList.add("d-none");
    nameOk = true;
  } else {
    //the text is not ok
    inputName.classList.add("is-invalid");
    document.getElementById("profile-alert-name").classList.remove("d-none");
    document.getElementById("profile-alert-name").innerHTML =
      errorArr.join("<br>");
    nameOk = false;
  }
  checkIfCanEnableBtn();
};

const checkEmailInput = () => {
  let errorArr = validateEmail(inputEmail.value);
  if (errorArr.length === 0) {
    //the text is ok
    inputEmail.classList.remove("is-invalid");
    document.getElementById("profile-alert-email").classList.add("d-none");
    emailOk = true;
  } else {
    //the text is not ok
    inputEmail.classList.add("is-invalid");
    document.getElementById("profile-alert-email").classList.remove("d-none");
    document.getElementById("profile-alert-email").innerHTML =
      errorArr.join("<br>");
    emailOk = false;
  }
  checkIfCanEnableBtn();
};

const checkPasswordInput = () => {
  let errorArr = validatePassword(inputPassword.value);
  if (errorArr.length === 0) {
    //the text is ok
    inputPassword.classList.remove("is-invalid");
    document.getElementById("profile-alert-password1").classList.add("d-none");
    passwordOk = true;
  } else {
    //the text is not ok
    inputPassword.classList.add("is-invalid");
    document
      .getElementById("profile-alert-password1")
      .classList.remove("d-none");
    document.getElementById("profile-alert-password1").innerHTML =
      errorArr.join("<br>");
    passwordOk = false;
  }
  checkIfCanEnableBtn();
};

const checkIfCanEnableBtn = () =>
  (btnProfile.disabled = !(nameOk && emailOk && passwordOk));

btnProfile.addEventListener("click", () => {
  if (!(nameOk && emailOk && passwordOk)) {
    //if someone changed the html from dev tools
    return;
  }
  let users = localStorage.getItem("users");
  let token = localStorage.getItem("token");
  if (users && token) {
    //we have users
    users = JSON.parse(users); // convert from string to array of objects
    token = JSON.parse(token);
    let userEmail = users.find((item) => item.email === inputEmail.value);
    let user = users.find((item) => item.id === token.id);
    if (userEmail && user.id !== userEmail.id) {
      //the email already token
      showToast("The email already taken", false);
      return;
    }
    if (user) {
      user.name = token.name = inputName.value;
      user.email = token.email = inputEmail.value;
      user.password = inputPassword.value;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("token", JSON.stringify(token));
      showToast("Saved");
    }
  }
  setTimeout(() => {
    location.reload();
  }, 3000);
});
