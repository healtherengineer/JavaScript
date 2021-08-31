let a = 12;

a = String(a);
a = String(2.6);
a = String(true);
a = String(false);
a = String(function message(){console.log("hello");});

// There are 2 ways to convert to String ...
a = 3.14.toString();


//Converting to Number

a = Number("123");

a =Number(null);
//Nan
a = Number("hello world");
//...


let value = "Hello: "  +37;

value = 37 + "12";
value = 34 + Number("12");

console.log(value);
console.log(typeof value);
console.log(a); 
console.log(typeof a);
console.clear();

const arr = [1,2,3,4];
console.log(arr);

arr[0] =2 ;
console.log("Changed : " + arr[0]); 
console.log(arr);
