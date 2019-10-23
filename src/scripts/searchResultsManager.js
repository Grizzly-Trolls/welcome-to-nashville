// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (Caroline) ***** //


const displayEventbriteResultsHtml = (event => {
  const eventbriteResultsHtml = `
    <article>
      <h4>${event.name.text}</h4> 
      <h4>${event.venue.name}</h4>
      <button id="eventbriteSaveBTN">Save</button>
      </article>
  `
  const eventbriteResults = document.querySelector("#eventbrite-results-container")
  eventbriteResults.innerHTML += eventbriteResultsHtml
})
 

// ***** RESTAURANTS (Joseph) ***** //





// ***** CONCERTS (Cassie) ***** //
