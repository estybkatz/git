import {
  initialImagesGallery,
  updateImagesGallery,
} from "../components/ImagesGallery.js";
import {
  initialImagesList,
  updateImagesList,
} from "../components/ImagesList.js";
import {
  initialImagesCarousel,
  updateImagesCarousel,
} from "../components/ImagesCarousel.js";
import { initPopup } from "../components/Popup.js";
import checkIfAdmin from "../utils/checkIfAdmin.js";
import { initDetailsPopup } from "../components/ImgDetailsPopup.js";
/*Here we define the variables for this page */
let imagesArr, originalImagesArr;
let displayNow; // display that we can see now

/* buttons */
let homeDisplayList;
let homeDisplayGallery;
let homeDisplayCarousel;
/* displays */
let imagesGallery;
let imagesList;
let imagesCarousel;

let isAdmin;
/*Here we load and initialise the gallery and list and carousel and buttons according to the user status. */
window.addEventListener("load", () => {
  imagesArr = localStorage.getItem("images");
  if (!imagesArr) {
    return;
  }
  imagesArr = JSON.parse(imagesArr);
  originalImagesArr = [...imagesArr];
  isAdmin = checkIfAdmin();
  //passing imagesArr to ImagesGallery.js
  initialImagesGallery(imagesArr);
  initialImagesList(
    imagesArr,
    isAdmin,
    deleteImage,
    showPopup,
    showPopupImgDetails
  );
  initialImagesCarousel(imagesArr);
  initializeElements();
  initializeBtns();
});
/* here we initialise the variables by setting chosen */
const initializeElements = () => {
  /* btns */
  homeDisplayList = document.getElementById("homeDisplayList");
  homeDisplayGallery = document.getElementById("homeDisplayGallery");
  homeDisplayCarousel = document.getElementById("homeDisplayCarousel");
  /* divs */
  imagesGallery = document.getElementById("imagesGallery");
  imagesList = document.getElementById("imagesList");
  imagesCarousel = document.getElementById("imagesCarousel");
  displayNow = imagesCarousel; // choose who we want to display
  displayToDisplay(displayNow);
};
/* this function sets the buttons, in the homepage, activating the displays and sorts and search according to clicks   */
const initializeBtns = () => {
  homeDisplayList.addEventListener("click", () => {
    displayToDisplay(imagesList);
  });
  homeDisplayGallery.addEventListener("click", () => {
    displayToDisplay(imagesGallery);
  });
  homeDisplayCarousel.addEventListener("click", () => {
    displayToDisplay(imagesCarousel);
  });
  document
    .getElementById("homeDisplaySortASC")
    .addEventListener("click", () => {
      sortImages();
    });
  document
    .getElementById("homeDisplaySortDESC")
    .addEventListener("click", () => {
      sortImages(false);
    });
  document
    .getElementById("homeDisplaySearch")
    .addEventListener("input", (ev) => {
      let regex = new RegExp("^" + ev.target.value, "i");
      imagesArr = originalImagesArr.filter((item) => {
        let reg = regex.test(item.title);
        return reg;
      });
      updateDisplays();
    });
};
/* this functions hides the current display and sets the display chosen. */
const displayToDisplay = (toDisplay) => {
  // hide what we currently showing
  displayNow.classList.remove("d-block");
  displayNow.classList.add("d-none");
  // show what we want to display now
  toDisplay.classList.remove("d-none");
  toDisplay.classList.add("d-block");
  //this is what we displaying now
  displayNow = toDisplay;
};
/* this function updates the displays */
const updateDisplays = () => {
  updateImagesGallery(imagesArr); // update gallery
  updateImagesList(imagesArr); // update list
  updateImagesCarousel(imagesArr); // update carousel
};
/* this function saves to local storage a given array */
const saveToLocalStorage = (arrToSave) => {
  localStorage.setItem("images", JSON.stringify(arrToSave));
};
/* this functions removes a given image from teh array of the images and updates the displays */
const deleteImage = (id) => {
  id = +id; //convert string to number
  originalImagesArr = originalImagesArr.filter(
    (item) => item.id !== id
  );
  saveToLocalStorage(originalImagesArr);
  imagesArr = imagesArr.filter((item) => item.id !== id); //delete image by index
  updateDisplays();
};
/* this function sorts the array in an ascending or descending order  */
const sortImages = (asc = true) => {
  if (asc) {
    // from a to z
    imagesArr.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    // from z to a
    imagesArr.sort((a, b) => b.title.localeCompare(a.title));
  }
  updateDisplays();
};
/* this functions shows a popup of a given id */
const showPopup = (id) => {
  let selectedImage = imagesArr.find((item) => item.id === +id);
  if (!selectedImage) {
    return;
  }
  initPopup(selectedImage, editImage);
};
/* this function shows the details of a chosen function by id */
const showPopupImgDetails = (id) => {
  let selectedImage = imagesArr.find((item) => item.id === +id);
  if (!selectedImage) {
    return;
  }
  initDetailsPopup(selectedImage);
};
/* this functions pops up to create a new image */
const showNewPopup = () => {
  initPopup(undefined, addNewImage);
};
/* this function adds a given image to the image array and saves it to local storage */
const addNewImage = (newImage) => {
  originalImagesArr = [...originalImagesArr, newImage];
  let nextId = +newImage.id + 1;
  localStorage.setItem("nextid", nextId + "");
  imagesArr = [...originalImagesArr];
  editImage();
};
/* this function updates the new image */
const editImage = () => {
  saveToLocalStorage(originalImagesArr);
  updateDisplays();
};

export { showNewPopup };
