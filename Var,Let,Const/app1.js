var a = 5;
console.log(a);
var a = 10;
console.log(a);

// We can redefine variables with var keyword

//But with Let keyword we can't do this ,We take error (Variable was already declared.!!!)

let name = "Ege";

console.log(name);
// let name = "Ramazan"; // we can not redefine

// but we can change value

name = "Ege BARISAN";
console.log(name);
console.log(typeof name);

//const keyword

const n1 = 15 ;
console.log(n1);
// n1 = 22;
// // We can not change value of the variable which we defined with const
// var n1 = 22 ; // we cannot
// let n1 = 22 ; //  we cannot

// but in reference types it is different ,

const array = [1,2,3,4];
console.log(array);
// const array = [1,2,3,4,5]; // we cannot
// but we can push value in reference types
array.push("eklenen eleman");
console.log(array);

// Also there is one more difference than others ,
// We have to define and assign value at the same line

// const n2 ;
// // We cannot do this ...
// n2 = 5 ;

// Correct Way is  ;
const n2 = 169;
console.log(n2);
