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

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('#nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
  });
});

// Function to toggle the navigation menu
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('show');
}


// Function to calculate the difference in days between two dates
function calculateDaysDifference(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return diffDays;
}

// Function to display the appropriate visit message
function displayVisitMessage() {
  const visitMessage = document.getElementById('visit-message');
  const lastVisitDateString = localStorage.getItem('lastVisit');
  if (lastVisitDateString) {
    const lastVisitDate = new Date(lastVisitDateString);
    const currentDate = new Date();
    const daysDifference = calculateDaysDifference(currentDate, lastVisitDate);

    if (daysDifference === 0) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
      visitMessage.textContent = "You last visited 1 day ago.";
    } else {
      visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
    }
  } else {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  }
}

// Store the current visit date in localStorage
const currentDate = new Date();
localStorage.setItem('lastVisit', currentDate.toISOString());

// Display the visit message
displayVisitMessage();

// Function to set the current date and time in the "Time Stamp" field
function setTimestamp() {
  var timestampField = document.getElementById("timestamp");

  if (timestampField) {
    var currentDatetime = new Date().toISOString(); // Get the current date and time in ISO format
    timestampField.value = currentDatetime;
  }
}

// Call the setTimestamp function when the document is loaded
window.addEventListener("load", setTimestamp);

// Fetch the JSON data from the source (replace 'members.json' with your JSON file's path)
fetch('members.json')
  .then((response) => response.json())
  .then((data) => {
    const memberContainer = document.getElementById('member-container');

    // Iterate through the member data and create HTML elements for each member
    data.Members.forEach((member) => {
      // Create elements for member information
      const memberCard = document.createElement('div');
      memberCard.classList.add('member-card'); // You can define CSS styles for member cards
      const memberName = document.createElement('h2');
      memberName.textContent = member.name;
      const memberImage = document.createElement('img');
      memberImage.src = member.image; // Assuming 'image' is the image URL in your JSON
      memberImage.alt = member.name;
      const memberBio = document.createElement('p');
      memberBio.textContent = member.address; // Assuming 'address' is the address in your JSON

      // Append elements to the member container
      memberCard.appendChild(memberName);
      memberCard.appendChild(memberImage);
      memberCard.appendChild(memberBio);
      memberContainer.appendChild(memberCard);
    });
  })
  .catch((error) => {
    console.error('Error fetching JSON data:', error);
  });

// Function to check if today is Monday, Tuesday, or Wednesday
function isBannerDay() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday (1), Tuesday (2), Wednesday (3)
}

// Function to close the banner
function closeBanner() {
  const banner = document.getElementById("banner");
  banner.style.display = "none";
}

// Check if it's a banner day and show the banner if so
if (isBannerDay()) {
  const banner = document.getElementById("banner");
  banner.style.display = "block";

  // Attach a click event listener to the close button
  const closeBannerButton = document.getElementById("closeBanner");
  closeBannerButton.addEventListener("click", closeBanner);
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
  });
});