// ***** PARKS (Shawna) ***** //


const parksBaseUrl = "https://data.nashville.gov/resource/"

const searchParks = (dropDownItem) => {
    return fetch (`${parksBaseUrl}74d7-b74t.json?${parksAppToken}&${dropDownItem}`)
}
// const searchRecipes = (searchInput) => { 
    //     return fetch(`${apiBaseUrl}search?key=${food2ForkKey}&q=${searchInput}`).then(response => response.json());
    // }
    

// ***** MEETUPS (Caroline) ***** //





// ***** RESTAURANTS (Joseph) ***** //

const apiBaseurl ="https://developers.zomato.com/api/v2.1/restaurant?res_id=7707b44a119207cb30d8ac5ace0d0b6d"
const searchRestaurants = searchInput => fetch(`${apiBaseurl}search?key=${restaurantKey}&q=${searchInput}`)
    .then(r => response.json())
    .then(results => {
    })
console.log("Is this working")



// ***** CONCERTS (Cassie) ***** //

const ticketmaster_base_url = "https://app.ticketmaster.com/discovery/v2/"

// Function that accepts user search input as an argument. Fetch does a GET call on a URL string to get back data. Uses api base url, ticketmaster api key and the user input.
const searchConcerts = (searchInput) => fetch(`${ticketmaster_base_url}events.json?apikey=${ticketmaster_key}&city=Nashville&countryCode=classificationName=${searchInput}&sort=date,asc`)

// .then waits for the response to be sent back then turns the response into JSON format. .json() is a method that can be called on a response stream (which was returned by the fetch call)
.then(response => response.json())
