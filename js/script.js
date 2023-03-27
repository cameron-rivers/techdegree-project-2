/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



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
   let numButtons = list.length / itemsPerPage;

   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   for (let j = 0; j < numButtons.length; j++) {
      linkList.insertAdjacentHTML('beforeend', 
      `
         <li>
            <button type="button">${j+1}</button>
         </li>
      `);
   }
   linkList.querySelector('button').className = 'active';
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
