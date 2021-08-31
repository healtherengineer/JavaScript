//REPLACE

//<h5 class="card-title" id = "tasks-title">Todolar</h5>


const cardBody = document.querySelectorAll(".card-body")[1];

//Yeni Element
const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar";

// Eski Element

const oldElement = document.querySelector("#tasks-title");

cardBody.replaceChild(newElement ,oldElement);

console.log(oldElement);
console.log(newElement);
