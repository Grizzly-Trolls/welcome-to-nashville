// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (author: Caroline Brownlee) ***** //

// Function that reads user input value in search field (passing inputField.value as an argument) and returns the fetch call from the API, which lives in searchEventbrite variable from apiManager.js. The function then iterates over the Eventbrite array in the promise, then for each event invokes the displayEventbrightHtml function from searchResultsManager.js, which takes a single event as an argument.

// const handleEventbriteSearch = event => {
//     // console.log(event)
//     const inputField = document.querySelector("input")
//     console.log(inputField.value)
  
//     searchEventbrite(inputField.value)
//     // promise
//     .then(response => {
//       console.log(response)
//       response.events.forEach(event => {
//           console.log(event)
//           displayEventbriteHtml(event)
//           inputField.value = ""
//       });
//     })

// }       

// Function that attaches event listener to the search button from eventbriteSearchForm, which lives in the buildAndAppendEventbriteSearchForm function from searchFormManager.js, and on click invokes handleEventbriteSearch function which takes a single event as an argument. //

  const attachEventListenerToSearchButton = () => {
    const searchButton = document.getElementById("search-button")
    // searchButton.addEventListener("click", handleEventbriteSearch(event))
  }

// ***** RESTAURANTS (Joseph) ***** //

const restaurantHandleSearch = event => {
  console.log("hopefully this will work")
    const inputField = document.querySelector("#restaurant-input")
    console.log("", inputField.value)

    searchRestaurants(inputField.value)
    .then(response => {
      // console.log(response)
      response.restaurants.forEach(restaurant => {
        // console.log(restaurant)
        buildRestaurantHTML(restaurant)
        inputField.value =""
      });
      
    })
}

const attachEventListenerToRestaurantSearchButton = (event) => {
  const searchButton = document.getElementById("restaurant-search-button")
  // console.log("show up", searchButton)
    searchButton.addEventListener("click", restaurantHandleSearch)
}

const restaurantSaveButton = document.querySelector("#restaurantSaveButton")
const eventListenerToRestaurantSaveButton = (event) => {
  restaurantSaveButton.addEventListener("click",buildRestaurantHTML)
  console.log("event", event)
}
// ***** CONCERTS (Cassie) ***** //

// "event" is here just to indicate that the function is handling an event.
const handleConcertsSearch = event => {
  console.log("event", event)

  // Searching the DOM for the first concert-input tag (which gets added to the DOM when the buildAndAppendSearchForm() function runs) and assigning it to variable "inputField"
  const concertsInputField = document.querySelector("#concert-input")

// Logs what was typed into the search box to the console.
  console.log("user input", concertsInputField.value)

  // Function call that accepts whatever was typed into the search box as a parameter. searchConcerts is defined in apiManager.js
  // WE STOPPED HERE!!!!!!!!
  searchConcerts(concertsInputField.value)

  .then(fetch_call_response => {
    // console.log(response.recipes)

    // Function call takes in the recipes property of response. Defined on searchResultsManager.js page.
    displayConcertsHtml(fetch_call_response)

    // Assigns blank string to inputField.value to clear out the search box after all functions have resolved.
    concertsInputField.value = ""
  })
}

// Anonymous function assigned to variable "attachEventListenerToConcertsSearchButton". Called from main.js
const attachEventListenerToConcertsSearchButton = () => {

// DOM is searched for first id named "concerts-search-button" and assigns it to variable "concertsSearchButton"
const concertsSearchButton = document.getElementById("concerts-search-button")

// Listens for a click on the "concertsSearchButton" element. When clicked, the function "handleConcertsSearch" is executed. *Can't put parentheses after function name because it would immediately invoke it.
concertsSearchButton.addEventListener("click", handleConcertsSearch)
}