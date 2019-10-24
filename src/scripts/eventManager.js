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
//taches event listener to the save buttons and calls 
    const eventbriteResults = document.querySelector("#results-container")
    eventbriteResults.addEventListener("click", event => {
      if (event.target.tagName === 'BUTTON') {
        const button = event.target
        console.log(button)
        const eventVenueAddress = button.previousElementSibling
        const eventVenue = eventVenueAddress.previousElementSibling
        const nameOfEvent = eventVenue.previousElementSibling
        let name = nameOfEvent.innerText
        let venue = eventVenue.innerText
        let address = eventVenueAddress.innerText
        displayEventbriteItinerary(name, venue, address)
      }
    })
  

// ***** RESTAURANTS (Joseph) ***** //

const restaurantHandleSearch = event => {
  console.log("hopefully this will work")
    const inputField = document.querySelector("#restaurant-input")
    // console.log("", inputField.value)

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

const eventListenerToRestaurantSaveButton = (event) => {
  const restaurantSaveButton = document.querySelector("#restaurantSaveButton")
  restaurantSaveButton.addEventListener("click",buildRestaurantHTML)
  console.log("event", event)
}
  // ***** CONCERTS (Cassie) ***** //
