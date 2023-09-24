// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date from the document
const lastModifiedDate = new Date(document.lastModified);

// Format the date as "Month Day, Year" (e.g., "September 13, 2023")
alert(document.lastModified); {
};

// Update the HTML content with the current year and last modified date
document.addEventListener("DOMContentLoaded", function () {
  const copyrightYearElement = document.querySelector("#current-year");
  const lastModifiedDateElement = document.querySelector("#last-modified-date");

  if (copyrightYearElement) {
    copyrightYearElement.textContent = currentYear;
  }

  if (lastModifiedDateElement) {
    lastModifiedDateElement.textContent = formattedLastModifiedDate;
  }
});

const modeButton = document.querySelector("#mode");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});
