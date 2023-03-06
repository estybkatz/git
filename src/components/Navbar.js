import checkIfAdmin from "../utils/checkIfAdmin.js";
//import checkIfBusiness from "../utils/checkIfAdmin.js";
import checkIfConnected from "../utils/checkIfConnected.js";
import getNextId from "../utils/getNextId.js";

/* isAdmin is a variable that checks if the user is admin, and if he is allows him to edit and delete pictures. showPopup is a variable that pops up the addNewimage for admin. isconnected is a boolean variable that shows a different navbar if the user is connected.*/
let nextId;
let isAdmin;
let showPopup;
let isConnected;

let navAddNewImageLink;
const navBeforeLogin = document.getElementById("navBeforeLogin");
const navAfterLogin = document.getElementById("navAfterLogin");
/* This function initializes some variables and checks if the user is connected and if they are an admin. If the user is connected, it hides the navigation links for before login and shows the links for after login.

Then it assigns the showPopupFromApp
 function to a variable showPopup
. 

Finally, it retrieves an HTML element with the ID nav-add-new-image-link
 and adds an event listener to it. If the user is not an admin, the link is hidden. When the link is clicked, the showPopup
 function is called. */

const initializeNavbar = (showPopupFromApp) => {
  nextId = getNextId();
  isAdmin = checkIfAdmin();
  isConnected = checkIfConnected();
  if (isConnected) {
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
