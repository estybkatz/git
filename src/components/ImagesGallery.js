
/*
First we defined the variables of the gallery, imageArr is the array of the images from the html, and galleryDiv is the output which recieves the cards which will be printed ot the screen. */

let imagesArr;
let galleryDiv;
//this function sets the galleryDiv variable to the imagesArrFromHomePage, and sets the update gallery.
const initialImagesGallery = (imagesArrFromHomePage) => {
  galleryDiv = document.getElementById("home-page-images-gallery");
  updateImagesGallery(imagesArrFromHomePage);
};

const updateImagesGallery = (imagesArrFromHomePage) => {
  /*
    this function gets data from homepage and create new gallery.
    if the gallery already exists it will remove the old one and
    create new one
  */
  imagesArr = imagesArrFromHomePage;
  createGallery();
};
/*this function creates a card for the gallery, the card is a div of class column containing the image, and it's alt. it gives the image the sources. afterwards we print the title,credit and price of the card.*/
const createCard = (imgUrl, title, credit, price, id) => {
  return `
  <div class="col">
    <div class="card">
      <img
        src="${imgUrl}"
        class="card-img-top"
        alt="${title}"
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">Credit:
          ${credit}
        </p>
      </div>
      <ul class="list-group list-group-flush cartcontainer" >
        <li class="list-group-item">Price: ${price}<i class="bi bi-cart cartImg" ></i></li>
     
    </ul>
  </div>
  </div>
  `;
};
/* This function creates the gallery by running on the array of the images, and adding for each image. afterwards we insert it to innerHTML */
const createGallery = () => {
  let innerStr = "";
  for (let image of imagesArr) {
    innerStr += createCard(
      image.imgUrl,
      image.title,
      image.credit,
      image.price,
      image.id
    );
  }
  galleryDiv.innerHTML = innerStr;
};

export { initialImagesGallery, updateImagesGallery };

/* <div class="card-body">
      <button type="button" class="btn btn-success">
          Success
       </button>
        <button type="button" class="btn btn-warning">
          edit
        </button>
        <button type="button" class="btn btn-danger">delete</button>
      </div>*/
