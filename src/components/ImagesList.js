import checkIfConnected from "../utils/checkIfConnected.js";
let imagesArr;
let listDiv;
let isAdmin;
let deleteImage;
let showPopup;
let showPopupImgDetails;

//this function initialises the variables of this page from homepage.
const initialImagesList = (
  imagesArrFromHomePage,
  isAdminParam,
  deleteImageFromHomePage,
  showPopupFromHomePage,
  showPopupimgDetailsFromHomePage
) => {
  listDiv = document.getElementById("home-page-images-list");
  isAdmin = isAdminParam;
  deleteImage = deleteImageFromHomePage;
  showPopup = showPopupFromHomePage;
  showPopupImgDetails = showPopupimgDetailsFromHomePage;
  updateImagesList(imagesArrFromHomePage);
};

const updateImagesList = (imagesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new list.
    if the list already exists it will remove the old one and
    create new one
  */
  imagesArr = imagesArrFromHomePage;
  createList();
};
/* this function creates the objects of the list, as rows with details. also if the user is an admin, it allows him to edit and delete pictures. */
const createItem = (imgUrl, title, credit, id, alt) => {
  const adminBtns = `<div class="col-md-1">
  <button type="button" class="btn btn btn-light w-100" id="imageListEditBtn-${id}">
    <i class="bi bi-pencil-square col-md-1"></i>
  </button>
  </div>
  <div class="col-md-1">
  <button type="button" class="btn btn btn-light w-100" id="imageListDeleteBtn-${id}">
   <i class="bi bi-trash3-fill col-md-1"></i>
  </button>
  </div>
  `;
  return `
  <li class="list-group-item">
    <div class="row">
        <div class="col-md-2">
        <img src="${imgUrl}" class="img-fluid" alt="${alt}" id="imgMoreDetails-${id}-list"/>
        </div>
        <div class="col-md-6">
        <div>${imgUrl}</div>
        </div>
        <div class="col-md-1">
        <h5 class="card-title">${title}</h5>
        </div>
        <div class="col-md-1">
        <h5 class="card-title">${credit}</h5>
        </div>
        ${isAdmin ? adminBtns : ""}
    </div>
    </li>
 
  
  `;
};
/* this function extracts an id from a click evenf, it has no id it returns the parent id. */
const getIdFromClick = (ev) => {
  let idFromId = ev.target.id.split("-"); // split the id to array
  if (!ev.target.id) {
    /*
        if press on icon then there is no id
        then we need to take the id of the parent which is btn
      */
    idFromId = ev.target.parentElement.id.split("-");
  }
  return idFromId[1];
};
/* this function sets the delete click to the delete function of the id. */
const handleDeleteBtnClick = (ev) => {
  deleteImage(getIdFromClick(ev));
};

/* this function sets the edit click to the edit function of the id. */
const handleEditBtnClick = (ev) => {
  showPopup(getIdFromClick(ev));
};
/* this function pop ups image details from a click event. */
const handleImgDetailClick = (ev) => {
  showPopupImgDetails(getIdFromClick(ev));
};
/*This function clears all events of a given keyword from the handFunction */
const clearEventListeners = (idKeyword, handleFunction) => {
  //get all old btns
  let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //remove old events
  for (let btn of btnsBefore) {
    btn.removeEventListener("click", handleFunction);
  }
};
/* this function creates a list, by first clearing all events of delete, details and edit. and creating new elements, and setting them to the innerHTML */
const createList = () => {
  let innerStr = "";
  //clear event listeners for delete btns
  clearEventListeners("imageListDeleteBtn", handleDeleteBtnClick);
  //clear event listeners for edit btns
  clearEventListeners("imageListEditBtn", handleEditBtnClick);
  clearEventListeners("imgMoreDetails", handleImgDetailClick);

  //create new elements and remove old ones
  for (let image of imagesArr) {
  //  let row=table.insertRow();
    innerStr += createItem(
      image.imgUrl,
      //image.imgUrl,
      image.title,
      image.credit,
      image.id,
      image.alt
    )
 };
  
  listDiv.innerHTML = innerStr;

  // add event listeners for delete btns
  createBtnEventListener("imageListDeleteBtn", handleDeleteBtnClick);
  // add event listeners for edit btns
  createBtnEventListener("imageListEditBtn", handleEditBtnClick);

  createBtnEventListener("imgMoreDetails", handleImgDetailClick);
};

//Creates event listener for the delete buttons
const createBtnEventListener = (idKeyword, handleFunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //add events to new btns
  for (let btn of btns) {
    btn.addEventListener("click", handleFunction);
  }
};

export { initialImagesList, updateImagesList };
