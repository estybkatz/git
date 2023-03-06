import validateString from "../validation/validateString.js";
import validateUrl from "../validation/validateUrl.js";
import validatePrice from "../validation/validatePrice.js";
import validateDate from "../validation/validateDate.js";
import validateName from "../validation/validateName.js";

import Image from "../models/Image.js";
import getNextId from "../utils/getNextId.js";
//editImagesPopupUrl;
/* here we take the basic properties of the popup from the html page.  */
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
/* This variables are all the fields which must be fullfilled in order for the picture to be allowed. they are initialized in the setInput function, as false for new picture and true for editing an existing picture. exists is a variable which will be used to differ between editing pictures and creating new pictures. */
let urlOk ;;
let altOK ;
let titleOK;
let creditOK;
let priceOK ;
let createATOK;
let descriptionOK ;
let subtitleOK ;
let exists=null;
/* all the following functions check the input inserted in the input fields if it is correct, the checkFunctions also change the OK variable that is connected to them. */
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
/* the function removeAlerts removes the alerts and invalid of incorrect input in the end of the popup so they won't come back the next time we open a popup to edit. */
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
/* the setInput functions sets all of the variables to either true or false, true in case that we edit a picture, then we can change a single detail and it is valid, since we checked when we created the picture, and false for a new picture until we set all values to correct input */
const setInput =()=>{
 urlOk = exists;
 altOK = exists;
 titleOK =exists;
 creditOK = exists;
 priceOK = exists;
 createATOK = exists;
 descriptionOK = exists;
 subtitleOK = exists;
  popupSaveBtn.disabled =true;
}
/* this function checks if the entered url is valid, and if it is sets urlOk to true, afterwards it checks if we can enable the button */
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

/* this function checks if the entered alt is valid, and if it is sets altOk to true, afterwards it checks if we can enable the button */
const checkAltInput = () => {
  let validAlt = validateString(editImagesPopupAlt.value);
  if (validAlt.length === 0) {
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

/* this function checks if the entered title is valid, and if it is sets titleOk to true, afterwards it checks if we can enable the button */
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

/* this function checks if the entered credit is valid, and if it is sets creditOk to true, afterwards it checks if we can enable the button */
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
    creditOK = false;
  }
  checkIfCanEnableBtn();
};

/* this function checks if the entered Price is valid, and if it is sets priceOk to true, afterwards it checks if we can enable the button */
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

/* this function checks if the entered date is valid, and if it is sets createATOk to true, afterwards it checks if we can enable the button */
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

/* this function checks if the entered description is valid, and if it is sets descriptionOk to true, afterwards it checks if we can enable the button */
const checkDescriptionInput = () => {
  let validDescription = validateString(editImagesPopupDescription.value);
  if (validDescription.length === 0) {
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

/* this function checks if the entered subtitle is valid, and if it is sets subtitleOK to true, afterwards it checks if we can enable the button */
const checkSubTitleInput = () => {
  let subTitleValid = validateString(editImagesPopupSubTitle.value);
  if (subTitleValid.length === 0) {
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

/* this function checks all the variables are valid, and we can activate the button or not */
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
/* this function initialises the popup, first checking if it exists, and accordingly sets the input. after wards sets the editVariables to the input */
const initPopup = (selectedImageFromHomePage, editImageFromHomePage) => {
  /*
    set data from selectedImage to html
    */
  if (selectedImageFromHomePage) {
    selectedImage = selectedImageFromHomePage;
    exists=true;
  } else {
    exists=false;
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
  setInput();
  editImage = editImageFromHomePage;
  editImagesPopupImgDisplay.src = selectedImage.imgUrl;
  //editImagesPopupUrl.value = selectedImage.imgUrl;
  editImagesPopupAlt.value = selectedImage.title;
  editImagesPopupCredit.value = selectedImage.credit;
  editImagesPopupPrice.value = selectedImage.price;
  editImagesPopupCreatedAT.value = selectedImage.createdAT;
  editImagesPopupDescription.value = selectedImage.description;
  editImagesPopupTitle.value = selectedImage.title;
  editImagesPopupSubTitle.value = selectedImage.subtitle;
  editImagesPopupImg.value = selectedImage.imgUrl;
  showPopup();
};
/*this function shows the popup, and gives it the correct title according to exists if it is a edit popup or a create new popup */
const showPopup = () => {
  editImagesPopup.classList.remove("d-none");
  if (exists==true)
  document.getElementById("editPopup").classList.remove("d-none");
  else
  document.getElementById("newPopup").classList.remove("d-none");  
};
/*this function hides the popup, and also deletes the edit and new titles so it won't come back with them again */
const hidePopup = () => {
  editImagesPopup.classList.add("d-none");
  if (exists==true)
  {document.getElementById("editPopup").classList.add("d-none");
}
else if (exists==false)
  {document.getElementById("newPopup").classList.add("d-none");
  }
  removeAlerts();
};
/*this function makes that a click outside the popup cancels it. and that input inside it changes it.*/
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
