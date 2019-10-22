// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (Caroline) ***** //





// ***** RESTAURANTS (Joseph) ***** //





// ***** CONCERTS (Cassie) ***** //

// Assigning the base api URL to variable "ticketmaster_base_url"
const ticketmaster_base_url = "https://app.ticketmaster.com/discovery/v2/"

// Function that accepts user search input as an argument. Fetch does a GET call on a URL string to get back data. Uses api base url, ticketmaster api key and the user input.
const searchConcerts = (searchInput) => fetch(`${ticketmaster_base_url}events.json?apikey=${ticketmaster_key}&city=Nashville&countryCode=classificationName=${searchInput}&sort=date,asc`)

// .then waits for the response to be sent back then turns the response into JSON format. .json() is a method that can be called on a response stream (which was returned by the fetch call)
.then(response => response.json())