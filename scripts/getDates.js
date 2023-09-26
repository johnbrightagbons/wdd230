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