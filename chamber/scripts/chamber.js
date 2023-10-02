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