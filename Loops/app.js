let a  = 10;

// while(a > 0){
//     console.log("You will be able to do it.Just believe");
//         a--;
//         console.log("");
// }

let cars = ["Toyata" , "Ford" , "Ferrari"];

// for(let i =  0  ; i < cars.length; i++){
//     console.log( i + cars[i] + ",");

// }


// function ın içindeki "car" alyans 
// cars.forEach(function(car){
//     console.log(car);

// })


//Javascript for in 

const car1 = {
    model : "Wolkswagen",
    year  : "1996" 
}

const car2 = {
    model : "Ford",
    year  : "1991" ,
    owner : "Ege Barışan"
}
console.log(car1);

for(let key in car1){
    //console.log(key);  //propertyleri verir
    console.log(key,car1[key]);//property ile property e karşılık gelen özellik verir.

}

let message = ""; 

for(let property in car2){
    message += car2[property] + " ";

}

console.log(message);
document.getElementById("demo").innerHTML = message;

