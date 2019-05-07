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
modalContainer.style.display = 'none';
body.insertBefore(modalContainer, body.lastChild);

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
    card.lastChild.firstChild
      .textContent = `${user.name.first} ${user.name.last}`;
    //set card's email to user's email
    card.lastChild.childNodes[1].textContent = user.email;
    //set card's city to user's city
    card.lastChild.lastChild.textContent = `${user.location.city}`;
  }
}

//create gallery cards
generateGalleryCards(userCount);

/* ================================================
*
*  MODAL MARKUP GENERATION
*
*  ==============================================*/

//function to create a modal item
function generateModalItems(count) {
  for(let i = 0; i < count; i++) {
    //create modal div element
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    //create and append modal close button markup
    const closeButton = document.createElement('button');
    setAttributes(closeButton, {'type':'button', 'id':'modal-close-btn',
      'class':'modal-close-btn'});
    closeButton.innerHTML = `<strong>X</strong>`;
    modal.appendChild(closeButton);
    //create modal info container
    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('class', 'modal-info-container');
    //create and append modal image markup
    const image = document.createElement('img');
    setAttributes(image, {'class':'modal-img',
      'src':'https://placehold.it/125x125', 'alt':'profile picture'});
    infoContainer.appendChild(image);
    //create and append modal name markup
    const name = document.createElement('h3');
    name.setAttribute('class', 'modal-name cap');
    name.textContent = 'first last';
    infoContainer.appendChild(name);
    //create and append modal email markup
    const email = document.createElement('p');
    email.setAttribute('class', 'modal-text');
    email.textContent = 'email';
    infoContainer.appendChild(email);
    //create and append modal city markup
    const city = document.createElement('p');
    city.setAttribute('class', 'modal-text cap');
    city.textContent = 'city';
    infoContainer.appendChild(city);
    //create and append modal hr markup
    const hr = document.createElement('hr');
    infoContainer.appendChild(hr);
    //create and append modal phone markup
    const phone = document.createElement('p');
    phone.setAttribute('class', 'modal-text');
    phone.textContent = 'phone';
    infoContainer.appendChild(phone);
    //create and append modal address markup
    const address = document.createElement('p');
    address.setAttribute('class', 'modal-text');
    address.textContent = 'address';
    infoContainer.appendChild(address);
    //create and append modal date of birth markup
    const dob = document.createElement('p');
    dob.setAttribute('class', 'modal-text');
    dob.textContent = 'dob';
    infoContainer.appendChild(dob);
    //append modal info container to modal item and remove it from view
    modal.appendChild(infoContainer);
    modal.style.display = 'none';
    //append modal item to modal container
    modalContainer.appendChild(modal);
  }
}

//function to populate modal items with random user information
function populateModalItems(users) {
  const modals = document.querySelectorAll('.modal');
  for(let i = 0; i < modals.length; i++) {
    const modal = modals[i];
    const user = users[i];
    //set modal item's image to user's profile picture
    modal.lastChild.firstChild.setAttribute('src', user.picture.large);
    //set modal item's name to user's name
    modal.lastChild.childNodes[1]
      .textContent = `${user.name.first} ${user.name.last}`;
    //set modal item's email to user's email
    modal.lastChild.childNodes[2].textContent = user.email;
    //set modal item's city to user's city
    modal.lastChild.childNodes[3].textContent = user.location.city;
    //set modal item's cell phone to user's cell phone
    modal.lastChild.childNodes[5].textContent = user.cell;
    //set modal item's address to user's address
    modal.lastChild.childNodes[6]
      .textContent = `${user.location.street}, ${user.location.state} ${user.location.postcode}`;
    //set modal item's date of birth to user's date of birth
    modal.lastChild.lastChild.textContent = user.dob.date;
  }
}

//function to create 'previous' and 'next' buttons in the modal container
function createModalToggleButtons() {
  const modalButtonContainer = document.createElement('div');
  modalButtonContainer.setAttribute('class', 'modal-btn-container');
  const prevButton = document.createElement('div');
  setAttributes(prevButton, {'type':'button', 'id':'modal-prev',
    'class':'modal-prev btn', });
  prevButton.textContent = 'Prev';
  const nextButton = document.createElement('div');
  setAttributes(nextButton, {'type':'button', 'id':'modal-next',
    'class':'modal-next btn', });
  nextButton.textContent = 'Next';
  modalButtonContainer.appendChild(prevButton);
  modalButtonContainer.appendChild(nextButton);
  modalContainer.appendChild(modalButtonContainer);
}

//create modal items and buttons
generateModalItems(userCount);
createModalToggleButtons();

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
           .catch(error => console
             .log('Something went wrong with the request: ', error))
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
    populateCards(data.results);
    return data;
  })
  .then(data => populateModalItems(data.results))
  .catch(error => console.log('There was an error...', error));


/* ================================================
*
*  EVENT LISTENERS
*
*  ==============================================*/

//event listener to generate modal items when gallery cards are clicked
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    console.log(card.lastChild.firstChild.textContent);
  })
})

//event listener to close modal window when modal close button is clicked
