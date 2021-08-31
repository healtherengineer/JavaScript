const name = "Ege BARISAN";
const department = "IT";
const salary = 5000;

let a = "Name: " + name +
    "\nDepartment: " + department +
    "\nSalary: " + salary;

a = `Name:${name}\nDepartment:${department}\nSalary:${salary}.`

console.log(a);
console.clear();

//Before ES6+
//  const html = "<ul>"+
//  "<li>" + name+"</li>"+
//  "<li>" + department+"</li>"+
//  "<li>" +salary+"</li>"+
//  "</ul>";

//After ES6+
//whatever We write in template literal it works (Js code,)
let x = function(){
  return "Hello Template literal";

}
const html = `
     <h1 style = color:red;>Template Literal</h1>
     <ul id="list"> 

     <li >${name}</li>
     <li id="list">${department}</li>
     <li id="list">${salary}</li>
     <li id="list">${10/5}</li>
     <li id="list">${x()}</li>
     
     </ul>
     
     `;
     //wrong
    //  const style = `
    //  <style>
     
    //  ul li{
    //      text-decoration:none;

    //  }

    //  </style>`


document.body.innerHTML = html;
document.getElementById("list").style.listStyle= "none";


