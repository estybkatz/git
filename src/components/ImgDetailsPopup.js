import Property from "../models/Property.js";

//editPropertiesPopupUrl;

let selectedProperty;
const imgDetailsPopupImgDisplay = document.getElementById(
  "imgDetailsPopupImgDisplay"
);

// const editPropertiesPopupAlt = document.getElementById(
//   "editPropertiesPopupAlt"
// );
// const editPropertiesPopupTitle = document.getElementById(
//   "editPropertiesPopupTitle"
// );
// const editPropertiesPopupCredit = document.getElementById(
//   "editPropertiesPopupCredit"
// );
// const editPropertiesPopupPrice = document.getElementById(
//   "editPropertiesPopupPrice"
// );
// const editPropertiesPopupCreatedAT = document.getElementById(
//   "editPropertiesPopupCreatedAT"
// );
// const editPropertiesPopupDescription = document.getElementById(
//   "editPropertiesPopupDescription"
// );
// const editPropertiesPopupSubTitle = document.getElementById(
//   "editPropertiesPopupSubTitle"
// );
// const editPropertiesPopupImg = document.getElementById(
//   "editPropertiesPopupImg"
// );

const imgDetailsPopup = document.getElementById("imgDetailsPopup");

const initDetailsPopup = (selectedPropertyFromHomePage) => {
  /*
    set data from selectedProperty to html
    */
  if (selectedPropertyFromHomePage) {
    selectedProperty = selectedPropertyFromHomePage;
  } else {
    return;
  }
  console.log(selectedProperty.imgUrl);
  imgDetailsPopupImgDisplay.src = selectedProperty.imgUrl;

  // editPropertiesPopupAlt.value = selectedProperty.title;
  // editPropertiesPopupCredit.value = selectedProperty.credit;
  // editPropertiesPopupPrice.value = selectedProperty.price;
  // editPropertiesPopupCreatedAT.value = selectedProperty.createdAT;
  // editPropertiesPopupDescription.value = selectedProperty.description;
  // editPropertiesPopupTitle.value = selectedProperty.title;
  // editPropertiesPopupSubTitle.value = selectedProperty.subtitle;
  // editPropertiesPopupImg.value = selectedProperty.img;

  showDetailsPopup();
};

const showDetailsPopup = () => {
  imgDetailsPopup.classList.remove("d-none");
  imgDetailsPopup.classList.add("d-block");
};

const hidDetailsPopup = () => {
  imgDetailsPopup.classList.add("d-none");
};

window.addEventListener("load", () => {
  imgDetailsPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "imgDetailsPopup"
      // ev.target.id !== "editPropertiesPopupCancelBtn" &&
      // ev.target.id !== "editPropertiesPopupCancelBtnIcon"
    ) {
      return;
    }
    hidDetailsPopup();
  });
});

export { initDetailsPopup, showDetailsPopup, hidDetailsPopup };
