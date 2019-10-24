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

const displayEventbriteItinerary = (name, venue, address) => {
  const eventbriteItineraryHtml = ` 
  <article>
      <h4>Name of Event: ${name}</h4>
      <h4>Venue Name: ${venue}</h4>
      <h4>Venue Address: ${address}
    </article>
    `
    const eventbriteItinerary = document.querySelector("#itinerary-container")
    eventbriteItinerary.innerHTML += eventbriteItineraryHtml
}

// ***** RESTAURANTS (Joseph) ***** //





// ***** CONCERTS (Cassie) ***** //
