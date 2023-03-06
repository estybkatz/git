import Property from "../models/Property.js";

let id = 1;
let nextUserId = 1;

const createData = () => {

  let propertiesArr = [
    new Property(
      id++,
      "https://images.pexels.com/photos/5976142/pexels-photo-5976142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Man with tallis praying",
      "Man with tallis praying",
      "Cottonbro Studio",
      350,
      "1/10/2020",
      "A man in synagogue praying with a tallis and holy book",
      "Praying man"
    ),
    new Property(
      id++,
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Mountain Covered Snow Under Star",
      "Mountain Covered Snow Under Star",
      "Eberhard Grossgasteiger",
      600,
      "23/02/2014",
      "Snow on the mountains, covering them",
      "Snow"
    ),
    new Property(
      id++,
      "https://images.pexels.com/photos/15695990/pexels-photo-15695990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Beautiful Landscape",
      "Beautiful Landscape",
      "Valentinos Loucaides",
      "700",
      "22/8/21",
      "Rivers going down from mountains, on a cloudy day",
      "Rivers and mountains"
    )
  ];
  return propertiesArr;
};

const setInitialData = () => {
  let properties = localStorage.getItem("props");
  if (properties) {
    return;
  }
  localStorage.setItem("props", JSON.stringify(createData()));
  localStorage.setItem("nextid", id + "");
  localStorage.setItem("nextUserId", nextUserId + "");
};

setInitialData();
