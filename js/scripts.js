/* ================================================
*
*  VARIABLE DECLARATIONS & PAGE SETUP
*
*  ==============================================*/

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



/* ================================================
*
*  EVENT LISTENERS
*
*  ==============================================*/
