import validateString from "../validation/validateString.js";
import validateUrl from "../validation/validateUrl.js";
import validatePrice from "../validation/validatePrice.js";
import validateDate from "../validation/validateDate.js";
import validateName from "../validation/validateName.js";

import Property from "../models/Property.js";
import getNextId from "../utils/getNextId.js";
//editPropertiesPopupUrl;

let selectedProperty, editProperty;
const editPropertiesPopupImgDisplay = document.getElementById(
  "editPropertiesPopupImgDisplay"
);
// const editPropertiesPopupUrl = document.getElementById(
//   "editPropertiesPopupUrl"
// );
const editPropertiesPopupAlt = document.getElementById(
  "editPropertiesPopupAlt"
);
const editPropertiesPopupTitle = document.getElementById(
  "editPropertiesPopupTitle"
);
const editPropertiesPopupCredit = document.getElementById(
  "editPropertiesPopupCredit"
);
const editPropertiesPopupPrice = document.getElementById(
  "editPropertiesPopupPrice"
);
const editPropertiesPopupCreatedAT = document.getElementById(
  "editPropertiesPopupCreatedAT"
);
const editPropertiesPopupDescription = document.getElementById(
  "editPropertiesPopupDescription"
);
const editPropertiesPopupSubTitle = document.getElementById(
  "editPropertiesPopupSubTitle"
);
const editPropertiesPopupImg = document.getElementById(
  "editPropertiesPopupImg"
);

const editPropertiesPopup = document.getElementById("editPropertiesPopup");

const popupSaveBtn = document.getElementById("editPropertiesPopupSaveBtn");

let urlOk = false;
let altOK = false;
let titleOK = false;
let creditOK = false;
let priceOK = false;
let createATOK = false;
let descriptionOK = false;
let subtitleOK = false;
let exists=null;

editPropertiesPopupImg.addEventListener("input", () => {
  checkUrlInput();
});
editPropertiesPopupAlt.addEventListener("input", () => {
  checkAltInput();
});
editPropertiesPopupTitle.addEventListener("input", () => {
  checkTitleInput();
});
editPropertiesPopupCredit.addEventListener("input", () => {
  checkCreditInput();
});
editPropertiesPopupPrice.addEventListener("input", () => {
  checkPriceInput();
});
editPropertiesPopupCreatedAT.addEventListener("input", () => {
  checkCreatedATInput();
});
editPropertiesPopupDescription.addEventListener("input", () => {
  checkDescriptionInput();
});

editPropertiesPopupSubTitle.addEventListener("input", () => {
  checkSubTitleInput();
});

const removeAlerts= ()=>
{
  document.getElementById("popup-alert-subtitle").classList.add("d-none");
  document.getElementById("popup-alert-url").classList.add("d-none");
  document.getElementById("popup-alert-alt").classList.add("d-none");
  document.getElementById("popup-alert-title").classList.add("d-none"); 
  document.getElementById("popup-alert-credit").classList.add("d-none");
  document.getElementById("popup-alert-price").classList.add("d-none"); 
  document.getElementById("popup-alert-createdAT").classList.add("d-none");
  document.getElementById("popup-alert-description").classList.add("d-none");
    editPropertiesPopupImg.classList.remove("is-invalid");
    editPropertiesPopupAlt.classList.remove("is-invalid");
    editPropertiesPopupTitle.classList.remove("is-invalid");
    editPropertiesPopupCredit.classList.remove("is-invalid");
    editPropertiesPopupPrice.classList.remove("is-invalid");
    editPropertiesPopupCreatedAT.classList.remove("is-invalid");
    editPropertiesPopupDescription.classList.remove("is-invalid");
    editPropertiesPopupSubTitle.classList.remove("is-invalid");
}
const setInput =(val)=>{
 urlOk = val;
 altOK = val;
 titleOK =val;
 creditOK = val;
 priceOK = val;
 createATOK = val;
 descriptionOK = val;
 subtitleOK = val;
}
const checkUrlInput = () => {
  let validUrl = validateUrl(editPropertiesPopupImg.value);
  //   console.log(reg.test(inputName.value));
  if (validUrl ===true) {
    //the text is ok
    editPropertiesPopupImg.classList.remove("is-invalid");
    document.getElementById("popup-alert-url").classList.add("d-none");
    urlOk = true;
  } else {
    //the text is not ok
    editPropertiesPopupImg.classList.add("is-invalid");
    document.getElementById("popup-alert-url").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    urlOk = false;
  }
  checkIfCanEnableBtn();
};

const checkAltInput = () => {
  let errorArr = validateString(editPropertiesPopupAlt.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    editPropertiesPopupAlt.classList.remove("is-invalid");
    document.getElementById("popup-alert-alt").classList.add("d-none");
    altOK = true;
  } else {
    //the text is not ok
    editPropertiesPopupAlt.classList.add("is-invalid");
    document.getElementById("popup-alert-alt").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    altOK = false;
  }
  checkIfCanEnableBtn();
};

const checkTitleInput = () => {
  let validTitle = validateString(editPropertiesPopupTitle.value);
  //   console.log(reg.test(inputName.value));
  if (validTitle.length === 0) {
    //the text is ok
    editPropertiesPopupTitle.classList.remove("is-invalid");
    document.getElementById("popup-alert-title").classList.add("d-none");
    titleOK = true;
  } else {
    //the text is not ok
    editPropertiesPopupTitle.classList.add("is-invalid");
    document.getElementById("popup-alert-title").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    titleOK = false;
  }
  checkIfCanEnableBtn();
};

const checkCreditInput = () => {
  let validCredit = validateName(editPropertiesPopupCredit.value);
  //   console.log(reg.test(inputName.value));
  if (validCredit.length === 0) {
    //the text is ok
    editPropertiesPopupCredit.classList.remove("is-invalid");
    document.getElementById("popup-alert-credit").classList.add("d-none");
    creditOK = true;
  } else {
    //the text is not ok
    editPropertiesPopupCredit.classList.add("is-invalid");
    document.getElementById("popup-alert-credit").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    creditOK = false;
  }
  checkIfCanEnableBtn();
};

const checkPriceInput = () => {
  let validPrice = validatePrice(editPropertiesPopupPrice.value);
  //   console.log(reg.test(inputName.value));
  if (validPrice === true) {
    //the text is ok
    editPropertiesPopupPrice.classList.remove("is-invalid");
    document.getElementById("popup-alert-price").classList.add("d-none");
    priceOK = true;
  } else {
    //the text is not ok
    editPropertiesPopupPrice.classList.add("is-invalid");
    document.getElementById("popup-alert-price").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    priceOK = false;
  }
  checkIfCanEnableBtn();
};

const checkCreatedATInput = () => {
  let validDate = validateDate(editPropertiesPopupCreatedAT.value);
  //   console.log(reg.test(inputName.value));
  if (validDate === true) {
    //the text is ok
    editPropertiesPopupCreatedAT.classList.remove("is-invalid");
    document.getElementById("popup-alert-createdAT").classList.add("d-none");
    createATOK = true;
  } else {
    //the text is not ok
    editPropertiesPopupCreatedAT.classList.add("is-invalid");
    document.getElementById("popup-alert-createdAT").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    createATOK = false;
  }
  checkIfCanEnableBtn();
};

const checkDescriptionInput = () => {
  let errorArr = validateString(editPropertiesPopupDescription.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    editPropertiesPopupDescription.classList.remove("is-invalid");
    document.getElementById("popup-alert-description").classList.add("d-none");
    descriptionOK = true;
  } else {
    //the text is not ok
    editPropertiesPopupDescription.classList.add("is-invalid");
    document
      .getElementById("popup-alert-description")
      .classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    descriptionOK = false;
  }
  checkIfCanEnableBtn();
};

const checkSubTitleInput = () => {
  let errorArr = validateString(editPropertiesPopupSubTitle.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    editPropertiesPopupSubTitle.classList.remove("is-invalid");
    document.getElementById("popup-alert-subtitle").classList.add("d-none");
    subtitleOK = true;
  } else {
    //the text is not ok
    editPropertiesPopupSubTitle.classList.add("is-invalid");
    document.getElementById("popup-alert-subtitle").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    subtitleOK = false;
  }
  checkIfCanEnableBtn();
};

const checkIfCanEnableBtn = () => {
  popupSaveBtn.disabled =
    !urlOk &&
    !altOK &&
    !titleOK &&
    !creditOK &&
    !priceOK &&
    !createATOK &&
    !descriptionOK &&
    !subtitleOK;
};

const initPopup = (selectedPropertyFromHomePage, editPropertyFromHomePage) => {
  /*
    set data from selectedProperty to html
    */
  if (selectedPropertyFromHomePage) {
    selectedProperty = selectedPropertyFromHomePage;
    exists=1;
    setInput(true);
  } else {
    setInput(false);
    exists=2;
    selectedProperty = new Property(
      getNextId(),
      "",
      "",
      "",
      "",
      "",
      0,
      "",
      "",
      ""
    );
  }
  editProperty = editPropertyFromHomePage;
  editPropertiesPopupImgDisplay.value = selectedProperty.imgUrl;
  //editPropertiesPopupUrl.value = selectedProperty.imgUrl;
  editPropertiesPopupAlt.value = selectedProperty.title;
  editPropertiesPopupCredit.value = selectedProperty.credit;
  editPropertiesPopupPrice.value = selectedProperty.price;
  editPropertiesPopupCreatedAT.value = selectedProperty.createdAT;
  editPropertiesPopupDescription.value = selectedProperty.description;
  editPropertiesPopupTitle.value = selectedProperty.title;
  editPropertiesPopupSubTitle.value = selectedProperty.subtitle;
  editPropertiesPopupImg.value = selectedProperty.imgUrl;
  
  checkIfCanEnableBtn();
  showPopup();
};

const showPopup = () => {
  editPropertiesPopup.classList.remove("d-none");
  if (exists==2)
  document.getElementById("newPopup").classList.remove("d-none");
  else if (exists==1)
  document.getElementById("editPopup").classList.remove("d-none");  
};

const hidePopup = () => {
  editPropertiesPopup.classList.add("d-none");
  if (exists==2)
  {document.getElementById("newPopup").classList.add("d-none");
}
else if (exists==1)
  {document.getElementById("editPopup").classList.add("d-none");
  }
  removeAlerts();
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
      //selectedProperty.imgUrl = editPropertiesPopupUrl.value;
      selectedProperty.title = editPropertiesPopupAlt.value;
      selectedProperty.price = editPropertiesPopupPrice.value;
      selectedProperty.credit = editPropertiesPopupCredit.value;
      selectedProperty.imgUrl = editPropertiesPopupImg.value;
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
