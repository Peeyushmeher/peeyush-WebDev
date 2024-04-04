// Name: peeyush yerremsetty 
	// File: index.html
	// Date: April 4 2024 
    // Purpose: This is a image gallary 

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltText = { 
    'pic1.jpg': 'human eye', 
    'pic2.jpg': 'waves', 
    'pic3.jpg': 'flowers', 
    'pic4.jpg': 'hieroglyplics ', 
    'pic5.jpg': 'butterfly'  
  };

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
