import checkIfConnected from "../utils/checkIfConnected.js";
let propertiesArr;
let listDiv;
let isAdmin;
let deleteProperty;
let showPopup;
//this function will transfer data from homepage to this page
const initialPropertiesList = (
  propertiesArrFromHomePage,
  isAdminParam,
  deletePropertyFromHomePage,
  showPopupFromHomePage
) => {
  listDiv = document.getElementById("home-page-properties-list");
  isAdmin = isAdminParam;
  deleteProperty = deletePropertyFromHomePage;
  showPopup = showPopupFromHomePage;
  updatePropertiesList(propertiesArrFromHomePage);
};

const updatePropertiesList = (propertiesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new list.
    if the list already exists it will remove the old one and
    create new one
  */
  propertiesArr = propertiesArrFromHomePage;
  createList();
};

const createItem = (imgUrl, title, credit, id, alt) => {
  const adminBtns = `
  <i class="bi bi-trash3-fill" id="propertyListDeleteBtn-${id}"></i>
   <i class="bi bi-pencil-square" id="propertyListEditBtn-${id}"></i> 
  `;
  return `
  <li class="list-group-item">
    <div class="row">
        <div class="col-md-2">
        <img src="${imgUrl}" class="img-fluid" alt="${alt}" />
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
            ${imgUrl}
            </h6>
            <p class="card-text">
            ${credit}
            </p>
        </div>
        </div>
        <div class="col-md-2">
       
        ${isAdmin ? adminBtns : ""}
        </div>
    </div>
    </li>
  `;
};

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

const handleDeleteBtnClick = (ev) => {
  deleteProperty(getIdFromClick(ev));
};

const handleEditBtnClick = (ev) => {
  showPopup(getIdFromClick(ev));
};

const clearEventListeners = (idKeyword, handleFunction) => {
  //get all old btns
  let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //remove old events
  for (let btn of btnsBefore) {
    btn.removeEventListener("click", handleFunction);
  }
};

const createList = () => {
  let innerStr = "";
  //clear event listeners for delete btns
  clearEventListeners("propertyListDeleteBtn", handleDeleteBtnClick);
  //clear event listeners for edit btns
  clearEventListeners("propertyListEditBtn", handleEditBtnClick);

  //create new elements and remove old ones
  for (let property of propertiesArr) {
    innerStr += createItem(
      property.img,
      property.imgUrl,
      property.title,
      property.credit,
      property.id,
      property.alt
    );
  }
  listDiv.innerHTML = innerStr;
  // add event listeners for delete btns
  createBtnEventListener("propertyListDeleteBtn", handleDeleteBtnClick);
  // add event listeners for edit btns
  createBtnEventListener("propertyListEditBtn", handleEditBtnClick);
};

//Creates event listener for the delete buttons
const createBtnEventListener = (idKeyword, handleFunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //add events to new btns
  for (let btn of btns) {
    btn.addEventListener("click", handleFunction);
  }
};

export { initialPropertiesList, updatePropertiesList };

//  <button type="button" class="btn btn-success w-100">
//    <i class="bi bi-currency-dollar"></i> Buy now
//  </button>;
