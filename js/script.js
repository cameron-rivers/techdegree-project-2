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



//QUESTION: can I delete this and just put 9 in the showpage function?

function showPage (list, page) {
   let itemsPerPage = 9;
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = (page * itemsPerPage);

   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         //Create the DOM elements needed to display the information for each matching student as you iterate over the list parameter SEE EXAMPLE
         //Because you will need to create multiple elements to display the information for each student, consider using a template literal for this.
         //Insert the elements you have created into the student-list variable. The insertAdjacentHTML method and beforeend option work well for this.
         studentList.insertAdjacentHTML('beforeend', 
         `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
                  <h3>Ethel Dean</h3>
                  <span class="email">ethel.dean@example.com</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined 12-15-2005</span>
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



// Call functions