// function Hello(){
//     //.... 
// }

// function helloToConsole(name ,age){
//     // console.log("Helloooo," + name + " Yaş : " + age );
//     if(typeof name === "undefined" ) name = "Bilgi Yok";
//     if(typeof age === "undefined") age = "Bilgi Yok";
//     console.log(`İsim : ${name} Yaş : ${age} ...`);
// }
// helloToConsole();
// helloToConsole("Ege");
// helloToConsole(undefined,12)
// helloToConsole("Ege" , 12);

// Farklı bir yazım
function helloToConsole(name="İsimsiz",age = "Belirsiz"){
        // console.log("Helloooo," + name + " Yaş : " + age );
        // if(typeof name === "undefined" ) name = "Bilgi Yok";
        // if(typeof age === "undefined") age = "Bilgi Yok";
        console.log(`İsim : ${name} Yaş : ${age} ...`);
    }

    helloToConsole();
helloToConsole("Ege");
helloToConsole(undefined,12)
helloToConsole("Ege" , 12);

//Immediately Invoked Function Expressed 
// Tanımlandığı yerde çalışan fonksiyon

(function(para1){
    console.log("Hemen Fonskiyon diye adlandırıyorum ben." + para1);

})(" Çok kolay."); // () bu ifade hemen fonksyonu çağırır.




