// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (author: Caroline Brownlee) ***** //

// Function that reads user input value in search field (passing inputField.value as an argument) and returns the fetch call from the API, which lives in searchEventbrite variable from apiManager.js. The function then iterates over the Eventbrite array in the promise, then for each event invokes the displayEventbrightHtml function from searchResultsManager.js, which takes a single event as an argument.

const handleEventbriteSearch = () => {
    const inputField = document.querySelector("#eventbriteInput").value
    console.log(inputField)
    searchEventbrite(inputField.value)
    // promise
    .then(response => {
      console.log(response)
      response.events.forEach(event => {
          console.log(event)
          displayEventbriteResultsHtml(event)
          // displayEventbriteItinerary(event)// call save button function
          inputField.value = ""
      });
    })

  }       
  
// Function that attaches event listener to the search button 
  const eventbriteSearchButton = () => {
    const eventbriteSearch = document.querySelector("#eventbrite-search-button")
    eventbriteSearch.addEventListener("click", event => {
      handleEventbriteSearch(event)
    })
  }
// Function that attaches event listener to the save buttons
  // const eventbriteSaveButton = () => {
    const eventbriteResults = document.querySelector("#results-container")
    eventbriteResults.addEventListener("click", event => {
      if (event.target.tagName === 'BUTTON') {
        const button = event.target
        const nameOfEvent = button.previousElementSibling
        const eventVenue = nameOfEvent.previousElementSibling
        const eventVenueAddress = eventVenue.previousElementSibling
        let name = nameOfEvent.innerText
        let venue = eventVenue.innerText
        let address = eventVenueAddress.innerText
        displayEventbriteItinerary(name, venue, address)
      }
    })
  

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

const attachEventListenerToSearchButton = () => {
    const searchButton = document.getElementById("search-button")
    searchButton.addEventListener("click", restaurantHandleSearch)
}


// ***** CONCERTS (Cassie) ***** //
