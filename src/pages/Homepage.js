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

const updateDisplays = () => {
  updateImagesGallery(imagesArr); // update gallery
  updateImagesList(imagesArr); // update list
  updateImagesCarousel(imagesArr); // update carousel
};

const saveToLocalStorage = (arrToSave) => {
  localStorage.setItem("images", JSON.stringify(arrToSave));
};

const deleteImage = (id) => {
  id = +id; //convert string to number
  originalImagesArr = originalImagesArr.filter(
    (item) => item.id !== id
  );
  saveToLocalStorage(originalImagesArr);
  imagesArr = imagesArr.filter((item) => item.id !== id); //delete image by index
  updateDisplays();
};

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

const showPopup = (id) => {
  let selectedImage = imagesArr.find((item) => item.id === +id);
  if (!selectedImage) {
    return;
  }
  initPopup(selectedImage, editImage);
};

const showPopupImgDetails = (id) => {
  let selectedImage = imagesArr.find((item) => item.id === +id);
  if (!selectedImage) {
    return;
  }
  initDetailsPopup(selectedImage);
};

const showNewPopup = () => {
  initPopup(undefined, addNewImage);
};

const addNewImage = (newImage) => {
  originalImagesArr = [...originalImagesArr, newImage];
  let nextId = +newImage.id + 1;
  localStorage.setItem("nextid", nextId + "");
  imagesArr = [...originalImagesArr];
  editImage();
};

const editImage = () => {
  saveToLocalStorage(originalImagesArr);
  updateDisplays();
};

export { showNewPopup };
