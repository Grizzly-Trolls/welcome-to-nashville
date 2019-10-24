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