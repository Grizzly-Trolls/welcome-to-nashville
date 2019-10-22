// ***** PARKS (Shawna) ***** //





// ***** MEETUPS (author: Caroline Brownlee) ***** //

// Function that Renders the Search Input and Search button to the dom when application is first run by the user. Function is called in main.js. Works Oct. 22, 19 //
const buildAndAppendEventbriteSearchForm = () => {
    const eventbriteSearchForm = `
    <h1>Welcome to Nashville</h1>
    <section class="search-form">
      <h3>Search for stuff to do today: </h3>
      <input type="text" placeholder="meetups by topic">
      <button id = "search-button">Search</button>
    </section>
    <section class="search-results"></section>
    `
    // Grabs reference to <div> on the dom and renders eventbrightSearchForm to dom //
    const searchContainerDiv = document.querySelector("#container")
    searchContainerDiv.innerHTML = eventbriteSearchForm
  }



// ***** RESTAURANTS (Joseph) ***** //





// ***** CONCERTS (Cassie) ***** //
