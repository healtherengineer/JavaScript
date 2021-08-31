let value ; 

//Scripts

value = this.document;
value = this.document.scripts;
value = this.document.scripts.length;
value = this.document.scripts[document.scripts.length-1];


//Links
value = this.document.links;
value = this.document.links[0];
value = this.document.links[0].className;
value = this.document.links[0];
value = document.links[0].getAttribute("href");
value = document.links[0].className;
value = document.links[0].classList;

// Forms

value = document.forms;
value = document.forms.length;
value = document.forms["form"];
value = document.forms["form"].id;
value = document.forms["form"].getAttribute("id");


value = document.forms["form"].getAttribute("name");

value = document.forms[0].method;

console.log(value);