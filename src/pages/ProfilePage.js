import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import validateName from "../validation/validateName.js";
import showToast from "../utils/Toast.js";
import validateNumber from "../validation/validateNumber.js";
import validateString from "../validation/validateString.js";

const inputName = document.getElementById("profile-input-name");
const inputLastName = document.getElementById("profile-input-last-name");
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
const inputZipCode = document.getElementById("profile-input-zip");
const isAdmin = document.getElementById("profile-business-client");
const cancelBtn = document.getElementById("profileCancelBtn");

let nameOk = false;
let lastNameOk = false;
let emailOk = false;
let passwordOk = false;
let rePasswordOk = false;
let chooseFieldOK = true;
let phoneOk = true;
let checkPasswordSame = false;

const checkIfPasswordIsSame = () => {
  if (inputPassword.value === inputRePassword.value) {
    checkPasswordSame = true;
    document
      .getElementById("profile-none-same-password")
      .classList.add("d-none");
    document
      .getElementById("profile-none-same-password")
      .classList.remove("d-block");
  } else {
    document
      .getElementById("profile-none-same-password")
      .classList.remove("d-none");
    // console.log("inside check");
    // console.log(inputPassword.value);
    // console.log("after first");
    // console.log(inputRePassword.value);
    document
      .getElementById("profile-none-same-password")
      .classList.add("d-block");
    checkPasswordSame = false;
  }
  console.log(checkPasswordSame);
};

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
      inputLastName.value = user.lastName;
      inputEmail.value = user.email;
      inputState.value = user.state;
      inputCountry.value = user.country;
      inputCity.value = user.city;
      inputStreet.value = user.street;
      inputHouseNumber.value = user.houseNumber;
      inputZipCode.value = user.zipCode;
      inputPhoneNumber.value = user.phone;
      inputRePassword.value = user.password;
      inputPassword.value = user.password;
      isAdmin.checked = user.isAdmin;
    }
  }

  //when page loaded
  if (inputName.value !== "") {
    checkNameInput();
  }
  if (inputLastName.value !== "") {
    checkLastNameInput();
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
  if (inputPassword.value !== "" && inputRePassword.value !== "") {
    checkIfPasswordIsSame();
  }
  if (inputStrings.length !== 0) {
    checkStringInput(inputStrings);
  }
  if (inputPhoneNumber.value !== "") {
    checkPhoneNumber();
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
  checkIfPasswordIsSame();
  checkPasswordInput();
});

inputRePassword.addEventListener("input", () => {
  checkIfPasswordIsSame();
  checkRePasswordInput();
});
inputPhoneNumber.addEventListener("input", () => {
  checkPhoneNumber();
});

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
    document.getElementById("profile-alert-name").classList.add("d-none");
    nameOk = true;
  } else {
    //the text is not ok
    inputName.classList.add("is-invalid");
    document.getElementById("profile-alert-name").classList.remove("d-none");
    // document.getElementById("profile-alert-name").innerHTML =
    //   errorArr.join("<br>");
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
    document.getElementById("profile-alert-last-name").classList.add("d-none");
    lastNameOk = true;
  } else {
    //the text is not ok
    inputLastName.classList.add("is-invalid");
    document
      .getElementById("profile-alert-last-name")
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
    document.getElementById("profile-alert-email").classList.add("d-none");
    emailOk = true;
  } else {
    //the text is not ok
    inputEmail.classList.add("is-invalid");
    document.getElementById("profile-alert-email").classList.remove("d-none");
    // document.getElementById("profile-alert-email").innerHTML =
    //   errorArr.join("<br>");
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
    // document.getElementById("profile-alert-password1").innerHTML =
    //   errorArr.join("<br>");
    passwordOk = false;
  }
  checkIfCanEnableBtn();
};
const checkRePasswordInput = () => {
  let errorArr = validatePassword(inputRePassword.value);
  if (errorArr.length === 0) {
    //the text is ok
    inputRePassword.classList.remove("is-invalid");
    document
      .getElementById("profile-alert-repassword2")
      .classList.add("d-none");
    rePasswordOk = true;
  } else {
    //the text is not ok
    inputRePassword.classList.add("is-invalid");
    document
      .getElementById("profile-alert-repassword2")
      .classList.remove("d-none");
    //document.getElementById("signup-alert-repassword2").innerHTML +=
    //errorArr.join("<br>");
    rePasswordOk = false;
  }
  checkIfCanEnableBtn();
};

const checkStringInput = () => {
  let errorInputRules = false;

  for (i = 0; i < inputStrings.length; i++) {
    /*  console.log("place", i, "string - ", inputStrings[i].value); */
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
    document.getElementById("profile-input-rules").classList.remove("d-none");
    document.getElementById("profile-input-rules").classList.add("d-block");
  } else {
    chooseFieldOK = true;
    document.getElementById("profile-input-rules").classList.remove("d-block");

    document.getElementById("profile-input-rules").classList.add("d-none");
  }
  checkIfCanEnableBtn();
};
const checkPhoneNumber = () => {
  let errorArr = validateNumber(inputPhoneNumber.value);
  if (errorArr.length === 0 || inputPhoneNumber === "") {
    inputPhoneNumber.classList.remove("is-invalid");
    document.getElementById("profile-alert-phone").classList.add("d-none");
    phoneOk = true;
  } else {
    //the text is not ok
    inputPhoneNumber.classList.add("is-invalid");
    document.getElementById("profile-alert-phone").classList.remove("d-none");
    // document.getElementById("signup-alert-email").innerHTML +=
    // errorArr.join("<br>");
    phoneOk = false;
  }
  checkIfCanEnableBtn();
};

const checkIfCanEnableBtn = () =>
  (btnProfile.disabled = !(
    nameOk &&
    emailOk &&
    passwordOk &&
    lastNameOk &&
    rePasswordOk &&
    chooseFieldOK &&
    phoneOk &&
    checkPasswordSame
  ));

btnProfile.addEventListener("click", () => {
  if (
    !(
      nameOk &&
      emailOk &&
      passwordOk &&
      lastNameOk &&
      rePasswordOk &&
      chooseFieldOK &&
      phoneOk &&
      checkPasswordSame
    )
  ) {
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
      user.lastName = inputLastName.value;
      user.state = inputState.value;
      user.country = inputCountry.value;
      user.city = inputCity.value;
      user.street = inputStreet.value;
      user.houseNumber = inputHouseNumber.value;
      user.zipCode = inputZipCode.value;
      user.email = token.email = inputEmail.value;
      user.phone = inputPhoneNumber.value;
      user.isAdmin = token.isAdmin = isAdmin.checked;
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
