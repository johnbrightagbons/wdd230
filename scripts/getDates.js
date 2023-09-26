// Get the current year
const currentYear = new Date().getFullYear();
document.querySelector('#year').textContent = currentYear; // Set the current year in the 'year' element

// Get the last modified date from the document
const lastModifiedDate = new Date(document.lastModified);
document.querySelector('#lastModified').textContent = "Last Modified: " + lastModifiedDate.toLocaleString(); // Set the formatted last modified date in the 'lastModified' element

// Update the HTML content with the current year and last modified date
document.addEventListener("DOMContentLoaded", function () {
  const copyrightYearElement = document.querySelector("#current-year");
  const lastModifiedDateElement = document.querySelector("#last-modified-date");

  if (copyrightYearElement) {
    copyrightYearElement.textContent = currentYear; // Set the current year in the 'current-year' element
  }

  if (lastModifiedDateElement) {
    lastModifiedDateElement.textContent = lastModifiedDate.toLocaleString(); // Set the formatted last modified date in the 'last-modified-date' element
  }
});

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