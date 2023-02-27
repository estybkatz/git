import Property from "../models/Property.js";

let id = 1;
let nextUserId = 1;

const createData = () => {
  // fetch("http://127.0.0.1:5500/src/initialData/data.json")
  //   .then(function (response) {
  //     console.log("err");
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     for (let i = 0; i < data.length; i++) {
  //       console.log(data[i]);
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log("error = " + error);
  //   });

  let propertiesArr = [
    new Property(
      id++,
      Property.img,
      "https://images.pexels.com/photos/15371312/pexels-photo-15371312.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "people",
      "cctitle",
      "create by ester",
      350,
      "createAT",
      "description",
      "subtitle"
    ),
    new Property(
      id++,
      Property.img,
      "https://images.pexels.com/photos/15658380/pexels-photo-15658380.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "alt",
      "bbtitle",
      "credit",
      600,
      "createdat",
      "description",
      "subtitle"
    ),
    new Property(
      id++,
      Property.img,
      "https://images.pexels.com/photos/2718416/pexels-photo-2718416.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "alt",
      "aatitle",
      "credit",
      "700",
      "createdAT",
      "description",
      "subtitle"
    ),
    // new Property(
    //   id++,
    //   "John's raft",
    //   9.9,
    //   `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
    //     Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
    //   "./assets/imgs/4.jpg"
    // ),
    // new Property(
    //   id++,
    //   "John's pie",
    //   3.14,
    //   `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
    //     Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
    //   "./assets/imgs/5.jpg"
    // ),
    // new Property(
    //   id++,
    //   "Kart's dream house",
    //   2.5,
    //   `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
    //     Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
    //   "./assets/imgs/6.jpg"
    // ),
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
