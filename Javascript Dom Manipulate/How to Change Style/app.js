const element = document.querySelector("#clear-todos");

// let value ; 

// console.log(element.id);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.href);
// console.log(element.style);

// value = element.classList;
// console.log(value);

//Style ve Element Özelliklerini değiştirme

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "15px";
// element.href = "https://www.mryazilim.net/";
// element.target = "_blank";
// element.textContent = "Hepsini Sil";

// element.innerHTML = "<span style ='color:yellow'>Silin</span>"

// const elements = document.querySelectorAll(".list-group-item");

// elements.forEach(function(el){

//     // el.style.color = "red";
//     // el.style.background = "#eee";
// });


let even = document.querySelectorAll(".list-group li:nth-child(2n+1)");

even.forEach(function(ev){

    ev.style.color ="red";
    ev.style.background = "#eee";
});

// console.log(even);

