// Requisição ToDo

const todoTBody = document.getElementById('todoTBody');

function getToDo() {
  fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => Array.from(json))
  .then(arr => arr.forEach(arr => {

     var tr = document.createElement('tr');

     var tdToDoUserId = document.createElement('td');
     tdToDoUserId.innerText = arr.userId;

     var tdToDoId = document.createElement('td');
     tdToDoId.innerText = arr.id;

     var tdToDoTitle = document.createElement('td');
     tdToDoTitle.innerText = arr.title;

     var tdToDoCompleted = document.createElement('td');
     tdToDoCompleted.innerText = arr.completed;

     todoTBody.appendChild(tr);
     tr.appendChild(tdToDoUserId);
     tr.appendChild(tdToDoId);
     tr.appendChild(tdToDoTitle);
     tr.appendChild(tdToDoCompleted)
  }))
}

getToDo();

let searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', tableSearch);

function tableSearch() {
    let filter, table, tr, td, txtValue;

    filter = searchInput.value.toUpperCase();
    table = document.getElementById('general-table');
    tr = table.getElementsByTagName('tr');

    for(let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if(td) {
        txtValue = td.textContent || td.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}