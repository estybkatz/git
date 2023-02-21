class Property {
  id;
  img;
  imgUrl;
  title;
  credit;
  price;
  createdAT;
  description;
  subtitle;
  constructor(
    id,
    img,
    imgUrl,
    title,
    credit,
    price,
    createdAT,
    description,
    subtitle
  ) {
    this.id = id;
    this.img = img;
    this.imgUrl = imgUrl;
    this.credit = credit;
    this.title = title;
    this.price = price;
    this.createdAT = createdAT;
    this.description = description;
    this.subtitle = subtitle;
  }
}
export default Property;
