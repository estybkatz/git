

/*
Here we set all the variables required for the Image Details popup.
We Take all the required variables from the html using the getELementById function.
selectedImage is a variable for the selected picture.
*/
let selectedImage;
const imgDetailsPopupImgDisplay = document.getElementById(
  "imgDetailsPopupImgDisplay"
);
const imgDetailsPopupTitle = document.getElementById("imgDetailsPopupTitle");
const imgDetailsPopupCreatedAT = document.getElementById(
  "imgDetailsPopupCreatedAT"
);
const imgDetailsPopupDescription = document.getElementById(
  "imgDetailsPopupDescription"
);
const imgDetailsPopupSubTitle = document.getElementById(
  "imgDetailsPopupSubTitle"
);
const imgDetailsPopupID = document.getElementById("imgDetailsPopupID");

const imgDetailsPopup = document.getElementById("imgDetailsPopup");
/* 
this function initializes the selectedImage variable from user input.
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
/* here we set the details that we want to show in the details popup from the input clicked. */
imgDetailsPopupImgDisplay.alt=selectedImage.alt;
  imgDetailsPopupImgDisplay.src = selectedImage.imgUrl;
  imgDetailsPopupTitle.innerHTML = selectedImage.title;
  imgDetailsPopupCreatedAT.innerHTML = selectedImage.createdAT;
  imgDetailsPopupDescription.innerHTML = selectedImage.description;
  imgDetailsPopupSubTitle.innerHTML = selectedImage.subtitle;
  imgDetailsPopupID.innerHTML = selectedImage.id;


  showDetailsPopup();
};
/*this function remove the d-none class of the popup, so that it will show and adds a block class. */
const showDetailsPopup = () => {
  imgDetailsPopup.classList.remove("d-none");
  imgDetailsPopup.classList.add("d-block");
};
/* this function hides the popup */
const hidDetailsPopup = () => {
  imgDetailsPopup.classList.add("d-none");
};

/*this function hides the pop up if the user presses outside it. */

window.addEventListener("load", () => {
  imgDetailsPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "imgDetailsPopup"
    ) {
      return;
    }
    hidDetailsPopup();
  });
});

export { initDetailsPopup, showDetailsPopup, hidDetailsPopup };
