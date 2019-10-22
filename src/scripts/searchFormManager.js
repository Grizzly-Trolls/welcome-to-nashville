// ***** PARKS (Shawna) ***** //


const parksBuildAndAppendSearchForm = function () {

    // assigning a string of HTML (it will create the search form) to the below variable declared inside this function. 
    
    const parksSearchForm = `
    <section class="parks-search-form">
    <h1>Welcome to Nashville!</h1>
    <h3>Search for stuff to do today</h3>
    <input type="text" placeholder="parks by feature"> 
    <button id = "parks-search-button">Search</button>
    </section>
    <section class="search-results"></section>
    `

// .querySelector searches the DOM for the first "ID" called container ("#container")and assigns it to the variable named containerDiv

  const searchContainerDiv = document.querySelector("#search-container")

  // the innerHTML(the space betwen the opening and closing div tags in this example) will be populated with the value of search form

  searchContainerDiv.innerHTML = parksSearchForm
}

// DOM, document, HTML- thse are all referring to the same thing
// variable holding the function definition to build and append search form for PARKS.
// Call this function on main.js

// ***** MEETUPS (Caroline) ***** //





// ***** RESTAURANTS (Joseph) ***** //





// ***** CONCERTS (Cassie) ***** //
