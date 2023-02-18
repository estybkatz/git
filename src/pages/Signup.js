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
const inputStrings = document.getElementsByClassName("inp-string");
const inputPhoneNumber = document.getElementById("input-phone");
const btnRegister = document.querySelector("#signup-btn-signup");

/*
Initializing the boolean variables, which are required for the successful input.
The fields which must be filled are set in default as false, and the fields which can stay empty are set as true.
*/
let nameOk = false;
let lastNameOk = false;
let emailOk = false;
let passwordOk = false;
let rePasswordOk = false;
let chooseFieldOK = true;
let phoneOk = true;
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
  if (inputStrings.length !== 0) {
    checkStringInput(inputStrings);
  }
  if (inputPhoneNumber.value !== "") {
    checkPhoneNumber();
  }
  /* 
    if (inputStrings[i].value !== "") {
    checkStringInput();
  } */
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
inputPhoneNumber.addEventListener("input", () => {
  checkPhoneNumber();
});
/* 
function checkStrings(elements) {
  for (var i = 0; i < elements.length; i++) {
    console.log("in");
    console.log("element", i, elements[i]);
    elements[i].addEventListener("input", () => {
      checkStringInput();
    });
  } 
}*/
/* 
inputStrings.addEventListener("input", () => {
  for (var i = 0; i < inputStrings.length; i++) {
    alert("in");
    alert(inputStrings[i]);
    inputStrings[i].addEventListener("input", () => {
      checkStringInput();
    });
  }
}); */
for (var i = 0; i < inputStrings.length; i++) {
  inputStrings[i].addEventListener("input", () => {
    checkStringInput();
  });
}

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
  let errorInputRules = false;
  console.log("inside string");
  for (i = 0; i < inputStrings.length; i++) {
    console.log("place", i, "string - ", inputStrings[i].value);
    let errorArr = validateString(inputStrings[i].value);
    //   console.log(reg.test(inputName.value));
    if (errorArr.length === 0 || inputStrings[i].value === "") {
      //the text is ok
      inputStrings[i].classList.remove("is-invalid");
      /*  document.getElementsByClassName("sign-alert-str").classList.add("d-none"); */
      //choosefieldOK = true;
    } else {
      errorInputRules = true;
      //the text is not ok
      inputStrings[i].classList.add("is-invalid");
      /* 
      document
        .getElementsByClassName("sign-alert-str")
        .classList.remove("d-none"); */
      // document.querySelector(".sign-alert-str").innerHTML +=
      // errorArr.join("<br>");
      //lastNameOk = false;
    }
  }
  if (errorInputRules === true) {
    chooseFieldOK = false;
    document.getElementById("input-rules").classList.remove("d-none");
    document.getElementById("input-rules").classList.add("d-block");
  } else {
    chooseFieldOK = true;
    document.getElementById("input-rules").classList.remove("d-block");

    document.getElementById("input-rules").classList.add("d-none");
  }
  checkIfCanEnableBtn();
};
const checkPhoneNumber = () => {
  let errorArr = validateNumber(inputPhoneNumber.value);
  if (errorArr.length === 0 || inputPhoneNumber === "") {
    inputPhoneNumber.classList.remove("is-invalid");
    document.getElementById("signup-alert-phone").classList.add("d-none");
    phoneOk = true;
  } else {
    //the text is not ok
    inputPhoneNumber.classList.add("is-invalid");
    document.getElementById("signup-alert-phone").classList.remove("d-none");
    // document.getElementById("signup-alert-email").innerHTML +=
    // errorArr.join("<br>");
    phoneOk = false;
  }
  checkIfCanEnableBtn();
};
const checkIfCanEnableBtn = () =>
  (btnRegister.disabled = !(
    nameOk &&
    emailOk &&
    passwordOk &&
    lastNameOk &&
    rePasswordOk &&
    phoneOk &&
    chooseFieldOK
  ));

btnRegister.addEventListener("click", () => {
  if (
    !(
      nameOk &&
      emailOk &&
      passwordOk &&
      lastNameOk &&
      rePasswordOk &&
      phoneOk &&
      chooseFieldOK
    )
  ) {
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
