/* ================================================
*
*  VARIABLE DECLARATIONS & PAGE SETUP
*
*  ==============================================*/

const body = document.querySelector('body');
const searchContainer = document.querySelector('.search-conntainer');
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
