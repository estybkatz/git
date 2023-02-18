class User {
  id;
  name;
  lastName;
  state;
  country;
  city;
  street;
  houseNumber;
  zipcode;
  phone;
  email;
  password;
  bussinessClient;
  constructor(
    id,
    name,
    lastName,
    state,
    country,
    city,
    street,
    houseNumber,
    zipcode,
    phone,
    email,
    password
  ) {
    this.name = name;
    this.lastName = lastName;
    this.state = state;
    this.country = country;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
    this.zipcode = zipcode;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.bussinessClient = false;
    this.id = id;
  }
}
export default User;
