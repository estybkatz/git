import PAGES from "../models/pageModel.js";
import handlePageChange from "./routes/router.js";

const clickHere = document.getElementById("click404");

clickHere.addEventListener("click", () => {
  handlePageChange(PAGES.HOME);
});
