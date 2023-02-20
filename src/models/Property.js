class Property {
  id;
  img;
  imgUrl;
  title;
  credit;
  price;
  constructor(id, img, imgUrl, title, credit, price) {
    this.id = id;
    this.img = img;
    this.imgUrl = imgUrl;
    this.credit = credit;
    this.title = title;
    this.price = price;
  }
}
export default Property;
