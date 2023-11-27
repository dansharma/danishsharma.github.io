const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];


/* Declaring the alternative text for each image file */
const text = {
    'pic1.jpg' : ' human eye',
    'pic2.jpg' : 'Rocks',
    'pic3.jpg' : 'flower',
    'pic4.jpg' : ' wall with a paintaing',
    'pic5.jpg' : 'insect on laef'
  }

/* Looping through images */
for (const i of images) {
    const newImage = document.createElement('img'); 
    newImage.setAttribute('src', `photo/${i}`);
    newImage.setAttribute('alt', text[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;   
        displayedImage.alt = e.target.alt;
    });
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    overlay.style.backgroundColor = 'rgba(1,1,1,0.5)';
    
    if (btnClass === 'dark') {
      overlay.style.backgroundColor = 'rgba(1,1,1,0.5)';
      btn.setAttribute('class','light');
    } else {
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      btn.setAttribute('class','dark');
    }
  });

