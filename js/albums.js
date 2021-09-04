// Requisição Albums
const tbody = document.getElementById('albumTBody');


function getAlbums() {  
  fetch('https://jsonplaceholder.typicode.com/albums/')
  .then(response => response.json())
  .then(json => Array.from(json))
  .then(arr => arr.forEach(arr => {
     var tr = document.createElement('tr');

     var tdAlbumUserId = document.createElement('td');
     tdAlbumUserId.innerText = arr.userId;

     var tdAlbumId = document.createElement('td');
     tdAlbumId.innerText = arr.id;

     var tdAlbumTitle = document.createElement('td');
     tdAlbumTitle.innerText = arr.title;

     tbody.appendChild(tr);
     tr.appendChild(tdAlbumUserId);
     tr.appendChild(tdAlbumId);
     tr.appendChild(tdAlbumTitle);
  }))
}

getAlbums();


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