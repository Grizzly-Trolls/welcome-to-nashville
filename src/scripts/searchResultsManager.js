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
