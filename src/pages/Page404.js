import PAGES from "../models/pageModel.js";
import handlePageChange from "../routes/router.js";

const clickHere = document.getElementById("click404");
/* go to home page from 404 */
clickHere.addEventListener("click", (ev) => {
  handlePageChange(PAGES.HOME);
});
