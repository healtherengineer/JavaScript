let value ;

const programmer = {
    name : "Ege Barışan",
    age : 21,

    email : "ege.barisan.01@gmail.com",

    addreses : {
        city : "Adana",
        street : "Güzelyalı Mahallesi"
    },
    langs : [
        "Java",
        "C",
        "Javascript"
    ],

    work : function(){
        console.log("Programmer is working...");
    }
}

value = programmer;

value = programmer.email;

value = programmer.addreses.street;
programmer.work();

value = programmer.langs.indexOf("Javascript");

const programmers = [

    {name : "Ege" , age : 21},
    {name : "Mustafa", age : 21}

]; // object Array ... We will use this in Json objects...

value = programmers[1];

console.log(value);