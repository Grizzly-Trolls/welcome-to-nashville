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
