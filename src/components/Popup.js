import validateString from "../validation/validateString.js";
import validateUrl from "../validation/validateUrl.js";
import validatePrice from "../validation/validatePrice.js";
import validateDate from "../validation/validateDate.js";
import validateName from "../validation/validateName.js";

import Image from "../models/Image.js";
import getNextId from "../utils/getNextId.js";
//editImagesPopupUrl;

let selectedImage, editImage;
const editImagesPopupImgDisplay = document.getElementById(
  "editImagesPopupImgDisplay"
);
// const editImagesPopupUrl = document.getElementById(
//   "editImagesPopupUrl"
// );
const editImagesPopupAlt = document.getElementById(
  "editImagesPopupAlt"
);
const editImagesPopupTitle = document.getElementById(
  "editImagesPopupTitle"
);
const editImagesPopupCredit = document.getElementById(
  "editImagesPopupCredit"
);
const editImagesPopupPrice = document.getElementById(
  "editImagesPopupPrice"
);
const editImagesPopupCreatedAT = document.getElementById(
  "editImagesPopupCreatedAT"
);
const editImagesPopupDescription = document.getElementById(
  "editImagesPopupDescription"
);
const editImagesPopupSubTitle = document.getElementById(
  "editImagesPopupSubTitle"
);
const editImagesPopupImg = document.getElementById(
  "editImagesPopupImg"
);

const editImagesPopup = document.getElementById("editImagesPopup");

const popupSaveBtn = document.getElementById("editImagesPopupSaveBtn");

let urlOk = false;
let altOK = false;
let titleOK = false;
let creditOK = false;
let priceOK = false;
let createATOK = false;
let descriptionOK = false;
let subtitleOK = false;
let exists=null;

editImagesPopupImg.addEventListener("input", () => {
  checkUrlInput();
});
editImagesPopupAlt.addEventListener("input", () => {
  checkAltInput();
});
editImagesPopupTitle.addEventListener("input", () => {
  checkTitleInput();
});
editImagesPopupCredit.addEventListener("input", () => {
  checkCreditInput();
});
editImagesPopupPrice.addEventListener("input", () => {
  checkPriceInput();
});
editImagesPopupCreatedAT.addEventListener("input", () => {
  checkCreatedATInput();
});
editImagesPopupDescription.addEventListener("input", () => {
  checkDescriptionInput();
});

editImagesPopupSubTitle.addEventListener("input", () => {
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
    editImagesPopupImg.classList.remove("is-invalid");
    editImagesPopupAlt.classList.remove("is-invalid");
    editImagesPopupTitle.classList.remove("is-invalid");
    editImagesPopupCredit.classList.remove("is-invalid");
    editImagesPopupPrice.classList.remove("is-invalid");
    editImagesPopupCreatedAT.classList.remove("is-invalid");
    editImagesPopupDescription.classList.remove("is-invalid");
    editImagesPopupSubTitle.classList.remove("is-invalid");
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
  let validUrl = validateUrl(editImagesPopupImg.value);

  if (validUrl ===true) {
    //the text is ok
    editImagesPopupImg.classList.remove("is-invalid");
    document.getElementById("popup-alert-url").classList.add("d-none");
    urlOk = true;
  } else {
    //the text is not ok
    editImagesPopupImg.classList.add("is-invalid");
    document.getElementById("popup-alert-url").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    urlOk = false;
  }
  checkIfCanEnableBtn();
};

const checkAltInput = () => {
  let errorArr = validateString(editImagesPopupAlt.value);
  if (errorArr.length === 0) {
    //the text is ok
    editImagesPopupAlt.classList.remove("is-invalid");
    document.getElementById("popup-alert-alt").classList.add("d-none");
    altOK = true;
  } else {
    //the text is not ok
    editImagesPopupAlt.classList.add("is-invalid");
    document.getElementById("popup-alert-alt").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    altOK = false;
  }
  checkIfCanEnableBtn();
};

const checkTitleInput = () => {
  let validTitle = validateString(editImagesPopupTitle.value);
  if (validTitle.length === 0) {
    //the text is ok
    editImagesPopupTitle.classList.remove("is-invalid");
    document.getElementById("popup-alert-title").classList.add("d-none");
    titleOK = true;
  } else {
    //the text is not ok
    editImagesPopupTitle.classList.add("is-invalid");
    document.getElementById("popup-alert-title").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    titleOK = false;
  }
  checkIfCanEnableBtn();
};

const checkCreditInput = () => {
  let validCredit = validateName(editImagesPopupCredit.value);
  //   .log(reg.test(inputName.value));
  if (validCredit.length === 0) {
    //the text is ok
    editImagesPopupCredit.classList.remove("is-invalid");
    document.getElementById("popup-alert-credit").classList.add("d-none");
    creditOK = true;
  } else {
    //the text is not ok
    editImagesPopupCredit.classList.add("is-invalid");
    document.getElementById("popup-alert-credit").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    creditOK = false;
  }
  checkIfCanEnableBtn();
};

const checkPriceInput = () => {
  let validPrice = validatePrice(editImagesPopupPrice.value);
  if (validPrice === true) {
    //the text is ok
    editImagesPopupPrice.classList.remove("is-invalid");
    document.getElementById("popup-alert-price").classList.add("d-none");
    priceOK = true;
  } else {
    //the text is not ok
    editImagesPopupPrice.classList.add("is-invalid");
    document.getElementById("popup-alert-price").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    priceOK = false;
  }
  checkIfCanEnableBtn();
};

const checkCreatedATInput = () => {
  let validDate = validateDate(editImagesPopupCreatedAT.value);
  if (validDate === true) {
    //the text is ok
    editImagesPopupCreatedAT.classList.remove("is-invalid");
    document.getElementById("popup-alert-createdAT").classList.add("d-none");
    createATOK = true;
  } else {
    //the text is not ok
    editImagesPopupCreatedAT.classList.add("is-invalid");
    document.getElementById("popup-alert-createdAT").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    createATOK = false;
  }
  checkIfCanEnableBtn();
};

const checkDescriptionInput = () => {
  let errorArr = validateString(editImagesPopupDescription.value);
  if (errorArr.length === 0) {
    //the text is ok
    editImagesPopupDescription.classList.remove("is-invalid");
    document.getElementById("popup-alert-description").classList.add("d-none");
    descriptionOK = true;
  } else {
    //the text is not ok
    editImagesPopupDescription.classList.add("is-invalid");
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
  let errorArr = validateString(editImagesPopupSubTitle.value);
  if (errorArr.length === 0) {
    //the text is ok
    editImagesPopupSubTitle.classList.remove("is-invalid");
    document.getElementById("popup-alert-subtitle").classList.add("d-none");
    subtitleOK = true;
  } else {
    //the text is not ok
    editImagesPopupSubTitle.classList.add("is-invalid");
    document.getElementById("popup-alert-subtitle").classList.remove("d-none");
    //document.getElementById("signup-alert-name").innerHTML +=
    // errorArr.join("<br>");
    subtitleOK = false;
  }
  checkIfCanEnableBtn();
};

const checkIfCanEnableBtn = () => {
  popupSaveBtn.disabled =!(
    urlOk &&
    altOK &&
    titleOK &&
    creditOK &&
    priceOK &&
    createATOK &&
    descriptionOK &&
    subtitleOK);
};

const initPopup = (selectedImageFromHomePage, editImageFromHomePage) => {
  /*
    set data from selectedImage to html
    */
  if (selectedImageFromHomePage) {
    selectedImage = selectedImageFromHomePage;
    exists=1;
    setInput(true);
  } else {
    setInput(false);
    exists=2;
    selectedImage = new Image(
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
  editImage = editImageFromHomePage;
  editImagesPopupImgDisplay.value = selectedImage.imgUrl;
  //editImagesPopupUrl.value = selectedImage.imgUrl;
  editImagesPopupAlt.value = selectedImage.title;
  editImagesPopupCredit.value = selectedImage.credit;
  editImagesPopupPrice.value = selectedImage.price;
  editImagesPopupCreatedAT.value = selectedImage.createdAT;
  editImagesPopupDescription.value = selectedImage.description;
  editImagesPopupTitle.value = selectedImage.title;
  editImagesPopupSubTitle.value = selectedImage.subtitle;
  editImagesPopupImg.value = selectedImage.imgUrl;
  
  checkIfCanEnableBtn();
  showPopup();
};

const showPopup = () => {
  editImagesPopup.classList.remove("d-none");
  if (exists==2)
  document.getElementById("newPopup").classList.remove("d-none");
  else if (exists==1)
  document.getElementById("editPopup").classList.remove("d-none");  
};

const hidePopup = () => {
  editImagesPopup.classList.add("d-none");
  if (exists==2)
  {document.getElementById("newPopup").classList.add("d-none");
}
else if (exists==1)
  {document.getElementById("editPopup").classList.add("d-none");
  }
  removeAlerts();
};

window.addEventListener("load", () => {
  editImagesPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "editImagesPopup" &&
      ev.target.id !== "editImagesPopupCancelBtn" &&
      ev.target.id !== "editImagesPopupCancelBtnIcon"
    ) {
      return;
    }
    hidePopup();
  });
  document
    .getElementById("editImagesPopupSaveBtn")
    .addEventListener("click", () => {
      //selectedImage.imgUrl = editImagesPopupUrl.value;
      selectedImage.title = editImagesPopupAlt.value;
      selectedImage.price = editImagesPopupPrice.value;
      selectedImage.credit = editImagesPopupCredit.value;
      selectedImage.imgUrl = editImagesPopupImg.value;
      selectedImage.createAT = editImagesPopupCreatedAT.value;
      selectedImage.description = editImagesPopupDescription.value;
      selectedImage.title = editImagesPopupTitle.value;
      selectedImage.subtitle = editImagesPopupSubTitle.value;

      editImage(selectedImage);
      hidePopup();
    });
  editImagesPopupImg.addEventListener("input", () => {
    editImagesPopupImgDisplay.src = editImagesPopupImg.value;
  });
});

export { initPopup, showPopup, hidePopup };
