const input = document.querySelector('#favchap'); // Constant variable for input
const submitButton = document.querySelector('button[type="submit"]'); // Corrected the button selector
const list = document.querySelector('#list'); // Constant variable for list

submitButton.addEventListener('click', () => {
    const chapterText = input.value.trim(); // Trim whitespace from input value

    if (chapterText !== '') { // Check if input is not blank
        const li = document.createElement('li'); // Create a new li element
        li.textContent = chapterText; // Set the li element's text content

        const deleteButton = document.createElement('button'); // Create a delete button
        deleteButton.textContent = '❌'; // Set the button's text content

        deleteButton.addEventListener('click', () => {
            list.removeChild(li); // Remove the li element when the button is clicked
        });

        li.appendChild(deleteButton); // Append the delete button to the li element
        list.appendChild(li); // Append the li element to the ul
        input.value = ''; // Clear the input field
    }

    input.focus();
});

input.focus();
input.value = '';