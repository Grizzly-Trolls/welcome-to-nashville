// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (author: Caroline Brownlee) ***** //

// Function that reads user input value in search field (passing inputField value as an argument) and returns the fetch call from the API, which lives in searchEventbrite variable from apiManager.js. The function then iterates over the eventbrite events array in the promise, and for each event, invokes the displayEventbriteHtml function from searchResultsManager.js, which takes each event as an argument. //

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





// ***** CONCERTS (Cassie) ***** //
