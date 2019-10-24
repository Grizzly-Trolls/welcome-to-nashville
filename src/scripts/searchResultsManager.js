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
  <article>
      <h4>Name of Event: ${name}</h4>
      <h4>Venue Name: ${venue}</h4>
      <h4>Venue address: ${address}</h4>
    </article>
    `
    const eventbriteItinerary = document.querySelector("#itinerary-container")
    eventbriteItinerary.innerHTML += eventbriteItineraryHtml
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
