// Function to format the date as "Month Day, Year"
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}


// OpenWeatherMap API Configuration
document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "91f1f1fa857d89e383029f10717bc5f4"; //  OpenWeatherMap API key
  const city = "Benin City"; // Chamber location
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  const weatherIcon = document.getElementById("weathericon");
  const temperatureElement = document.getElementById("temperature");
  const weatherDesc = document.getElementById("weatherdesc");
  const forecastContainer = document.createElement("div");

  // Fetch Current Weather
  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = Math.round(data.main.temp);
      const description = data.weather[0].description;
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      temperatureElement.textContent = temperature;
      weatherDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
      weatherIcon.src = icon;
    })
    .catch(error => console.error("Error fetching current weather:", error));

  // Fetch 3-Day Forecast
  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      const forecastData = {};

      // Extract one forecast per day at 12:00 PM
      data.list.forEach(entry => {
        const date = new Date(entry.dt_txt);
        const day = date.toLocaleDateString("en-US", { weekday: "long" });

        if (!forecastData[day] && date.getHours() === 12) {
          forecastData[day] = {
            temp: Math.round(entry.main.temp),
            icon: `https://openweathermap.org/img/wn/${entry.weather[0].icon}.png`,
            desc: entry.weather[0].description
          };
        }
      });

      // Generate forecast HTML
      forecastContainer.innerHTML = `<h3>3-Day Forecast</h3>`;
      Object.keys(forecastData).slice(0, 3).forEach(day => {
        const forecast = forecastData[day];
        forecastContainer.innerHTML += `
                  <div class="forecast-item">
                      <h4>${day}</h4>
                      <img src="${forecast.icon}" alt="${forecast.desc}">
                      <p>${forecast.temp}°C - ${forecast.desc}</p>
                  </div>
              `;
      });

      document.querySelector(".weather-card").appendChild(forecastContainer);
    })
    .catch(error => console.error("Error fetching weather forecast:", error));
});


// SpotLight
document.addEventListener("DOMContentLoaded", function () {
  const spotlightContainer = document.getElementById("spotlight-container");

  fetch("data/members.json"



  ) // Ensure your JSON file path is correct
    .then(response => response.json())
    .then(data => {
      // Filter members with Silver or Gold membership
      const qualifiedMembers = data.Members.filter(member =>
        member["membership level"] === "Silver" || member["membership level"] === "Gold"
      );

      // Shuffle array and pick 2-3 members randomly
      const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
      const selectedMembers = shuffled.slice(0, Math.min(3, shuffled.length));

      // Generate HTML for each selected member
      spotlightContainer.innerHTML = selectedMembers.map(member => `
              <div class="spotlight">
                  <h3>${member.name}</h3>
                  <p>${member.expertise}</p>
                  <a href="${member.website}" target="_blank">Visit Website</a>
              </div>
          `).join("");
    })
    .catch(error => console.error("Error fetching member data:", error));
});





// Banner functionality
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("meet-greet-banner");
  const closeButton = document.getElementById("close-banner");

  // Check current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const today = new Date().getDay();

  // Show banner only on Monday (1), Tuesday (2), or Wednesday (3)
  if (today >= 1 && today <= 3) {
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }

  // Close banner when the button is clicked
  closeButton.addEventListener("click", function () {
    banner.style.display = "none";
  });
});


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

  // Initialize features
  displayWeather();
  displaySpotlights();
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



// Events 
document.addEventListener('DOMContentLoaded', function () {
  const yesButtons = document.querySelectorAll('.attend-yes');
  const noButtons = document.querySelectorAll('.attend-no');

  function showMessage(event, message) {
    const listItem = event.target.closest('li');
    let messageElement = listItem.querySelector('.attendance-message');

    if (!messageElement) {
      messageElement = document.createElement('p');
      messageElement.classList.add('attendance-message');
      listItem.appendChild(messageElement);
    }
    messageElement.textContent = message;
  }

  yesButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      const eventName = event.target.dataset.event;
      console.log(`Attending: ${eventName} - Yes`);
      showMessage(event, "See you there!");
    });
  });

  noButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      const eventName = event.target.dataset.event;
      console.log(`Attending: ${eventName} - No`);
      showMessage(event, "We are sad that you are not attending.");
    });
  });
});


// Stamp Time 
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('joinForm');
  const timestampField = document.getElementById('timestamp');

  form.addEventListener('submit', function (event) {
    // Get the current timestamp
    const now = new Date();
    const timestamp = now.toISOString(); // Format to ISO string for easier handling

    // Set the value of the hidden timestamp field
    timestampField.value = timestamp;

    // The form will now submit with the timestamp included
  });
});