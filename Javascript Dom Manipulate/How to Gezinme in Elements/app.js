let value ; 
const todoList = document.querySelector(".list-group");

const todoSecond = document.querySelector(".list-group-item:nth-child(2)");

const cardRow = document.querySelector(".card.row");

// value = todoList;
// value = todoSecond;
// value = cardRow;


//Child Nodes - Text dahil

value = todoList.childNodes;

//Children - Sadece Element

value = todoList.children;
value = todoList.children[1];
value.textContent = "2. Todo"; 
// 2. todo ya ulaştık ve text contentini değiştik
value.style.color = "blue";
value.style.fontSize= "50px";

value = cardRow.children[2].children[1];
value = value.textContent = "Bu title ı değiştirdik.";

//parent bulalım hadi
value = cardRow.parentElement.parentElement.parentElement;


// element kardeşleri
value = todoSecond;
value = todoSecond.previousElementSibling;

console.log(value);