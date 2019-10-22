// ***** PARKS (Shawna) ***** //


const parksBaseUrl = "https://data.nashville.gov/resource/"

const searchParks = (dropDownItem) => {
    return fetch (`${parksBaseUrl}74d7-b74t.json?${parksAppToken}&${dropDownItem}`)
}
// const searchRecipes = (searchInput) => { 
    //     return fetch(`${apiBaseUrl}search?key=${food2ForkKey}&q=${searchInput}`).then(response => response.json());
    // }
    

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

