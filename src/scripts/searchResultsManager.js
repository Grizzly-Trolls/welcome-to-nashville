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
  <h4>${concerts.title}</h4>
  <p>
      Info: ${concerts.address}
  </p>
</article>
`

// Function definition that takes concerts (fetch_call_response.concerts) as an argument. Called on the eventManager.js page
const displayConcertsHtml = allConcerts => {

  // Declare concertsResultsHtml as an empty string.
  let concertsResultsHtml = ""

  // .forEach loop loops through allConcerts (response.recipes) array.
  allConcerts.forEach(concert => {

    // Variable concertHtml is assigned to the value returned from calling the function buildConcertsHtml.
    let concertHtml = buildConcertsHtml(concert)

    // recipeHtml is added to the existing value of recipeResultsHtml.
    concertsResultsHtml += recipeHtml
  });

  // The DOM is searched for the first class named .search-results and assigns it to a variable.
  const searchResultsContainer = document.querySelector("#results-container")

  // The innerHTML (area between tageted HTML tags) of the searchResultsSection is populated with the value of recipeResultsHtml.
  searchResultsSection.innerHTML = recipeResultsHtml
}