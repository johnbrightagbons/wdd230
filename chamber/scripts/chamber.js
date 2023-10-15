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