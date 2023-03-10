import PAGES from "./models/pageModel.js";
import handlePageChange from "./routes/router.js";
import "./initialData/initialData.js";
import "./pages/Signup.js";
import "./pages/Login.js";
import "./pages/ProfilePage.js";
import { showNewPopup } from "./pages/Homepage.js";
import initializeNavbar from "./components/Navbar.js";
import checkIfConnected from "./utils/checkIfConnected.js";
import "./pages/Page404.js";
/*import the navbar buttons */ 
const navHomeLink = document.getElementById("nav-home-link");
const navAboutusLink = document.getElementById("nav-aboutus-link");
const navSignupPageLink = document.getElementById("nav-signup-page");
const navLoginPageLink = document.getElementById("nav-login-page");
const navEditProfilePage = document.getElementById("nav-edit-profile-page");
const navLogout = document.getElementById("nav-logout");
//open the navBar on load
window.addEventListener("load", () => {
  initializeNavbar(showNewPopup);
  if (checkIfConnected()) {
    let user = localStorage.getItem("token");
    user = JSON.parse(user);
    navEditProfilePage.innerText = user.name;
  }
});
//the clicks of the navbar
navHomeLink.addEventListener("click", function () {
  handlePageChange(PAGES.HOME);
});
navAboutusLink.addEventListener("click", function () {
  handlePageChange(PAGES.ABOUT);
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
