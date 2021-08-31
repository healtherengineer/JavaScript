//Element Silme

const todoList = document.querySelector("ul.list-group");

const todos = document.querySelectorAll("li.list-group-item");


// Remove Metodu

// todos[3].remove();

//removeChild

// todoList.removeChild(todos[todos.length -1]);
todoList.removeChild(todoList.lastElementChild);


console.log(todoList);

console.log(todos);