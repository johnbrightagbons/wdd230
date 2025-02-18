const jsonData = {
    "weeks": [
        {
            "week": "week 1",
            "links": [
                { "url": "week01/holygrail.html", "title": "Week 01 Assignment" }
            ]
        },
        {
            "week": "week 2",
            "links": [
                { "url": "week02/design.html", "title": "Week 02 Assignment" },
                { "url": "week02/bom.html", "title": "Book Of Mormon Chapters" }
            ]
        },
        {
            "week": "week 3",
            "links": [
                { "url": "week03/images/landscape.webp", "title": "WebP" },
                { "url": "week03/reponsive-images.html", "title": "Reponsive Images" },
                { "url": "week03/bom.html", "title": "Book Of Mormon Revisit" }
            ]
        },
        {
            "week": "week 4",
            "links": [
                { "url": "https://codepen.io/Bright-Agbons-John/pen/LYMebGx", "title": "Assignment" },
                { "url": "https://codepen.io/Bright-Agbons-John/pen/PoXdjxJ", "title": "CSS Pseudo-class" },
                { "url": "week04/images/Screenshot.png", "title": "CSS Pseudo-class Screenshot" },
                { "url": "week04/tablebuild.html", "title": "Table" },
                { "url": "form-start/index.html", "title": "Developed Form Activity" },
                { "url": "https://codepen.io/Bright-Agbons-John/pen/WNLPROv", "title": "CSS Pseudo Element" }
            ]
        },
        {
            "week": "week 5",
            "links": [
                { "url": "week05/new-ward-members.json", "title": "JSON file" },
                { "url": "week05/prophets.html", "title": "Prophets Card" },
                { "url": "week05/weather.html", "title": "Weather" }
            ]
        }
    ]
};
const learningActivityContainer = document.getElementById('learning-activities'); // replace 'learning-activities' with your actual element ID

jsonData.weeks.forEach(week => {
    const weekHeader = document.createElement('h3');
    weekHeader.textContent = week.week;
    learningActivityContainer.appendChild(weekHeader);

    const linksList = document.createElement('ul');
    week.links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.title;
        listItem.appendChild(anchor);
        linksList.appendChild(listItem);
    });
    learningActivityContainer.appendChild(linksList);
});



const baseURL = "https://github.com/johnbrightagbons/wdd230";

const linksURL = "https://github.com/johnbrightagbons/wdd230/data/links.json";


async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data); // Test the JSON result
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('links-container');
    linksContainer.innerHTML = ''; // Clear existing content

    weeks.forEach((week) => {
        const weekHeading = document.createElement('h2');
        weekHeading.textContent = week.week;
        linksContainer.appendChild(weekHeading);

        week.links.forEach((link) => {
            const linkElement = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            linkElement.appendChild(anchor);
            linksContainer.appendChild(linkElement);
        });
    });
}

getLinks(); // Call the getLinks function to initiate the process

fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('memberCardsContainer');
        container.innerHTML = ''; // Clear previous content

        data.Members.forEach(member => {
            const div = document.createElement('div');
            div.classList.add('member-card');
            div.innerHTML = `
                  <img src="${member.image}" alt="${member.name}">
                  <h3>${member.name}</h3>
                  <p><strong>Address:</strong> ${member.address}</p>
                  <p><strong>Phone:</strong> ${member.phone}</p>
                  <p><strong>Membership Level:</strong> ${member['membership level']}</p>
                  <p><strong>Expertise:</strong> ${member.expertise}</p>
                  <a href="${member.website}" target="_blank">Visit Website</a>
              `;
            container.appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));

document.getElementById('toggleButton').addEventListener('click', function () {
    const container = document.getElementById('memberCardsContainer');
    container.classList.toggle('grid');
    container.classList.toggle('list');
});
