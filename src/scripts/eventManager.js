// ***** PARKS (Shawna) ***** //

const handleParkSearch = event => {
  console.log("event", event)


  // getting reference to the dom for the first "input" tag it finds.(which gets added to the DOM when the builsAndAppendSearchform() function runs) and assigning it to variable "inputField". ** This is here to find the "input" tag that is part of the html string stored in the variable searchForm on the searchFormManager.js document

  const parksSelection = document.querySelector("#parks_by_feature")

  // get reference for dropdown
  // get value of reference

  // logs what was typed into the search box to the console
  console.log("user input", parksSelection)

  // the function searchParks is being called here. it was defined on the apiManager.js document
  searchParks(parksSelection.value)
  
  .then(fetchCallResponse => {
    // console.log(fetchCallResponse.parks)

    // function call takes in the recipes property of response. **  Defined on searchResultsManager.js
    displayParksHtml(fetchCallResponse)

    // Assigns blank string to parksInputField.value to clear out the search box after all functions have resolved
    parksSelection.value = ""
  })
}

// Function definition
// this is an function assigned to a variable "attachEventListenerToParksSearchButton" It is called from Main.js
const attachEventListenerToParksSearchButton = () => {

  // DOM is searched for first ID named "parks-search-button" - ID names need to be unique. it then assigns it to variable "parksSearchButton" 

  const parksSearchButton = document.getElementById("parks-search-button")

  // when the search button is clicked, it will execute the handlesearch function defined above. when someone clicks on searchButton, the handleSearch function will do all the things
  // The way handleSearch is used below, as the second argument on the event listener, is why the function definition above ("const handleSearch = event => {}") has an event parameter

  parksSearchButton.addEventListener("click", handleParkSearch)
}


// "event" above is a parameter ("const = handleParkSearch"), it's written out as event to tell you that that function is handling an event. it could be empty or called anything though.
//handleSearch as the 2nd argument after "click" is passing the event that happens ("click") as the argument to "event"





// ***** MEETUPS (author: Caroline Brownlee) ***** //

// Function that reads user input value in search field (passing inputField.value as an argument) and returns the fetch call from the API, which lives in searchEventbrite variable from apiManager.js. The function then iterates over the Eventbrite array in the promise, then for each event invokes the displayEventbrightHtml function from searchResultsManager.js, which takes a single event as an argument.

const handleEventbriteSearch = event => {
    // console.log(event)
    const inputField = document.querySelector("input")
    console.log(inputField.value)
  
    searchEventbrite(inputField.value)
    // promise
    .then(response => {
      console.log(response)
      response.events.forEach(event => {
          console.log(event)
          displayEventbriteHtml(event)
          inputField.value = ""
      });
    })

}       

// Function that attaches event listener to the search button from eventbriteSearchForm, which lives in the buildAndAppendEventbriteSearchForm function from searchFormManager.js, and on click invokes handleEventbriteSearch function which takes a single event as an argument. //

  const attachEventListenerToSearchButton = () => {
    const searchButton = document.getElementById("search-button")
    searchButton.addEventListener("click", handleEventbriteSearch(event))
  }

// ***** RESTAURANTS (Joseph) ***** //
const restaurantHandleSearch = event => {
    const inputFeild = document.querySelector("input")
    console.log("user input", inputFeild.value)

    searchRestaurants(inputFeild.value)
    .then(response => {
        displayRestaurantNameHTML(respone.names)
        inputFeild.value =""
    })
}

// const attachEventListenerToSearchButton = () => {
//     const searchButton = document.getElementById("search-button")
//     searchButton.addEventListener("click", restaurantHandleSearch)
// }


// ***** CONCERTS (Cassie) ***** //
