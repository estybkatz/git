// let propertiesArr;
// let GalleryDiv;
// //let isAdmin;
// //let deleteProperty;
// //let showPopup;
// //this function will transfer data from homepage to this page
// const initialPropertiesGallery = (
//   propertiesArrFromHomePage
//   //isAdminParam,
//   //showPopupFromHomePage
// ) => {
//   GalleryDiv = document.getElementById("home-page-properties-gallery");
//   //isAdmin = isAdminParam;
//   // showPopup = showPopupFromHomePage;
//   updatePropertiesGallery(propertiesArrFromHomePage);
// };

// const updatePropertiesGallery = (propertiesArrFromHomePage) => {
//   /*
//     this function will get data from homepage and create new list.
//     if the list already exists it will remove the old one and
//     create new one
//   */
//   propertiesArr = propertiesArrFromHomePage;
//   createGallery();
// };

// const createItem = (name, img) => {
//   return `<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active" data-bs-interval="5000">
//       <img src="${img}" class="d-block w-100" alt="${name}">
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
// `;
// };

// //const getIdFromClick = (ev) => {
// //let idFromId = ev.target.id.split("-"); // split the id to array
// //if (!ev.target.id) {
// /*
//         if press on icon then there is no id
//         then we need to take the id of the parent which is btn
//       */
// //idFromId = ev.target.parentElement.id.split("-");
// //   }
// //   return idFromId[1];
// // };

// // const handleDeleteBtnClick = (ev) => {
// //   deleteProperty(getIdFromClick(ev));
// // };

// // const handleEditBtnClick = (ev) => {
// //   showPopup(getIdFromClick(ev));
// // };

// // const clearEventListeners = (idKeyword, handleFunction) => {
// //   //get all old btns
// //   let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
// //   //remove old events
// //   for (let btn of btnsBefore) {
// //     btn.removeEventListener("click", handleFunction);
// //   }
// // };

// const createGallery = () => {
//   //let innerStr = "";
//   //clear event listeners for delete btns
//   // clearEventListeners("propertyListDeleteBtn", handleDeleteBtnClick);
//   //clear event listeners for edit btns
//   //clearEventListeners("propertyListEditBtn", handleEditBtnClick);

//   //create new elements and remove old ones
//   for (let property of propertiesArr) {
//     innerStr += createItem(property.name, property.imgUrl);
//   }
//   GalleryDiv.innerHTML = innerStr;
//   // add event listeners for delete btns
//   //createBtnEventListener("propertyListDeleteBtn", handleDeleteBtnClick);
//   // add event listeners for edit btns
//   //createBtnEventListener("propertyListEditBtn", handleEditBtnClick);
// };

// //Creates event listener for the delete buttons
// //const createBtnEventListener = (idKeyword, handleFunction) => {
// // let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
// //add events to new btns
// //for (let btn of btns) {
// //btn.addEventListener("click", handleFunction);
// // }
// //};

// export { initialPropertiesGallery, updatePropertiesGallery };
