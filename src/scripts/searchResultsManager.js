// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (Caroline) ***** //

const buildEventbriteHtml = event => {
  return `
    <article>
      <h4>${event.name.text}</h4>
      <p>${event.venue.name}</p>
      <p>${event.description.name}</p>
    </article>
  `
}


const displayEventbriteHtml = events => {
  let eventResultsHtml = ""
  events.forEach(event => {
    let eventHtml = buildEventbriteHtml(event)
    eventResultsHtml += eventHtml
  });

  // const searchResultsSection = document.querySelector(".search-results")
  // searchResultsSection.innerHTML = eventResultsHtml
}



// ***** RESTAURANTS (Joseph) ***** //





// ***** CONCERTS (Cassie) ***** //
