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
  businessClient;
  constructor(
    id,
    name,
    lastName,
    state,
    country,
    city,
    street,
    houseNumber,
    zipCode,
    phone,
    email,
    password
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.state = state;
    this.country = country;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
    this.zipCode = zipCode;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.businessClient = false;
  }
}
export default User;
