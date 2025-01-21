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


//Define function named getChapterList
function getChapterList() {
  const chapterData = [];
  return chapterData;
}
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const li = document.querySelector('#list');
const chaptersArray = getChapterList();

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
})

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length - 1);

chaptersArray = chaptersArray.filter((item) => item !== chapter);


function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
} s