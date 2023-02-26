let propertiesArr;
let galleryDiv;
//this function will transfer data from homepage to this page
const initialPropertiesGallery = (propertiesArrFromHomePage) => {
  galleryDiv = document.getElementById("home-page-properties-gallery");
  updatePropertiesGallery(propertiesArrFromHomePage);
};

const updatePropertiesGallery = (propertiesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new gallery.
    if the gallery already exists it will remove the old one and
    create new one
  */
  propertiesArr = propertiesArrFromHomePage;
  createGallery();
};

const createCard = (imgUrl, title, credit, price) => {
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
      <ul class="list-group list-group-flush" id=cartcontainer>
        <li class="list-group-item">Price: ${price}<i class="bi bi-cart" id=cart></i></li>
     
    </ul>
  </div>
  </div>
  `;
};

const createGallery = () => {
  let innerStr = "";
  for (let property of propertiesArr) {
    innerStr += createCard(
      property.imgUrl,
      property.title,
      property.credit,
      property.price
    );
  }
  galleryDiv.innerHTML = innerStr;
};

export { initialPropertiesGallery, updatePropertiesGallery };

/* <div class="card-body">
      <button type="button" class="btn btn-success">
          Success
       </button>
        <button type="button" class="btn btn-warning">
          edit
        </button>
        <button type="button" class="btn btn-danger">delete</button>
      </div>*/
