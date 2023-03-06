import checkIfAdmin from "../utils/checkIfAdmin.js";
//import checkIfBusiness from "../utils/checkIfAdmin.js";
import checkIfConnected from "../utils/checkIfConnected.js";
import getNextId from "../utils/getNextId.js";

let nextId;
let isAdmin;
let isConnected;
let showPopup;

let navAddNewImageLink;
const navBeforeLogin = document.getElementById("navBeforeLogin");
const navAfterLogin = document.getElementById("navAfterLogin");

const initializeNavbar = (showPopupFromApp) => {
  nextId = getNextId();
  isAdmin = checkIfAdmin();
  isConnected = checkIfConnected();
  if (isAdmin) {
    navBeforeLogin.classList.add("d-none");
    navAfterLogin.classList.remove("d-none");
  }
  showPopup = showPopupFromApp;
  /* nav */
  navAddNewImageLink = document.getElementById("nav-add-new-image-link");
  if (!isAdmin) {
    navAddNewImageLink.classList.add("d-none");
  }
  navAddNewImageLink.addEventListener("click", () => {
    showPopup();
  });
};

export default initializeNavbar;
