import checkIfConnected from "../utils/checkIfConnected.js";
let imagesArr;
let listDiv;
let isAdmin;
let deleteImage;
let showPopup;
let showPopupImgDetails;
var table=document.getElementById("imagesTable");

//this function will transfer data from homepage to this page
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
        <img src="${imgUrl}" class="img-fluid" alt="${alt}" id="imgMoreDetails-${id}"/>
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
  deleteImage(getIdFromClick(ev));
};

const handleEditBtnClick = (ev) => {
  showPopup(getIdFromClick(ev));
};

const handleImgDetailClick = (ev) => {
  console.log("err");
  showPopupImgDetails(getIdFromClick(ev));
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
//     let image=document.createElement('img');
//     image.src=image.imgUrl;
//  row.insertCell(0).innerHTML=imagesArr.indexOf(image)+1;
// row.insertCell(1).innerHTML=image.imgUrl;
// row.insertCell(2).appendChild(image);
// row.insertCell(3).innerHTML=image.credit;
// row.insertCell(4).innerHTML=image.id;
// row.insertCell(5).innerHTML=image.alt;    
// if (isAdmin){
// // row.insertCell(6).innerHTML=
    

// }
;
  }
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

//  <button type="button" class="btn btn-success w-100">
//    <i class="bi bi-currency-dollar"></i> Buy now
//  </button>;

//  <li class="list-group-item">
//    <div class="d-flex card-body">
//      <div class="col-md-2">
//        <img src="${imgUrl}" class="img-fluid" alt="${alt}" />
//      </div>

//      <h6 class="card-subtitle mb-5 text-muted">${imgUrl}</h6>
//      <h5 class="card-title col-md-1">${title}</h5>

//      <p class="card-text col-md-1">${credit}</p>

//      <div class="col-md-2 d-flex">${isAdmin ? adminBtns : ""}</div>
//    </div>
//  </li>;

// <li class="list-group-item">
//     <div class="row card-body d-flex">

//         <img src="${imgUrl}" class="img-fluid col-md-2" alt="${alt}" />
//           <h6 class="card-subtitle mb-2 text-muted col-md-5">
//             ${imgUrl}
//             </h6>
//             <h5 class="card-title col-md-1">${title}</h5>
//             <h6 class="card-subtitle mb-1 text-muted col-md-2">
//             ${credit}
//             </h6>

// const adminBtns = `
//   <div class="col-md-1">
//   <button type="button" class="btn btn btn-light w-100" id="imageListEditBtn-${id}">
//     <i class="bi bi-pen-fill"></i>
//   </button>
//   </div>
//   <div class="col-md-1">
//   <button type="button" class="btn btn btn-light w-100" id="imageListDeleteBtn-${id}">
//   <i class="bi bi-trash3-fill"></i>
//   </button>
//   </div>
//   `;
//   return `
//   <li class="list-group-item">
//     <div class="row">
//         <div class="col-md-2">
//         <img src="${imgUrl}" class="img-fluid" alt="${title}"style="margin: 1.5rem; width: 8rem;
//         height: 8rem;"/>
//         </div>
//         <div class="col-md-6">
//         <div>${imgUrl}</div>
//         </div>
//         <div class="col-md-1">
//         <h5 class="card-title">${title}</h5>
//         </div>
//         <div class="col-md-1">
//         <h5 class="card-title">${Credit}</h5>
//         </div>
//         ${isAdmin ? adminBtns : ""}
//     </div>
//     </li>
//   `;
// };
