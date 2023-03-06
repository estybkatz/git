import Property from "../models/Property.js";

//editPropertiesPopupUrl;
/*
Here we set all the variables required for the Image Details popup.
We Take all the required variables from the html using the getELementById function.
selectedProperty is a variable for the selected picture.
*/
let selectedProperty;
const imgDetailsPopupImgDisplay = document.getElementById(
  "imgDetailsPopupImgDisplay"
);

// const editPropertiesPopupAlt = document.getElementById(
//   "editPropertiesPopupAlt"
// );
const imgDetailsPopupTitle = document.getElementById("imgDetailsPopupTitle");
// const editPropertiesPopupCredit = document.getElementById(
//   "editPropertiesPopupCredit"
// );
// const editPropertiesPopupPrice = document.getElementById(
//   "editPropertiesPopupPrice"
// );
const imgDetailsPopupCreatedAT = document.getElementById(
  "imgDetailsPopupCreatedAT"
);
const imgDetailsPopupDescription = document.getElementById(
  "imgDetailsPopupDescription"
);
const imgDetailsPopupSubTitle = document.getElementById(
  "imgDetailsPopupSubTitle"
);
// const editPropertiesPopupImg = document.getElementById(
//   "editPropertiesPopupImg"
// );
const imgDetailsPopupID = document.getElementById("imgDetailsPopupID");

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

  imgDetailsPopupImgDisplay.src = selectedProperty.imgUrl;
  imgDetailsPopupTitle.innerHTML = selectedProperty.title;
  imgDetailsPopupCreatedAT.innerHTML = selectedProperty.createdAT;
  imgDetailsPopupDescription.innerHTML = selectedProperty.description;
  imgDetailsPopupSubTitle.innerHTML = selectedProperty.subtitle;
  imgDetailsPopupID.innerHTML = selectedProperty.id;

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
