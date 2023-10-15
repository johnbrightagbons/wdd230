const baseURL = "https://github.com/johnbrightagbons/wdd230";

const linksURL = "https://github.com/johnbrightagbons/wdd230/data/links.json";

async function getLinks() {
    const reply = await fetch(linksURL);
    const data = await reply.json();
    console.log(data);
}

getLinks();


function displayLinks(weeks) {
    // Get a reference to the HTML element where you want to display the links
    const linksContainer = document.getElementById('links-container'); // Replace with the actual container ID in your HTML
  
    // Check if the container exists and the data is an array
    if (linksContainer && Array.isArray(weeks)) {
      // Iterate through the weeks and create links
      weeks.forEach((week) => {
        const linkElement = document.createElement('a');
        linkElement.textContent = week.title; // Assuming each week object has a "title" property
        linkElement.href = week.url; // Assuming each week object has a "url" property
  
        // Append the link to the container
        linksContainer.appendChild(linkElement);
      });
    } else {
      console.error('Invalid container or data format');
    }
  }


  // Example of creating a dynamic link
const dynamicLink = document.createElement('a');
dynamicLink.textContent = 'Dynamic Link';
dynamicLink.href = 'https://github.com/johnbrightagbons/wdd230';

// Append the dynamic link to a container in the HTML
const container = document.getElementById('link-container');
container.appendChild(dynamicLink);