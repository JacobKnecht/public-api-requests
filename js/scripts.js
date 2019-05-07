/* ================================================
*
*  VARIABLE DECLARATIONS & PAGE SETUP
*
*  ==============================================*/
const userCount = 12;
const url = `https://randomuser.me/api/?results=${userCount}`;
const body = document.querySelector('body');
const searchContainer = document.querySelector('.search-container');
const gallery = document.querySelector('.gallery');
const modalContainer = document.createElement('div');

modalContainer.setAttribute('class', 'modal-container');

/* ================================================
*
*  HELPER FUNCTIONS
*
*  ==============================================*/

//function to set multiple attributes at once
function setAttributes(element, list) {
  for(let attribute in list) {
    element.setAttribute(attribute, list[attribute]);
  }
}

/* ================================================
*
*  SEARCH MARKUP GENERATION
*
*  ==============================================*/

const searchForm = document.createElement('form');
setAttributes(searchForm, {'action':'#', 'method':'get'});
const searchInput = document.createElement('input');
setAttributes(searchInput, {'type':'search', 'class':'search-input',
  'placeholder':'Search...'});
const submitButton = document.createElement('input');
setAttributes(submitButton, {'type':'submit', 'class':'search-submit',
  'value':'Search'});
searchForm.appendChild(searchInput);
searchForm.appendChild(submitButton);
searchContainer.appendChild(searchForm);

/* ================================================
*
*  GALLERY MARKUP GENERATION
*
*  ==============================================*/

//function to create gallery cards
function generateGalleryCards(count) {
  for(let i = 0; i < count; i++) {
    //create card div element
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    //create image container div element
    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'card-img-container');
    //create card img element
    const image = document.createElement('img');
    setAttributes(image, {'class':'card-img',
      'src':'https://placehold.it/90x90', 'alt':'profile picture'});
    //append img element to image container and image container to card
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
    //create info container div element
    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('class', 'card-info-container');
    //create name h3 element
    const name = document.createElement('h3');
    setAttributes(name, {'id':'name', 'class':'card-name cap'});
    name.textContent = 'first last';
    //create email p element
    const email = document.createElement('p');
    email.setAttribute('class', 'card-text');
    email.textContent = 'email';
    //create location p element
    const location = document.createElement('p');
    location.setAttribute('class', 'card-text cap');
    location.textContent = 'city, state';
    //append name, email and location elements to info container
    infoContainer.appendChild(name);
    infoContainer.appendChild(email);
    infoContainer.appendChild(location);
    //append info container to card
    card.appendChild(infoContainer);
    //append card to gallery
    gallery.appendChild(card);
  }
}

//function to populate gallery cards with random user information
function populateCards(users) {
  const cards = document.querySelectorAll('.card');
  for(let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const user = users[i];
    //set card's image to user's profile picture
    card.firstChild.firstChild.setAttribute('src', user.picture.large);
    //set card's name to user's name
    card.lastChild.firstChild.textContent = `${user.name.first} ${user.name.last}`;
    //set card's email to user's email
    card.lastChild.childNodes[1].textContent = user.email;
    //set card's city + state to user's city + state
    card.lastChild.lastChild.textContent = `${user.location.city}, ${user.location.state}`;
  }
}

//create gallery cards
generateGalleryCards(userCount);

/* ================================================
*
*  MODAL MARKUP GENERATION
*
*  ==============================================*/



/* ================================================
*
*  RANDOM USER GENERATOR API REQUEST LOGIC
*
*  ==============================================*/

//function to fetch data from Random User Generator API
function fetchData(url) {
  return fetch(url)
           .then(checkStatus)
           .then(response => response.json())
           .catch(error => console.log('Something went wrong with the request: ', error))
}

//function to check the status of API requests
function checkStatus(response) {
  if(response.ok){
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(resonse.statusText));
  }
}

//logic/processing area
fetchData(url)
  .then(data => {
    const users = data.results;

  });



/* ================================================
*
*  EVENT LISTENERS
*
*  ==============================================*/
