// ***** PARKS (Shawna) ***** //

// Function definition that adds a HTML string to the DOM. parks is an argument.

// the h4 below is the"Name" portion of what we're bringing back

const buildParksHtml = parks => `
<article>
 <h4>${parks.park_name}</h4>
 <p>
  Info:
 </p>
</article>
`

// Function definition that takes allRecipes (response.recipes) as an argument. Called on the eventManager.js page
const displayParksHtml = allParks => {
 // Declare recipeResultsHtml as an empty string.
 let parkResultsHtml = ""
 // .forEach loop loops through allRecipes (response.recipes) array.
 allParks.forEach(park => {
   // Variable recipeHtml is assigned to the value returned from calling the function buildRecipeHtml.
   let parkHtml = buildParksHtml(park)
   // recipeHtml is added to the existing value of recipeResultsHtml.
   parkResultsHtml += parkHtml
 });
 // The DOM is searched for the first class named .search-results and assigns it to a variable.
 const searchResultsContainer = document.querySelector("#results-container")
 // The innerHTML (area between tageted HTML tags) of the searchResultsSection is populated with the value of recipeResultsHtml.
 searchResultsContainer.innerHTML = parkResultsHtml
}



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

  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = eventResultsHtml
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