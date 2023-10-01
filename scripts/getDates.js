// Function to format the date as "Month Day, Year"
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

// Get the last modified date from the document
const lastModifiedDate = new Date(document.lastModified);

// Get the current year
const currentYear = new Date().getFullYear();

// Set the last modified date and current year in the respective HTML elements
const lastModifiedElement = document.getElementById('last-modified-date');
const currentYearElement = document.getElementById('current-year');

if (lastModifiedElement) {
  lastModifiedElement.textContent = formatDate(lastModifiedDate);
}

if (currentYearElement) {
  currentYearElement.textContent = currentYear;
}



// Dark mode toggle
const main = document.querySelector("main");
const modeButton = document.querySelector("#mode");

modeButton.addEventListener("click", () => {
  if (main.classList.contains("dark-mode")) {
    // If dark mode is currently active, switch to light mode
    main.classList.remove("dark-mode");
    modeButton.textContent = "☑️"; // Update the button text
  } else {
    // If light mode is currently active, switch to dark mode
    main.classList.add("dark-mode");
    modeButton.textContent = "❎"; // Update the button text
  }
});


// Check if the visit count is stored in localStorage
let visitCount = localStorage.getItem('visitCount');

// If visitCount is null (first visit), initialize it to 1, otherwise increment it
if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}

// Update the visit count display
document.getElementById('visit-count').textContent = visitCount;

// Store the updated visit count in localStorage
localStorage.setItem('visitCount', visitCount.toString());


 // Get references to the elements
 const templeName = document.getElementById("overlay");

 // Function to update temple name based on screen size
 function updateTempleName() {
     if (window.innerWidth <= 400) {
         templeName.textContent = "Ghana Temple (Mobile View)";
     } else if (window.innerWidth <= 960) {
         templeName.textContent = "Aba Nigeria Temple (Larger View)";
     } else {
         templeName.textContent = "Aba Nigeria Temple (Default)";
     }
 }

 // Call the function on page load and resize
 window.addEventListener("load", updateTempleName);
 window.addEventListener("resize", updateTempleName);