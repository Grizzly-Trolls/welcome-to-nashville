// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (Caroline) ***** //





// ***** RESTAURANTS (Joseph) ***** //

const apiBaseurl ="https://developers.zomato.com/api/v2.1/restaurant?res_id=7707b44a119207cb30d8ac5ace0d0b6d"
const searchRestaurants = searchInput => fetch(`${apiBaseurl}search?key=${restaurantKey}&q=${searchInput}`)
    .then(r => response.json())
    .then(results => {
    })
console.log("Is this working")



// ***** CONCERTS (Cassie) ***** //
