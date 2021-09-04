// Requisição posts

const postsTBody = document.getElementById('postsTBody');

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => Array.from(json))
  .then(arr => arr.forEach(arr => {

     var tr = document.createElement('tr');

     var tdPostsUserId = document.createElement('td');
     tdPostsUserId.innerText = arr.userId;

     var tdPostsId = document.createElement('td');
     tdPostsId.innerText = arr.id;

     var tdPostsTitle = document.createElement('td');
     tdPostsTitle.innerText = arr.title;

     var tdPostsBody = document.createElement('td');
     tdPostsBody.innerText = arr.body;

     postsTBody.appendChild(tr);
     tr.appendChild(tdPostsUserId);
     tr.appendChild(tdPostsId);
     tr.appendChild(tdPostsTitle);
     tr.appendChild(tdPostsBody)
  }))
}

getPosts();

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