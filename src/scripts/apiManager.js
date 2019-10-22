// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (Caroline) ***** //
  
const apiBaseUrlEventbrite = "https://www.eventbriteapi.com/v3/events/"

// const searchEventbrite = searchEventbrite => fetch(`${apiBaseUrlEventbrite}search/?q=${searchEventbrite}&location.address=nashville&token=${eventbriteKey}`)
// .then(response => response.json());

const searchEventbrite = (searchString) => {
    // console.log(searchString)
    return fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
    .then(r => r.json())
    // .then(results => console.log(results));
}
    

// ***** RESTAURANTS (Joseph) ***** //





// ***** CONCERTS (Cassie) ***** //
