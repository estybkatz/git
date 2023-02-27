import PAGES from "../models/pageModel.js";
import handlePageChange from "../routes/router.js";

const clickHere = document.getElementById("click404");

clickHere.addEventListener("click", (ev) => {
  console.log("print");
  handlePageChange(PAGES.HOME);
});
