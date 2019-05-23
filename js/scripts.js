/** ===============================================
*
*   VARIABLE DECLARATIONS & PAGE SETUP
*
*   ============================================ */

/** Number of users to fetch - variable makes program more robust for any future use */
const userCount = 12;
/**
 * English alphabet nationalities in Random User Generator API:
 * AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, NO, NL, NZ, US
 */
const nationalities = '&nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,us';
/** URL for Random User Generator API fetch request (12 users, English alphabet only) */
const url = `https://randomuser.me/api/?results=${userCount}${nationalities}`;
/** Global variable declarations for page elements */
const body = document.querySelector('body');
const searchContainer = document.querySelector('.search-container');
const gallery = document.querySelector('.gallery');
const modalContainer = document.createElement('div');
const prevButton = document.createElement('div');
const nextButton = document.createElement('div');

/** Markup generation for basic page setup */
modalContainer.setAttribute('class', 'modal-container');
modalContainer.style.display = 'none';
body.insertBefore(modalContainer, body.lastChild);

/** ===============================================
*
*   HELPER FUNCTIONS
*
*   ============================================ */

/**
 * Function to set multiple attributes on an element at once
 * @function
 * @name setAttributes
 * @param {Object} element  - The element to be modified
 * @param {Object} list  - key-value pairs of attributes and their values
 */
function setAttributes(element, list) {
  for(let attribute in list) {
    element.setAttribute(attribute, list[attribute]);
  }
}

/**
 * Function to create elements, set their attributes, and initialize their text
 * @function
 * @name initializeElement
 * @param {string} elementName  - The type of element to be created
 * @param {Object} attributes  - key-value pairs of attributes and their values
 * @param {string} [text=null]  - optional string containing element's text content
 * @returns {Object} - The created element
 */
function initializeElement(elementName, attributes, text = null) {
  const element = document.createElement(elementName);
  setAttributes(element, attributes);
  if(text !== null) {
    element.textContent = text;
  }
  return element;
}

/**
 * Function to determine if modal item's corresponding gallery card is visible
 * @function
 * @name determineMatchVisibility
 * @param {Object} modal  - The modal item being evaluated
 * @returns {Boolean} - Whether or not the modal item's corresponding gallery card is visible
 */
function determineMatchVisibility(modal) {
  const modalName = modal.lastChild.childNodes[1].textContent;
  const visibleNames = [];
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if(card.getAttribute('style') === null ||
      card.getAttribute('style') === '') {
        visibleNames.push(card.lastChild.firstChild.textContent);
    }
  })
  if(visibleNames.includes(modalName)) {
    return true;
  } else {
    return false;
  }
}

/* ================================================
*
*  SEARCH MARKUP GENERATION
*
*  ============================================= */

/**
* Create the search form, as well as its input field and its submit button and
* append each of them to the document
*/
const searchForm = initializeElement('form', {'action':'#', 'method':'get'});
const searchInput = initializeElement('input', {'type':'search',
  'class':'search-input', 'placeholder':'Search...'});
const submitButton = initializeElement('input', {'type':'submit',
  'class':'search-submit', 'value':'Search'});
searchForm.appendChild(searchInput);
searchForm.appendChild(submitButton);
searchContainer.appendChild(searchForm);

/** ===============================================
*
*   GALLERY MARKUP GENERATION
*
*   ============================================ */

/**
 * Function to create gallery cards
 * @function
 * @name generateGalleryCards
 * @param {number} count  - The number of gallery cards to create
 */
function generateGalleryCards(count) {
  for(let i = 0; i < count; i++) {
    /** Create card div element */
    const card = initializeElement('div', {'class':'card'});
    /** Create image container div element */
    const imageContainer = initializeElement('div',
      {'class':'card-img-container'});
    /** Create card img element */
    const image = initializeElement('img', {'class':'card-img',
      'src':'https://placehold.it/90x90', 'alt':'profile picture'});
    /** Append img element to image container and image container to card */
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
    /** Create info container div element */
    const infoContainer = initializeElement('div',
      {'class':'card-info-container'});
    /** Create name h3 element */
    const name = initializeElement('h3', {'id':'name',
      'class':'card-name cap'}, 'first last');
    /** Create email p element */
    const email = initializeElement('p', {'class':'card-text'}, 'email');
    /** Create location p element */
    const location = initializeElement('p', {'class':'card-text cap'}, 'city');
    /** Append name, email and location elements to info container */
    infoContainer.appendChild(name);
    infoContainer.appendChild(email);
    infoContainer.appendChild(location);
    /** Append info container to card */
    card.appendChild(infoContainer);
    /** Hide the card from the display until it has employee information */
    card.style.display = 'none';
    /** Append card to gallery */
    gallery.appendChild(card);
  }
}

/**
 * Function to populate gallery cards with random user information
 * @function
 * @name populateCards
 * @param {Object[]} users  - The user information to populate the cards with
 */
function populateCards(users) {
  const cards = document.querySelectorAll('.card');
  for(let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const user = users[i];
    /** Set card's image to user's profile picture */
    card.firstChild.firstChild.setAttribute('src', user.picture.large);
    /** Set card's name to user's name */
    card.lastChild.firstChild
      .textContent = `${user.name.first} ${user.name.last}`;
    /** Set card's email to user's email */
    card.lastChild.childNodes[1].textContent = user.email;
    /** Set card's city to user's city */
    card.lastChild.lastChild.textContent = `${user.location.city}`;
    /** Card has employee information - okay to display it in the gallery */
    card.style.display = '';
  }
}

/** Create gallery cards */
generateGalleryCards(userCount);

/** ===============================================
*
*   MODAL MARKUP GENERATION
*
*   ============================================ */

/**
 * Function to create modal items
 * @function
 * @name generateModalItems
 * @param {number} count  - The number of gallery modal items to create
 */
function generateModalItems(count) {
  for(let i = 0; i < count; i++) {
    /** Create modal div element */
    const modal = initializeElement('div', {'class':'modal'});
    /** Create and append modal close button markup */
    const closeButton = initializeElement('button',
      {'type':'button', 'class':'modal-close-btn'});
    closeButton.innerHTML = `<strong>X</strong>`;
    modal.appendChild(closeButton);
    /** Create modal info container */
    const infoContainer = initializeElement('div',
      {'class':'modal-info-container'});
    /** Create and append modal image markup */
    const image = initializeElement('img', {'class':'modal-img',
      'src':'https://placehold.it/125x125', 'alt':'profile picture'});
    infoContainer.appendChild(image);
    /** Create and append modal name markup */
    const name = initializeElement('h3', {'class':'modal-name cap'}, 'first last');
    infoContainer.appendChild(name);
    /** Create and append modal email markup */
    const email = initializeElement('p', {'class':'modal-text'}, 'email');
    infoContainer.appendChild(email);
    /** Create and append modal city markup */
    const city = initializeElement('p', {'class':'modal-text cap'}, 'city');
    infoContainer.appendChild(city);
    /** Create and append modal hr markup */
    const hr = document.createElement('hr');
    infoContainer.appendChild(hr);
    /** Create and append modal phone markup */
    const phone = initializeElement('p', {'class':'modal-text'}, 'phone');
    infoContainer.appendChild(phone);
    /** Create and append modal address markup */
    const address = initializeElement('p', {'class':'modal-text'}, 'address');
    infoContainer.appendChild(address);
    /** Create and append modal date of birth markup */
    const dob = initializeElement('p', {'class':'modal-text'}, 'dob');
    infoContainer.appendChild(dob);
    /** Append modal info container to modal item and remove it from view */
    modal.appendChild(infoContainer);
    modal.style.display = 'none';
    /** Append modal item to modal container */
    modalContainer.appendChild(modal);
  }
}

/**
 * Function to populate modal items with random user information
 * @function
 * @name populateModalItems
 * @param {Object[]} users  - The user information to populate the modal items with
 */
function populateModalItems(users) {
  const modals = document.querySelectorAll('.modal');
  for(let i = 0; i < modals.length; i++) {
    const modal = modals[i];
    const user = users[i];
    const formatedDOB = user.dob.date.substring(0, user.dob.date.indexOf('T'));
    /** Set modal item's image to user's profile picture */
    modal.lastChild.firstChild.setAttribute('src', user.picture.large);
    /** Set modal item's name to user's name */
    modal.lastChild.childNodes[1]
      .textContent = `${user.name.first} ${user.name.last}`;
    /** Set modal item's email to user's email */
    modal.lastChild.childNodes[2].textContent = user.email;
    /** Set modal item's city to user's city */
    modal.lastChild.childNodes[3].textContent = user.location.city;
    /** Set modal item's cell phone to user's cell phone */
    modal.lastChild.childNodes[5].textContent = user.cell;
    /** Set modal item's address to user's address */
    modal.lastChild.childNodes[6]
      .textContent = `${user.location.street}, ${user.location.state} ${user.location.postcode}`;
    /** Set modal item's date of birth to user's date of birth */
    modal.lastChild.lastChild.textContent = formatedDOB;
  }
}

/**
 * Function to create 'previous' and 'next' buttons in the modal container
 * @function
 * @name createModalToggleButtons
 */
function createModalToggleButtons() {
  const modalButtonContainer = initializeElement('div',
    {'class':'modal-btn-container'});
  /** Set attributes for 'previous' button */
  setAttributes(prevButton, {'type':'button', 'id':'modal-prev',
    'class':'modal-prev btn', });
  prevButton.textContent = 'Prev';
  /** Set attributes for 'next' button */
  setAttributes(nextButton, {'type':'button', 'id':'modal-next',
    'class':'modal-next btn', });
  nextButton.textContent = 'Next';
  /** Append the 'previous' and 'next' buttons to the modal container */
  modalButtonContainer.appendChild(prevButton);
  modalButtonContainer.appendChild(nextButton);
  modalContainer.appendChild(modalButtonContainer);
}

/** Create modal items and buttons */
generateModalItems(userCount);
createModalToggleButtons();

/** ===============================================
*
*   RANDOM USER GENERATOR API REQUEST LOGIC
*
*   ============================================ */

/**
 * Function to fetch data from Random User Generator API
 * @function
 * @name fetchData
 * @param {string} url  - The url containing the resources for the request
 * @returns {Object} - Response to the API data fetch request
 */
function fetchData(url) {
  return fetch(url)
           .then(checkStatus)
           .then(response => response.json())
           .catch(error => console
             .log('Something went wrong with the request: ', error))
}

/**
 * Function to check the status of API requests
 * @function
 * @name checkStatus
 * @param {Object} response  - Response to a previous API data fetch request
 * @returns {Promise} - Promise that has either been resolved or rejected based on response status
 */
function checkStatus(response) {
  if(response.ok){
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(resonse.statusText));
  }
}

/** Processing area */
fetchData(url)
  .then(data => {
    populateCards(data.results);
    return data;
  })
  .then(data => populateModalItems(data.results))
  .catch(error => console.log('There was an error...', error));


/** ===============================================
*
*   EVENT LISTENERS
*
*   ============================================ */

/** Event listener to generate modal items when gallery cards are clicked */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.modal').forEach(modal => {
      if(modal.lastChild.childNodes[1].textContent ===
        card.lastChild.firstChild.textContent) {
          modalContainer.style.display = '';
          modal.style.display = '';
      }
    })
  })
})

/** Event listener to close modal window when modal 'close' button is clicked */
document.querySelectorAll('.modal-close-btn').forEach(button => {
  button.addEventListener('click', function() {
    this.parentNode.style.display = 'none';
    modalContainer.style.display = 'none';
  })
})

/**
 * Event listener to filter the gallery cards based on the search term
 * within the search form's input field
 */
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.querySelector('.search-input');
  document.querySelectorAll('.card').forEach(card => {
    const name = card.lastChild.firstChild.textContent.toLowerCase();
    if(name.includes(input.value.toLowerCase())) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  })
})

/** Event listener to move to previous user(s) in the modal window */
prevButton.addEventListener('click', function() {
  document.querySelectorAll('.modal').forEach(modal => {
    let foundVisiblePrev = false;
    let prevModal = modal.previousElementSibling;
    /** Find current open modal item that isn't the first in the list */
    if(modal.style.display === '' && prevModal !== null) {
      /** Previous modal item's card is visible in the gallery - can proceed */
      if(determineMatchVisibility(prevModal)) {
        foundVisiblePrev = true;
      } else {
          /**
           * Previous modal item's gallery card is invisible - find most recent,
           * previous & visible gallery card
           */
          while(!foundVisiblePrev && prevModal.previousElementSibling !== null) {
            prevModal = prevModal.previousElementSibling;
            if(determineMatchVisibility(prevModal)) {
              /** Found most recent, previous & visible gallery card */
              foundVisiblePrev = true;
            }
          }
      }
      if(foundVisiblePrev) {
        /** Previous modal item's matching gallery card is visible - can proceed */
        modal.style.display = 'none';
        prevModal.style.display = '';
      }
    }
  })
})

/** Event listener to move to next user(s) in the modal window */
nextButton.addEventListener('click', function() {
  /**
   * Flag turns off once the first open modal item has been met; prevents the
   * event listener from processing each subsequent item as valid until
   * the end of the list
   */
  let flag = true;
  document.querySelectorAll('.modal').forEach(modal => {
    let foundVisibleNext = false;
    let nextModal = modal.nextElementSibling;
    /** Find current open modal item that isn't the last in the list */
    if(modal.style.display === '' &&
      modal.nextElementSibling.className !== 'modal-btn-container' && flag) {
        /** Next modal item's card is visible in the gallery - can proceed */
        if(determineMatchVisibility(nextModal)) {
          foundVisibleNext = true;
        } else {
          /**
           * Next modal item's gallery card is invisible - find the next
           * visible gallery card
           */
            while(!foundVisibleNext &&
              nextModal.nextElementSibling.className !== 'modal-btn-container') {
                nextModal = nextModal.nextElementSibling;
                if(determineMatchVisibility(nextModal)) {
                  /** Found next visible gallery card */
                  foundVisibleNext = true;
                }
            }
        }
    }
    if(foundVisibleNext) {
      /** Next modal item's matching gallery card is visible - can proceed */
      modal.style.display = 'none';
      nextModal.style.display = '';
      flag = false;
    }
  })
})
