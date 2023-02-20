class User {
  id;
  name;
  lastName;
  state;
  country;
  city;
  street;
  houseNumber;
  zipCode;
  phone;
  email;
  password;
  isAdmin;

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
    password,
    isAdmin
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
    this.isAdmin = isAdmin;
  }
  // checkBusinessClient = () => {
  //   debugger;
  //   let btnBusinessClient;
  //   if (btnBusinessClient.checked) {
  //     return (this.btnBusinessClient = true);
  //   } else {
  //     return (this.btnBusinessClient = false);
  //   }
  // };
}

export default User;
