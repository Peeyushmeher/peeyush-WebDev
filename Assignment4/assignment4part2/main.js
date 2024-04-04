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
imageFilenames.forEach((filename) => { 
    const newImage = document.createElement('img'); 
    newImage.setAttribute('src', `images/${filename}`); 
    newImage.setAttribute('alt', imageAltText[filename]); 
    thumbBar.appendChild(newImage); 
  
    // Add a click event listener to each <img> inside the thumb-bar <div> 
    newImage.addEventListener('click', () => { 
      displayedImage.src = newImage.src; 
      displayedImage.alt = newImage.alt; 
    }); 
  }); 
  

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => { 
  const className = btn.getAttribute('class'); 
  if (className === 'dark') { 
    btn.setAttribute('class', 'light'); 
    btn.textContent = 'Lighten'; 
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
  } else 
