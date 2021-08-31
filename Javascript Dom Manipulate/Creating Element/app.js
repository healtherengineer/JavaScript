// Yeni Element Oluşturma 

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink = document.createElement("a");

const cardBody = document.getElementsByClassName("card-body")[1];
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com/";
newLink.target = "_blank";



//Text Node
newLink.appendChild(document.createTextNode("Farklı Sayfaya git"));
cardBody.appendChild(newLink);


console.log(newLink);

