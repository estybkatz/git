import PAGES from "../models/pageModel.js";
import handlePageChange from "../routes/router.js";
import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import validateName from "../validation/validateName.js";
import validateNumber from "../validation/validateNumber.js";
import validateString from "../validation/validateString.js";
import User from "../models/User.js";
//import showToast from "../utils/Toast.js";

const inputName = document.getElementById("signup-input-name");
const inputLastName = document.getElementById("input-last-name");
const inputEmail = document.getElementById("signup-input-email");
const inputPassword = document.getElementById("signup-input-password1");
const inputRePassword = document.getElementById("signup-input-password2");
const inputStrings = document.querySelector(".inp-string");
const inputNanbers = document.querySelector(".number");
const btnRegister = document.querySelector("#signup-btn-signup");

let nameOk = false;
let lastNameOk = false;
let emailOk = false;
let passwordOk = false;
let rePasswordOk = false;
let choosefieldOK = false;

window.addEventListener("load", () => {
  //when page loaded
  if (inputName.value !== "") {
    checkNameInput();
  }
  if (inputLastName.value !== "") {
    checklastNameInput();
  }
  if (inputEmail.value !== "") {
    checkEmailInput();
  }
  if (inputPassword.value !== "") {
    checkPasswordInput();
  }
  if (inputRePassword.value !== "") {
    checkRePasswordInput();
  }
  if (inputStrings.value !== "") {
    checkStringInput();
  }
});

inputName.addEventListener("input", () => {
  checkNameInput();
});

inputLastName.addEventListener("input", () => {
  checkLastNameInput();
});

inputEmail.addEventListener("input", () => {
  checkEmailInput();
});
inputPassword.addEventListener("input", () => {
  checkPasswordInput();
});

inputRePassword.addEventListener("input", () => {
  checkRePasswordInput();
});
inputStrings.addEventListener("input", () => {
  checkStringInput();
});

const checkNameInput = () => {
  let errorArr = validateName(inputName.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputName.classList.remove("is-invalid");
    document.getElementById("signup-alert-name").classList.add("d-none");
    nameOk = true;
  } else {
    //the text is not ok
    inputName.classList.add("is-invalid");
    document.getElementById("signup-alert-name").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    nameOk = false;
  }
  checkIfCanEnableBtn();
};

const checkLastNameInput = () => {
  let errorArr = validateName(inputLastName.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputLastName.classList.remove("is-invalid");
    document.getElementById("signup-alert-last-name").classList.add("d-none");
    lastNameOk = true;
  } else {
    //the text is not ok
    inputLastName.classList.add("is-invalid");
    document
      .getElementById("signup-alert-last-name")
      .classList.remove("d-none");
    // document.getElementById("signup-alert-last-name").innerHTML +=
    // errorArr.join("<br>");
    lastNameOk = false;
  }
  checkIfCanEnableBtn();
};

const checkEmailInput = () => {
  let errorArr = validateEmail(inputEmail.value);
  if (errorArr.length === 0) {
    //the text is ok
    inputEmail.classList.remove("is-invalid");
    document.getElementById("signup-alert-email").classList.add("d-none");
    emailOk = true;
  } else {
    //the text is not ok
    inputEmail.classList.add("is-invalid");
    document.getElementById("signup-alert-email").classList.remove("d-none");
    // document.getElementById("signup-alert-email").innerHTML +=
    // errorArr.join("<br>");
    emailOk = false;
  }
  checkIfCanEnableBtn();
};

const checkPasswordInput = () => {
  let errorArr = validatePassword(inputPassword.value);
  if (errorArr.length === 0) {
    //the text is ok
    inputPassword.classList.remove("is-invalid");
    document.getElementById("signup-alert-password1").classList.add("d-none");
    passwordOk = true;
  } else {
    //the text is not ok
    inputPassword.classList.add("is-invalid");
    document
      .getElementById("signup-alert-password1")
      .classList.remove("d-none");
    //document.getElementById("signup-alert-password1").innerHTML +=
    // errorArr.join("<br>");
    passwordOk = false;
  }
  checkIfCanEnableBtn();
};

const checkRePasswordInput = () => {
  let errorArr = validatePassword(inputRePassword.value);
  if (errorArr.length === 0) {
    //the text is ok
    inputRePassword.classList.remove("is-invalid");
    document.getElementById("signup-alert-repassword2").classList.add("d-none");
    rePasswordOk = true;
  } else {
    //the text is not ok
    inputRePassword.classList.add("is-invalid");
    document
      .getElementById("signup-alert-repassword2")
      .classList.remove("d-none");
    //document.getElementById("signup-alert-repassword2").innerHTML +=
    //errorArr.join("<br>");
    rePasswordOk = false;
  }
  checkIfCanEnableBtn();
};

const checkStringInput = () => {
  let errorArr = validateString(inputStrings.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0 || inputStrings.value === "") {
    //the text is ok
    inputStrings.classList.remove("is-invalid");
    document.querySelector(".sign-alert-str").classList.add("d-none");
    //choosefieldOK = true;
  } else {
    //the text is not ok
    inputStrings.classList.add("is-invalid");
    document.querySelector(".sign-alert-str").classList.remove("d-none");
    // document.querySelector(".sign-alert-str").innerHTML +=
    // errorArr.join("<br>");
    //lastNameOk = false;
  }
  checkIfCanEnableBtn();
};

const checkIfCanEnableBtn = () =>
  (btnRegister.disabled = !(
    nameOk &&
    emailOk &&
    passwordOk &&
    lastNameOk &&
    rePasswordOk
  ));

btnRegister.addEventListener("click", () => {
  if (!(nameOk && emailOk && passwordOk && lastNameOk && rePasswordOk)) {
    //if someone changed the html from dev tools
    return;
  }
  let users = localStorage.getItem("users");
  let nextUserId = localStorage.getItem("nextUserId");
  nextUserId = +nextUserId;
  let newUser = new User(
    nextUserId++,
    inputName.value,
    inputEmail.value,
    inputPassword.value
  );
  localStorage.setItem("nextUserId", nextUserId + "");
  if (!users) {
    //the first user
    users = [newUser];
    // let user = new User(inputName.value, inputEmail.value, inputPassword.value);
    // users = [user]
    localStorage.setItem("users", JSON.stringify(users));
    /*
      JSON.stringify(users) - convert array of objects to string
      localStorage.setItem - store the json string to localStorage with 
        key users 
        and value users as json string
    */
  } else {
    //we have users
    users = JSON.parse(users); // convert from string to array of objects
    // console.log("users from localStorage", users);
    for (let user of users) {
      if (user.email === inputEmail.value) {
        //display msg - email already exists
        showToast("Email already exists", false);
        return;
      }
    }
    //user provided new email
    users = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(users));
  }
  handlePageChange(PAGES.LOGIN);
});
const checkIfPasswordIsSame = () => {
  return getElementById("inputPassword1") === getElementById("inputPassword2");
};
