const todoInput = document.getElementById("todo");
let value ; 

value = todoInput.classList;
value = todoInput ;
todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");

todoInput.setAttribute("placeholder" , "Naberrr");
value = todoInput.getAttribute("placeholder");
// value = todoInput.hasAttribute("required");
value = todoInput.hasAttribute("name");

console.log(value);