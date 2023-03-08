# Pic Up
This project is a  system of advertising images for sell and viewing them.
It uses HTML, JS and CSS.
In this site we use arrays of objects, and functions working on them. 
We also defined functions using the objects and the arrays, with input from the users, the properties of the images.

## Table of Contents

- [Structure of the site](#Structure)
- [Technologies used](#Technology)
- [Functions used](#Functions)
- [Activating the site ](#Activate)
- [License](#license)

## Structure

We defined an object of users which has two different types, a business client which can add and edit pictures, and a regular client that can only view the pictures.

The users can sign up, and log in, and change their details.

We also defined an object of Image, which can be updated and managed and ordered.

We defined dynamical arrays of objects, and managed them, as well as managed the places of the images, while adding and deleting items and sorting the items.

Also we use validations of multiple types of strings using regex.
The site is also responsive

We have 3 different options to view the images.
We used functions that received input from the users, as text input, and button click, and clicks on the page.
We also used validation methods for all inputs using regex methods.
We used local storage to put in it and take from it variables.
The site has 3 modes of display: Gallery, List and Carousel , which can be changed using a button. 
It is possible to sort the pictures  in an ascending and descending order according to the title.
In list mode and gallery mode pressing the pictures pops them up.
There is a navbar, which changes according to whatever a user is connected or not.
In the list mode, only a business user can edit pictures.
There is a sign up area, and a user profile area, which are all validated so that the input is correct.
There is an Add Pic button which allows you to add a picture, according to valid input of the pictures.
This site works on Live Server technology, and is not up on the net.

## Technologies used
The site uses JS which works using Live Server, and does not work without the Live Server technology.
It uses array's methods of : sort, find, for,  length, match, filter.
We use several components in this site, a carousel, a list, a gallery, two pop ups.
We use initial data which is stored in ./initialData/initialData.js
We use localStorage to store the variables of the site, the arrays of users and Images.
We have two different classes here, the Image class and User class, which have defined constructors, and we work on their arrays.
We Validated the inputs using regex.

## Functions

### Login and Registration

- **User registration**: Users can create a new account by providing their name, email, and password, they can also add different details which are not mandatory.  All the details are validated.
- **User login**: Users can log in to their account using their email and password.

### Profile Management

- **View profile**: Users can view their profile information, including their name, email, and other details. Users can update their profile information, including their name and profile picture.

### Image Management

- **Create Image**: Users can create a new image by providing a url, title, subtitle, price, alt,creation date and description.
- **View Image**: Users can view a image and its details, including the credit, date, and price.
- **Edit Image**: Users can edit an existing image by updating its properties.
- **Delete Image**: Users can delete an existing image.

### Display mode.
- **Display Modes**: Users can change their Display mode using buttons. and in every mode they can sort the images according to title, and search for a certain image.

## Activate
To activate the site you need to use a live server, so as it can use the local JS files.
You need to open it using a Live Server, from VSC or another way of activating it.

## License

The site is open to everyone for free use
The protected copyrights belong to the owners of the photos on the site
