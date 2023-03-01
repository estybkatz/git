let propertiesArr;
let carouselDiv;
let showIdx; //index(array) of the image that we display now
let animationStarted;
//this function will transfer data from homepage to this page
const initialPropertiesCarousel = (propertiesArrFromHomePage) => {
  carouselDiv = document.getElementById("home-page-properties-carousel");
  initializeBtns();
  updatePropertiesCarousel(propertiesArrFromHomePage);
};

const updatePropertiesCarousel = (propertiesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new carousel.
    if the carousel already exists it will remove the old one and
    create new one
  */
  showIdx = 0;
  animationStarted = 0;
  propertiesArr = propertiesArrFromHomePage;
  createCarousel();
};

const initializeBtns = () => {
  document.getElementById("back-carusel-btn").addEventListener("click", () => {
    console.log("hello in back");
    if (animationStarted !== 0) {
      return;
    }
    animationStarted = 2;
    let prevIdx = showIdx - 1;
    if (prevIdx < 0) {
      prevIdx = propertiesArr.length - 1; //last image
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
    // if (showIdx >= propertiesArr.length) {
    //   showIdx = 0;
    // }
  
    showIdx = prevIdx;
  });
  document.getElementById("next-carusel-btn").addEventListener("click", () => {
    console.log("hello in next");
    if (animationStarted !== 0) {
      return;
    }
    animationStarted = 2;
    let nextIdx = showIdx + 1;
    //showIdx = index of image to hide
    //nextIdx = index of image to display
    if (nextIdx >= propertiesArr.length) {
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
    // if (showIdx >= propertiesArr.length) {
    //   showIdx = 0;
    // }
   
    showIdx = nextIdx;
  });
};

const createItem = (imgUrl, alt, credit) => {
  //opacity-0 hide image
  return `
     <img src="${imgUrl}" alt="${alt}"  class="${credit} opacity-0"/> 
       `;

};

const createCarousel = () => {
  let innerStr = "";
  for (let property of propertiesArr) {
    innerStr += createItem(property.imgUrl, property.alt, property.credit);
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

export { initialPropertiesCarousel, updatePropertiesCarousel };
/* We need to a paragraph containing the credit, and give it opacity 0, and afterwards remove it.
we need to add to the creator of item the credit, and print another paragraph after the picture.
we need to understand how to change the opacity of the p in the creator and in the moving of the buttons.
we need to change createItem's input to (inmUrl, alt, credit), and add the credit as a line under it. afterwards we need to chage it's opacity. we also need to change it the input, and in the buttons. */0
