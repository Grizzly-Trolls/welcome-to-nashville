// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (Caroline) ***** //


const displayEventbriteResultsHtml = (events => {
  const eventbriteResultsHtml = `
    <article>
      <h4>${events.name.text}</h4> 
      <p>${events.venue.name}</p>
      <p>${events.venue.address.address_1}</p>
      <button class="eventbriteSaveBTN">Save</button>
      </article>
      `
      const eventbriteResults = document.querySelector("#results-container")
      eventbriteResults.innerHTML += eventbriteResultsHtml
})

const displayEventbriteHtml = events => {
  let eventResultsHtml = ""
  events.forEach(event => {
    let eventHtml = buildEventbriteHtml(event)
    eventResultsHtml += eventHtml
  });
  
  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = eventResultsHtml
}

const displayEventbriteItinerary = (name, venue, address) => {
  let eventbriteItineraryHtml = ` 
      <h4>Name of Event: ${name}</h4>
      <h4>Venue Name: ${venue}</h4>
      <h4>Venue address: ${address}</h4>
    `
    const eventbriteItinerary = document.querySelector("#itinerary-container")
    const itineraryEventsContainer = document.querySelector("#itinerary-events-container")
    if (itineraryEventsContainer === null) {
      eventbriteItinerary.innerHTML = `<article id="itinerary-events-container">
      ${eventbriteItineraryHtml}
      </article>`
    } else {
      itineraryEventsContainer.innerHTML = eventbriteItineraryHtml
    }
}


// ***** RESTAURANTS (Joseph) ***** //

const buildRestaurantHTML = (restaurant => {
  // console.log(restaurant.restaurant)
  const restaurantDisplayVar = `
    <article>
      <h4>${restaurant.restaurant.name}</h4>
      <h4>${restaurant.restaurant.location.address}</h4>
      <button id="restaurantSaveButton">SAVE</button>
    </article>
    `
    const restaurantResultsSection = document.querySelector("#results-container")
    restaurantResultsSection.innerHTML += restaurantDisplayVar
})


// ***** CONCERTS (Cassie) ***** //

// Function definition that adds a HTML string to the DOM. concerts is an argument.
const buildConcertsHtml = concerts => `
<article>
  <h4>${concerts.name}</h4>
  <p>
      Info: ${concerts.dates.start.localDate}
  </p>
</article>
`

// Function definition that takes converts (fetch_call_response.concerts) as an argument. Called on the eventManager.js page
const displayConcertsHtml = allConcerts => {

  // Declare concertsResultsHtml as an empty string.
  let concertsResultsHtml = ""
console.log(allConcerts)
  // .forEach loop loops through allConcerts (response.recipes) array.
  allConcerts._embedded.events.forEach(concert => {

    // Variable concertHtml is assigned to the value returned from calling the function buildConcertsHtml.
    let concertHtml = buildConcertsHtml(concert)

    // concertsResultsHtml is added to the existing value of recipeResultsHtml.
    concertsResultsHtml += concertHtml
  });

  // The DOM is searched for the first id named results-container and assigns it to a variable.
  const searchResultsContainer = document.querySelector("#results-container")

  // The innerHTML (area between tageted HTML tags) of the searchResultsContainer is populated with the value of concertsResultsHtml.
  searchResultsContainer.innerHTML = concertsResultsHtml
}