import Property from "../models/Property.js";
import getNextId from "../utils/getNextId.js";

let selectedProperty, editProperty;
const editPropertiesPopupImgDisplay = document.getElementById(
  "editPropertiesPopupImgDisplay"
);
const editPropertiesPopupUrl = document.getElementById(
  "editPropertiesPopupUrl"
);
const editPropertiesPopupAlt = document.getElementById(
  "editPropertiesPopupAlt"
);
const editPropertiesPopupCredit = document.getElementById(
  "editPropertiesPopupCredit"
);
const editPropertiesPopupPrice = document.getElementById(
  "editPropertiesPopupPrice"
);
const editPropertiesPopupImg = document.getElementById(
  "editPropertiesPopupImg"
);
const editPropertiesPopupCreatedAT = document.getElementById(
  "editPropertiesPopupCreatedAT"
);
const editPropertiesPopupDescription = document.getElementById(
  "editPropertiesPopupDescription"
);
const editPropertiesPopupTitle = document.getElementById(
  "editPropertiesPopupTitle"
);
const editPropertiesPopupSubTitle = document.getElementById(
  "editPropertiesPopupSubTitle"
);

const editPropertiesPopup = document.getElementById("editPropertiesPopup");

const initPopup = (selectedPropertyFromHomePage, editPropertyFromHomePage) => {
  /*
    set data from selectedProperty to html
    */
  if (selectedPropertyFromHomePage) {
    selectedProperty = selectedPropertyFromHomePage;
  } else {
    selectedProperty = new Property(
      getNextId(),
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );
  }
  editProperty = editPropertyFromHomePage;
  editPropertiesPopupImgDisplay.src = selectedProperty.imgUrl;
  editPropertiesPopupUrl.value = selectedProperty.imgUrl;
  editPropertiesPopupAlt.value = selectedProperty.title;
  editPropertiesPopupCredit.value = selectedProperty.credit;
  editPropertiesPopupPrice.value = selectedProperty.price;
  editPropertiesPopupCreatedAT.value = selectedProperty.createAT;
  editPropertiesPopupDescription.value = selectedProperty.description;
  editPropertiesPopupTitle.value = selectedProperty.title;
  editPropertiesPopupSubTitle.value = selectedProperty.subtitle;

  showPopup();
};

const showPopup = () => {
  editPropertiesPopup.classList.remove("d-none");
};

const hidePopup = () => {
  editPropertiesPopup.classList.add("d-none");
};

window.addEventListener("load", () => {
  editPropertiesPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "editPropertiesPopup" &&
      ev.target.id !== "editPropertiesPopupCancelBtn" &&
      ev.target.id !== "editPropertiesPopupCancelBtnIcon"
    ) {
      return;
    }
    hidePopup();
  });
  document
    .getElementById("editPropertiesPopupSaveBtn")
    .addEventListener("click", () => {
      selectedProperty.imgUrl = editPropertiesPopupUrl.value;
      selectedProperty.title = editPropertiesPopupAlt.value;
      selectedProperty.price = editPropertiesPopupPrice.value;
      selectedProperty.credit = editPropertiesPopupCredit.value;
      selectedProperty.img = editPropertiesPopupImg.value;
      selectedProperty.createAT = editPropertiesPopupCreatedAT.value;
      selectedProperty.description = editPropertiesPopupDescription.value;
      selectedProperty.title = editPropertiesPopupTitle.value;
      selectedProperty.subtitle = editPropertiesPopupSubTitle.value;

      editProperty(selectedProperty);
      hidePopup();
    });
  editPropertiesPopupImg.addEventListener("input", () => {
    editPropertiesPopupImgDisplay.src = editPropertiesPopupImg.value;
  });
});

export { initPopup, showPopup, hidePopup };
