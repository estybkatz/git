import PAGES from "./models/pageModel.js";
import handlePageChange from "./routes/router.js";
import "./initialData/initialData.js";
import "./pages/Signup.js";
import "./pages/Login.js";
// import "./pages/LoginPage.js";
// import "./pages/ProfilePage.js";
import { showNewPopup } from "./pages/Homepage.js";
// import initializeNavbar from "./components/Navbar.js";
// import checkIfConnected from "./utils/checkIfConnected.js";

const navHomeLink = document.getElementById("nav-home-link");
const navAboutusLink = document.getElementById("nav-aboutus-link");
const navAddpicLink = document.getElementById("nav-addpic-link");
const navSignupPageLink = document.getElementById("nav-signup-page");
const navLoginPageLink = document.getElementById("nav-login-page");
const navEditProfilePage = document.getElementById("nav-edit-profile-page");
const navLogout = document.getElementById("nav-logout");

// window.addEventListener("load", () => {
//   initializeNavbar(showNewPopup);
//   if (checkIfConnected()) {
//     let user = localStorage.getItem("token");
//     user = JSON.parse(user);
//     navEditProfilePage.innerText = user.name;
//   }
// });

navHomeLink.addEventListener("click", function () {
  handlePageChange(PAGES.HOME);
});
navAboutusLink.addEventListener("click", function () {
  handlePageChange(PAGES.ABOUT);
});
navAddpicLink.addEventListener("click", function () {
  handlePageChange(PAGES.ADDPIC);
});
navSignupPageLink.addEventListener("click", function () {
  handlePageChange(PAGES.SIGNUP);
});
navLoginPageLink.addEventListener("click", function () {
  handlePageChange(PAGES.LOGIN);
});
navEditProfilePage.addEventListener("click", () => {
  handlePageChange(PAGES.PROFILE);
});
navLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
  location.reload();
});
