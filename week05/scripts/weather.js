// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7556&lon=6.6422&units=imperial&appid=YOUR_API_KEY';

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Extract the temperature and weather description
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;

    // Display temperature and weather description in your HTML elements
    currentTemp.textContent = `Current Temperature: ${temperature}°F`;
    captionDesc.textContent = `Weather Description: ${weatherDescription}`;

    // You can use the weatherIcon value to display an icon if you have corresponding icons
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;

    // Log the data to the console for further inspection
    console.log('Weather Data:', data);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });