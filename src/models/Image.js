class Image {
  id;
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
export default Image;
