import PAGES from "../models/pageModel.js";
import validateNumber from "../validation/validateNumber.js";
import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import validateName from "../validation/validateName.js";
import showToast from "../utils/Toast.js";  
import validateString from "../validation/validateString.js";
import handlePageChange from "../routes/router.js";
/* variables of user. */
const inputName = document.getElementById("profile-input-name");
const inputLastName = document.getElementById("profile-input-last-name");
const inputEmail = document.getElementById("profile-input-email");
const inputPassword = document.getElementById("profile-input-password1");
const inputRePassword = document.getElementById("profile-input-password2");
const inputStrings = document.getElementsByClassName("profile-inp-string");
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
/* set by default mandatory fields as false, and non mandatory as true
 */
let nameOk = false;
let lastNameOk = false;
let emailOk = false;
let passwordOk = false;
let rePasswordOk = false;
let chooseFieldOK = true;
let phoneOk = true;
let zipCodeOk=true;
let checkPasswordSame = false;
let houseNumOk=true;


/* sets a user if exists, and if not checks the input inserted to the function according to user input to the page*/
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
  if (inputZipCode.value !== "") {
    checkZipCode();
  }
  if (inputEmail.value !== "") {
    checkEmailInput();
  }
  if (inputHouseNumber.value!==""){
    checkHouseNumber();
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
/* checks input of users in fields */

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

inputHouseNumber.addEventListener("input",()=>{checkHouseNumber();});
inputZipCode.addEventListener("input",()=>{checkZipCode();});
for (var i = 0; i < inputStrings.length; i++) {
  inputStrings[i].addEventListener("input", () => {
    checkStringInput();
  });
}
/*this function checks if the name is valid and sets nameOk accordingly. */
const checkNameInput = () => {
  let validName = validateName(inputName.value);
  if (validName=== true) {
    //the text is ok
    inputName.classList.remove("is-invalid");
    document.getElementById("profile-alert-name").classList.add("d-none");
    nameOk = true;
  } else {
    //the text is not ok
    inputName.classList.add("is-invalid");
    document.getElementById("profile-alert-name").classList.remove("d-none");
    nameOk = false;
  }
  checkIfCanEnableBtn();
};
/*this function checks if the last name is valid and sets lastNameOk accordingly. */
const checkLastNameInput = () => {
  let validLastName = validateName(inputLastName.value);
  if (validLastName === true ) {
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
    lastNameOk = false;
  }
  checkIfCanEnableBtn();
};
/*this function checks if the mail is valid and sets mailOk accordingly */
const checkEmailInput = () => {
  let validMail = validateEmail(inputEmail.value);
  if (validMail.length === 0) {
    //the text is ok
    inputEmail.classList.remove("is-invalid");
    document.getElementById("profile-alert-email").classList.add("d-none");
    emailOk = true;
  } else {
    //the text is not ok
    inputEmail.classList.add("is-invalid");
    document.getElementById("profile-alert-email").classList.remove("d-none");
    emailOk = false;
  }
  checkIfCanEnableBtn();
};

/*this function checks if the  Password is valid and sets PasswordOk accordingly. */
const checkPasswordInput = () => {
  let validPass = validatePassword(inputPassword.value);
  if (validPass.length === 0) {
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
    passwordOk = false;
  }
  checkIfCanEnableBtn();
};
/*this function checks the second time the user entered the password if it's valid and sets PasswordOk accordingly. */
const checkRePasswordInput = () => {
  let validRePass = validatePassword(inputRePassword.value);
  if (validRePass.length === 0) {
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
    rePasswordOk = false;
  }
  checkIfCanEnableBtn();
};
/* check if the passwords entered are the same. else alerts the user and sets checkPasswordSame to false. */
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
    document
      .getElementById("profile-none-same-password")
      .classList.add("d-block");
    checkPasswordSame = false;
  }
};

/*this function checks other string names and sets chooseFieldOk accordingly. */
const checkStringInput = () => {
  let errorInputRules = false;

  for (i = 0; i < inputStrings.length; i++) {
    let errorArr = validateString(inputStrings[i].value);
    if (errorArr.length === 0 || inputStrings[i].value === "") {
      //the text is ok
      inputStrings[i].classList.remove("is-invalid");
    } else {
      errorInputRules = true;
      //the text is not ok
      inputStrings[i].classList.add("is-invalid");
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
/*this function checks the phoneNumber and sets phoneOk accordingly. */
const checkPhoneNumber = () => {
  let validPhone = validatePhone(inputPhoneNumber.value);
  if (validPhone.length === 0 || inputPhoneNumber.value === "") {
    inputPhoneNumber.classList.remove("is-invalid");
    document.getElementById("profile-alert-phone").classList.add("d-none");
    phoneOk = true;
  } else {
    //the text is not ok
    inputPhoneNumber.classList.add("is-invalid");
    document.getElementById("profile-alert-phone").classList.remove("d-none");

    phoneOk = false;
  }
  checkIfCanEnableBtn();
};

/*this function checks the houseNumber and sets HouseNumOk accordingly. */
const checkHouseNumber = () => {
  let validHouse = validateNumber(inputHouseNumber.value);
  if (validHouse === true || inputHouseNumber.value === "") {
    inputHouseNumber.classList.remove("is-invalid");
    if (zipCodeOk===true)
    document.getElementById("profile-rules-number-alert").classList.add("d-none");
    houseNumOk = true;
  } else {
    //the text is not ok
    inputHouseNumber.classList.add("is-invalid");
    document.getElementById("profile-rules-number-alert").classList.remove("d-none");

    houseNumOk = false;
  }
  checkIfCanEnableBtn();
};
/*this function checks the Zip Number and sets zipCodeOk accordingly. */
const checkZipCode = () => {
  let validZip = validateNumber(inputZipCode.value);
  if (validZip === true || inputZipCode.value === "") {
    inputZipCode.classList.remove("is-invalid");
    if (houseNumOk===true)
    document.getElementById("profile-rules-number-alert").classList.add("d-none");
    zipCodeOk = true;
  } else {
    //the text is not ok
    inputZipCode.classList.add("is-invalid");
    document.getElementById("profile-rules-number-alert").classList.remove("d-none");

    zipCodeOk = false;
  }
  checkIfCanEnableBtn();
};

/*this function if all fields are correct, and activates the button accordingly.. */
const checkIfCanEnableBtn = () =>
  (btnProfile.disabled = !(
    nameOk &&
    emailOk &&
    passwordOk &&
    lastNameOk &&
    rePasswordOk &&
    chooseFieldOK &&
    phoneOk &&
    houseNumOk&&
    checkPasswordSame&&
    zipCodeOk
  ));
  
/*this function is the click of the button which  saves the changes of the user */
btnProfile.addEventListener("click", () => {
  if (
    !( nameOk &&
    emailOk &&
    passwordOk &&
    lastNameOk &&
    rePasswordOk &&
    chooseFieldOK &&
    phoneOk &&
    houseNumOk&&
    checkPasswordSame&&
    zipCodeOk
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
      showToast("The email already taken", false,2);
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

cancelBtn.addEventListener("click", () => {
  handlePageChange(PAGES.HOME);
});
