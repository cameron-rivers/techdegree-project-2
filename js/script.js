/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

//Extra Credit - setting up the search bar
let  header = document.querySelector('header');

let searchLabel = document.createElement('label');
let searchSpan = document.createElement('span');
let searchInput = document.createElement('input');
let searchButton = document.createElement('button');
let searchImg = document.createElement('img');

searchLabel.setAttribute('for', 'search');
searchLabel.className = 'student-search';
searchSpan.textContent = 'Search by name';
searchInput.id = 'search';
searchInput.placeholder = 'Search by name...';
searchImg.src = "img/icn-search.svg";
searchImg.alt = "Search icon";

header.appendChild(searchLabel);
searchLabel.appendChild(searchSpan);
searchLabel.appendChild(searchInput);
searchLabel.appendChild(searchButton);
searchButton.appendChild(searchImg);

let searchInputData = document.querySelector('input');
let searchButtonData = document.querySelector('button');

//adding event listeners to the search input and button 
searchInputData.addEventListener('keyup', (e) => {
   searchList(data, searchInputData);
});

searchButtonData.addEventListener('click', (e) => {
   searchList(data, searchInputData);
});

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
let itemsPerPage = 9;

function showPage (list, page) {

   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = (page * itemsPerPage);

   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList.insertAdjacentHTML('beforeend', 
         `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `);
      }
   }
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination (list) {
   let numButtons = Math.ceil(list.length / itemsPerPage);

   let linkList = document.querySelector('.link-list');

   linkList.innerHTML = '';

   for (let j = 0; j < numButtons; j++) {
      linkList.insertAdjacentHTML('beforeend', 
      `
         <li>
            <button type="button">${j+1}</button>
         </li>
      `);
   }
   
   let firstButton = linkList.querySelector('button');
   firstButton.className = 'active';

   linkList.addEventListener('click', (e) => {
      if (e.target.type === 'button') {
         let buttons = linkList.querySelectorAll('button');
         for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = '';
         }
         e.target.className = 'active';
         showPage(list, e.target.textContent)
      }
   });
}


// Call functions
showPage(data,1);
addPagination(data);

//extra credit searchList function 
function searchList (list, input) {
   let searchResults = [];
   for (let i = 0; i < list.length; i++) {
      let listName = `${list[i].name.first.toLowerCase()} ${list[i].name.last.toLowerCase()}`;
      if (listName.includes(input)) {
         searchResults.push(list[i]);
         //console.log(searchResults);
      };
   }
   if (input.value.length === 0) {
      showPage(data, 1);
      addPagination(data);
   } else if (input.value.length !== 0 && searchResults.length !== 0) {
      showPage(searchResults, 1);
      addPagination(searchResults);
   } else {
      let studentList = document.querySelector('.student-list');
      studentList.innerHTML = '<li>No results found</li>';
      addPagination(searchResults);
   } 
};


