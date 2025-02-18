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
