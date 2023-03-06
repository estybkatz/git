import Image from "../models/Image.js";

//editImagesPopupUrl;
/*
Here we set all the variables required for the Image Details popup.
We Take all the required variables from the html using the getELementById function.
selectedImage is a variable for the selected picture.
*/
let selectedImage;
const imgDetailsPopupImgDisplay = document.getElementById(
  "imgDetailsPopupImgDisplay"
);

// const editImagesPopupAlt = document.getElementById(
//   "editImagesPopupAlt"
// );
const imgDetailsPopupTitle = document.getElementById("imgDetailsPopupTitle");
// const editImagesPopupCredit = document.getElementById(
//   "editImagesPopupCredit"
// );
// const editImagesPopupPrice = document.getElementById(
//   "editImagesPopupPrice"
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
// const editImagesPopupImg = document.getElementById(
//   "editImagesPopupImg"
// );
const imgDetailsPopupID = document.getElementById("imgDetailsPopupID");

const imgDetailsPopup = document.getElementById("imgDetailsPopup");
/* 
Function name
*/
const initDetailsPopup = (selectedImageFromHomePage) => {
  /*
    set data from selectedImage to html
    */
  if (selectedImageFromHomePage) {
    selectedImage = selectedImageFromHomePage;
  } else {
    return;
  }

  imgDetailsPopupImgDisplay.src = selectedImage.imgUrl;
  imgDetailsPopupTitle.innerHTML = selectedImage.title;
  imgDetailsPopupCreatedAT.innerHTML = selectedImage.createdAT;
  imgDetailsPopupDescription.innerHTML = selectedImage.description;
  imgDetailsPopupSubTitle.innerHTML = selectedImage.subtitle;
  imgDetailsPopupID.innerHTML = selectedImage.id;

  // editImagesPopupAlt.value = selectedImage.title;
  // editImagesPopupCredit.value = selectedImage.credit;
  // editImagesPopupPrice.value = selectedImage.price;
  // editImagesPopupCreatedAT.value = selectedImage.createdAT;
  // editImagesPopupDescription.value = selectedImage.description;
  // editImagesPopupTitle.value = selectedImage.title;
  // editImagesPopupSubTitle.value = selectedImage.subtitle;
  // editImagesPopupImg.value = selectedImage.img;

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
      // ev.target.id !== "editImagesPopupCancelBtn" &&
      // ev.target.id !== "editImagesPopupCancelBtnIcon"
    ) {
      return;
    }
    hidDetailsPopup();
  });
});

export { initDetailsPopup, showDetailsPopup, hidDetailsPopup };
