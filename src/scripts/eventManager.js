// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (Caroline) ***** //





// ***** RESTAURANTS (Joseph) ***** //
const restaurantHandleSearch = event => {
    const inputFeild = document.querySelector("input")
    console.log("user input", inputFeild.value)

    searchRestaurants(inputFeild.value)
    .then(response => {
        displayRestaurantNameHTML(respone.names)
        inputFeild.value =""
    })
}

const attachEventListenerToSearchButton = () => {
    const searchButton = document.getElementById("search-button")
    searchButton.addEventListener("click", restaurantHandleSearch)
}


// ***** CONCERTS (Cassie) ***** //
