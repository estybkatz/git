/*
First we define the variables for the carousel - 
imagesArr is the array of the images.
CarouselDiv is the innerHTML for the carousel.
showIdx is the index of the current picture displayed.
animationStarted is a variable for the movement of the pictures.
*/

let imagesArr;
let carouselDiv;
let showIdx; //index(array) of the image that we display now
let animationStarted;

//this function will transfer data from homepage to this page and initialises the buttons.
const initialImagesCarousel = (imagesArrFromHomePage) => {
  carouselDiv = document.getElementById("home-page-images-carousel");
  initializeBtns();
  updateImagesCarousel(imagesArrFromHomePage);
};

const updateImagesCarousel = (imagesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new carousel.
    if the carousel already exists it will remove the old one and
    create new one
  */
  showIdx = 0;
  animationStarted = 0;
  imagesArr = imagesArrFromHomePage;
  createCarousel();
};
/* This function activates the back and forward buttons of the Carousel, which makes clicking one change the image to the next image, or the previous image according to the button pressed.
It fades out the current image, and fades in the previous or next image according to the button.
*/
const initializeBtns = () => {
  document.getElementById("back-Carousel-btn").addEventListener("click", () => {
    if (animationStarted !== 0) {
      return;
    }
    animationStarted = 2;
    let prevIdx = showIdx - 1;
    if (prevIdx < 0) {
      prevIdx = imagesArr.length - 1; //last image
    }
    let imgToHide = document.querySelector(
      `.img-container > img:nth-child(${showIdx + 1})`
    );

    imgToHide.classList.add("fade-out");
    const hideImgAnim = () => {
      imgToHide.removeEventListener("animationend", hideImgAnim); //remove event after executed
      imgToHide.classList.add("opacity-0");
      imgToHide.classList.remove("fade-out");
      animationStarted--;
    };
    imgToHide.addEventListener("animationend", hideImgAnim);
    let imgToShow = document.querySelector(
      `.img-container > img:nth-child(${prevIdx + 1})`
    );
    imgToShow.classList.remove("opacity-0");
    imgToShow.classList.add("fade-in");
    imgToShow.addEventListener(
      "animationend",
      () => {
        // imgToShow.classList.remove("opacity-0");
        imgToShow.classList.remove("fade-in");
          let carouselCredit= document.getElementById("carousel-credit")
    carouselCredit.innerHTML=imgToShow.classList.toString();
        animationStarted--;
      },
      { once: true }
    );
    // showIdx++;
    // if (showIdx >= imagesArr.length) {
    //   showIdx = 0;
    // }
  
    showIdx = prevIdx;
  });
  document.getElementById("next-Carousel-btn").addEventListener("click", () => {
    if (animationStarted !== 0) {
      return;
    }
    animationStarted = 2;
    let nextIdx = showIdx + 1;
    //showIdx = index of image to hide
    //nextIdx = index of image to display
    if (nextIdx >= imagesArr.length) {
      nextIdx = 0;
    }
    let imgToHide = document.querySelector(
      `.img-container > img:nth-child(${showIdx + 1})`
    );
    imgToHide.classList.add("fade-out");
    const hideImgAnim = () => {
      imgToHide.removeEventListener("animationend", hideImgAnim); //remove event after executed
      imgToHide.classList.add("opacity-0");
      imgToHide.classList.remove("fade-out");
      animationStarted--;
    };
    imgToHide.addEventListener("animationend", hideImgAnim);
    let imgToShow = document.querySelector(
      `.img-container > img:nth-child(${nextIdx + 1})`
    );
    imgToShow.classList.remove("opacity-0");
    imgToShow.classList.add("fade-in");
    imgToShow.addEventListener(
      "animationend",
      () => {
        // imgToShow.classList.remove("opacity-0");
        imgToShow.classList.remove("fade-in");
         let carouselCredit= document.getElementById("carousel-credit")
    carouselCredit.innerHTML= imgToShow.classList.toString();
        animationStarted--;
      },
      { once: true }
    );
    // showIdx++;
    // if (showIdx >= imagesArr.length) {
    //   showIdx = 0;
    // }
   
    showIdx = nextIdx;
  });
};
/*This function creates the carousel item from a picture in the arrays, and is used to create a single picture of for the createCarousel pictures. it's output is an html code of an image which has the url of the input, and the same alt. the credit is entered as a part of it's class so as to be taken out. */
const createItem = (imgUrl, alt, credit) => {
  //opacity-0 hide image
  return `
     <img src="${imgUrl}" alt="${alt}"  class="${credit} opacity-0"/> 
       `;

};
/*This function creates the carousel, as a long string in innerHtml, and afterwards it sets the first picture as unhidden, afterwards the buttons of the carousel change the image. */
const createCarousel = () => {
  let innerStr = "";
  for (let image of imagesArr) {
    innerStr += createItem(image.imgUrl, image.alt, image.credit);
  }
  carouselDiv.innerHTML = innerStr;
  //show the first img
  let firstImg= document.querySelector(".img-container > img:nth-child(1)");
   firstImg.classList.remove("opacity-0");
     let carouselCredit= document.getElementById("carousel-credit");
    carouselCredit.innerHTML= firstImg.classList.toString();
  // document
  //   .querySelector(".img-container > p:nth-child(1)")
  //   .classList.remove("opacity-0");
};

export { initialImagesCarousel, updateImagesCarousel };