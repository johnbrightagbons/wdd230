document.addEventListener("DOMContentLoaded", function () {
  /*** Date Handling ***/
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }

  document.getElementById("last-modified-date").textContent = formatDate(new Date(document.lastModified));

  /*** Dark Mode Toggle ***/
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  /*** Navigation Toggle ***/
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    hamburger.innerHTML = navLinks.classList.contains("hidden") ? "<span class='bar'></span><span class='bar'></span><span class='bar'></span>" : "<span style='font-size: 24px; color: white;'>&#10005;</span>";
  });

  /*** Visit Counter ***/
  const visitCounterElement = document.getElementById("visit-counter");
  let visitCount = localStorage.getItem("visitCount") || 0;
  visitCounterElement.textContent = `You have visited this page ${++visitCount} times`;
  localStorage.setItem("visitCount", visitCount);


  /*** Weather API ***/
  const apiKey = "91f1f1fa857d89e383029f10717bc5f4";
  const city = "Benin City";
  const units = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  async function fetchWeather() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Weather data not available");
      const data = await response.json();

      console.log("Weather API Response:", data); // Debugging

      // Extract and display weather data
      const temp = data.main.temp;
      const condition = data.weather[0].description;
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      document.getElementById("current-temp").textContent = `Temperature: ${temp}°C`;
      document.getElementById("weather-description").textContent = `Condition: ${condition}`;
      document.getElementById("weather-icon").src = icon;
      document.getElementById("weather-icon").alt = condition;
      document.getElementById("weather-icon").hidden = false;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      document.getElementById("weather-description").textContent = "Weather data unavailable";
    }
  }

  // Call the function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", fetchWeather);

})