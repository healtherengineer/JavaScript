let value ; 

value = this.document;
value = this.document.all;
value = this.document.all[0];
value = this.document.all[6];
value = this.document.all[this.document.all.length -1];

// for(let i = 0 ; i< this.document.all.length ; i++){
//     console.log(this.document.all[i]);
// }

value = document.all;  //html collection

// You can not use foreach loop for Html Collection
//YOU SHOULD CONVERT IT TO ARRAY!!!!!!

// value.forEach(function(elemnent){
// console.log(element);
// });


//how to convert html Collections to Array!!!

// const collection = Array.from(this.document.all);

// console.log(typeof collection);
// // html collection became an array .
// collection.forEach(function(para){

//     console.log(para);
// });


value = this.document.all[8];
value = this.document.body;
value = this.document.head;

value = this.document.location;


//window objesinin içinde ki document objesindeki
//Url ini aldık 
//kısaca bu sayfanın url ini aldık 

value = document.characterSet;
value = this.document.URL;



console.log(value);