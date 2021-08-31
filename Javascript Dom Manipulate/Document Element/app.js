//Element Id'e göre seçme

let element ;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

//Element Class'a göre seçme

element = document.getElementsByClassName("list-group-item");

//Element Tag'e göre seçme

element = document.getElementsByTagName("a");


//Query Selector -Css Selector -Tek bir Element

element = document.querySelector("#todo-form");
element = document.querySelector(".list-group-item");

element = document.querySelector("div");

// QuerySelectorAll - Tüm Elementleri Seç
//NodeList döndürür NodeListler Arraylere benzer
element = document.querySelectorAll(".list-group-item");

element.forEach(function(alyans){

    console.log(alyans);

});