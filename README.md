# Treehouse Techdegree Project 5 - Public API Requests

Objective:
  The purpose of this project is to demonstrate API requests through a public
  request to the Random User Generator API. The user information pulled is used
  to display 12 employees in an employee gallery and display their information.
  These employees are displayed as cards, which can be clicked to reveal more
  detailed information in a modal window. The project allows the employee
  gallery to be filtered by name via entering a name into the search form.
  This project is designed to meet the requirement for an 'Exceeds Expectations'
  grade.

Functionality:
  The project makes an API request through the fetch method, which verifies the
  status of any response and then converts valid responses to JSON. Various
  functions are used to generate the markup of the gallery cards, modal items,
  and the search form. Functions are also used to populate the gallery cards
  and modal items with the user information pulled from the Random User
  Generator API, and event listeners provide functionality to the gallery cards,
  search form fields, and modal window buttons.

Implementation:
  The project is implemented through the following categories and their
  respective functions and event listeners:
  1.) Helper Functions :
    1A.) setAttributes(element, list) : Receives as parameters an element to
         modify and a list of attributes to apply to the element.
    1B.) initializeElement(element, attributes, text = null) : Receives as
         parameters an element to modify, a list of attributes to apply to the
         element and an optional string parameter to set the element's text
         value. Returns the initialized element.
    1C.) determineMatchVisibility(modal) : Receives as a parameter a modal item.
         The function determines whether the modal item's corresponding gallery
         card is visible within the employee gallery, and returns a Boolean
         indicating the result.
  2.) Search Markup Generation :
    Contains no function declarations, but utilizes initializeElement() to
    create the search elements and then appends them to the document.
  3.) Gallery Markup Generation :
    3A.) generateGalleryCards(count) : Receives as a parameter the number of
         gallery cards to create. It then generates the gallery card markup for
         the document.
    3B.) populateCards(users) : Receives as a parameter a list of employees. The
         function uses this list of employee information to populate the
         gallery cards with the designated number of randomly generated
         employees.
  4.) Modal Markup Generation :
    4A.) generateModalItems(count) : Receives as a parameter the number of
         modal items to create. It then generates the modal item markup for the
         document.
    4B.) populateModalItems(users) : Receives as a parameter a list of
         employees. The function uses this list of employee information to
         populate the modal items with the designated number of randomly
         generated employees.
    4C.) createModalToggleButtons() : Creates the 'previous' and 'next' buttons
         for the modal item toggle functionality and appends them to the modal
         window/container.
  5.) Random User Generator API Request Logic :
    5A.) fetchData(url) : Receives as a parameter the url resources for the API
         request. It then uses the fetch method to request the resources,
         validates the response, and then parses the response into JSON. Returns
         the response to the request for further processing.
    5B.) checkStatus(response) : Receives as a parameter a response to an API
         fetch request and then validates the request. Returns a Promise that
         has either been resolved or rejected depending on the status of the
         response.
  6.) Event Listeners :
    6A.) document.querySelectorAll('.card').forEach(card => {
           card.addEventListener('click')) : An event listener to generate modal
           items when gallery cards are clicked.
    6B.) document.querySelectorAll('.modal-close-btn').forEach(button => {
           button.addEventListener('click')) : An event listener to close modal
           window when modal 'close' button is clicked.
    6C.) searchForm.addEventListener('submit') : An event listener to filter the
         gallery cards based on the search term within the search form's input
         field.
    6D.) prevButton.addEventListener('click') : An event listener to move to
         previous user(s) in the modal window.
    6E.) nextButton.addEventListener('click') : An event listener to move to
         next user(s) in the modal window.

Style Changes:
  The following is a list of the CSS classes and properties that were changed
  to personalize the project:
    (List Format: selector : property -> (changed to) new value) :
    1.)   document    : @import          ->
    url('https://fonts.googleapis.com/css?family=Fredericka+the+Great|Michroma');        

    2.)   body        : background       -> rgba(0, 51, 102, 0.9)
    3.)   header h1   : font-family      -> 'Fredericka the Great', cursive
                      : color            -> rgba(255, 255, 255, 0.9)
    4.)   .card-name  : font-family      -> 'Fredericka the Great', cursive
    5.)   .modal-name : font-family      -> 'Fredericka the Great', cursive

    Added within @media (min-width: 1024px) :
    6.)   .card:hover : box-shadow       -> 1px 1px 5px inset, -1px -1px 5px inset
