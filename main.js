// Get the search input element
const searchInput = document.querySelector("#search-input");

// Add an event listener for the "Enter" key
searchInput.addEventListener("keydown", function (event) {
  // Check if the pressed key is "Enter"
  if (event.code === "Enter") {
    // Call the search function when "Enter" is pressed
    search();
  }
});

// Function to perform the search
function search() {
  // Get the user input from the search input field
  const input = searchInput.value;

  // Redirect the user to the Google search results page with the entered query
  window.location.href =
    "https://www.google.com/search?q=" +
    input +
    "&rlz=1C5CHFA_enNZ948NZ948&oq=" +
    input +
    "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8";
}
