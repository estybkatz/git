class Property {
  id;
  img;
  imgUrl;
  alt;
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
    alt,
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
    this.alt = alt;
    this.title = title;
    this.credit = credit;
    this.price = price;
    this.createdAT = createdAT;
    this.description = description;
    this.subtitle = subtitle;
  }
}
export default Property;
