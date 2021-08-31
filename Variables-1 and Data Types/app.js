var a = 5 ;

var name = "Ege";

console.log(name + ": "+ a)
console.log(name  + ":askdlsda");
console.log(typeof name);
console.log(typeof a);
var b = true;
console.log(b);


var person = {
    name:"Ege",// property: value,(this is shorthand)
    age:22
}
console.log(person);
console.log(typeof person);

var message = function(){
 alert("This message comes from the message function :) ");
}

console.log(message);
console.log(typeof message);
var date = new Date();

console.log(date);
console.clear();

var array = [1,2,3,4];

var arr = array;

console.log(arr);
console.log(array);
arr.push(6);
console.log(array);
console.log(arr);
arr.push("Jack");
console.log(arr);
