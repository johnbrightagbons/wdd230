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
const darkModeToggle = document.getElementById("dark-mode-toggle");
const bodyElement = document.body;

darkModeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
  if (bodyElement.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌙";
  }
});


const hamburgerButton = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle menu visibility on click
hamburgerButton.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");

  // Change hamburger icon to 'X'
  if (navLinks.classList.contains("hidden")) {
    hamburgerButton.innerHTML = `
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>`;
  } else {
    hamburgerButton.innerHTML = `
            <span style="font-size: 24px; color: white;">&#10005;</span>`;
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



// Java Script for Form 
const registrationForm = document.getElementById("registrationForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const ratingInput = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");

registrationForm.addEventListener("submit", function (event) {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    event.preventDefault();
    alert("Passwords do not match. Please try again.");
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    passwordInput.focus();
  }
});

ratingInput.addEventListener("input", function () {
  const currentValue = ratingInput.value;
  ratingValue.textContent = `Current Value: ${currentValue}`;
});


const currentTemp = document.getElementById('current-temp');
const weatherDescription = document.getElementById('weather-description');
const weatherIcon = document.getElementById('weather-icon');

// Construct the API URL with the latitude, longitude, units, and API key
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=YourLatitudeHere&lon=YourLongitudeHere&units=imperial&appid=1386cbabd86fdf3940e7dd018bc851d8';

// Fetch weather data from the API
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Extract the temperature, description, and icon from the data
    const temperature = data.main.temp;
    const conditionDescription = data.weather[0].description;
    const conditionIcon = data.weather[0].icon;

    // Display the weather information in your HTML elements
    currentTemp.textContent = `Current Temperature: ${temperature}°F`;
    weatherDescription.textContent = `Condition: ${conditionDescription}`;

    // Set the weather icon
    weatherIcon.src = `https://openweathermap.org/img/w/${conditionIcon}.png`;
    weatherIcon.alt = conditionDescription;

    // Log the data to the console for further inspection
    console.log('Weather Data:', data);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });


// Fetch the JSON data
fetch('learningActivities.json')
  .then((response) => response.json())
  .then((data) => {
    const learningActivityList = document.getElementById('learning-activity-list');

    // Iterate through the JSON data and create list items with links
    data.forEach((activity) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = activity.title;
      link.href = activity.url;
      listItem.appendChild(link);
      learningActivityList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error('Error fetching JSON data:', error);
  });





const apiKey = '1386cbabd86fdf3940e7dd018bc851d8';

const city = 'Benin';
const countryCode = 'NIG';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

// Function to fetch and display current weather
function fetchCurrentWeather() {
  $.get(weatherUrl, function (data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    document.getElementById('current-temperature').textContent = `${temperature}°C`;
    document.getElementById('current-description').textContent = description;
  });
}

// Function to fetch and display 3-day temperature forecast
function fetchTemperatureForecast() {
  $.get(forecastUrl, function (data) {
    const forecastList = data.list;

    for (let i = 0; i < 3; i++) {
      const forecast = forecastList[i];
      const date = new Date(forecast.dt * 1000);
      const temperature = forecast.main.temp;
      document.getElementById(`day-${i + 1}`).textContent = `${date.toDateString()}: ${temperature}°C`;
    }
  });
}

fetchCurrentWeather();
fetchTemperatureForecast();


// JSON data source (replace with your actual data source)
const membersData = {
  "members": [
    // Your members' data here...
  ]
};

// Function to display random spotlight advertisements for silver and gold members
function displayRandomSpotlights() {
  const silverGoldMembers = membersData.members.filter(member =>
    member.membership_level === "silver" || member.membership_level === "gold"
  );

  // Shuffle the array to randomize the selection
  shuffleArray(silverGoldMembers);

  // Select two or three random members
  const selectedMembers = silverGoldMembers.slice(0, Math.min(3, silverGoldMembers.length));

  // Display the selected members as spotlights
  const spotlightContainer = document.querySelector(".company-spotlights");
  spotlightContainer.innerHTML = "";

  selectedMembers.forEach(member => {
    const spotlight = document.createElement("div");
    spotlight.classList.add("spotlight");
    spotlight.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Tel: ${member.phone}</p>
        <p>${member.description}</p>
      `;
    spotlightContainer.appendChild(spotlight);
  });
}

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Call the function to display random spotlights when the page loads
displayRandomSpotlights();


