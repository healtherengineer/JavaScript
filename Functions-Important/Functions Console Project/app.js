const customer1 = {
    fullName: "Ege BARIŞAN",
    age: 21,
    id: 1
}
const customer2 = {
    fullName: "Mustafa ZAİMOĞLU",
    age: 21,
    id: 2
}
const database = {
    add: function (customer) {
        if(customer==null){
            console.log("Parametre düzgün gönderilmedi");

        }else{
            console.log(customer.fullName + " isimli müşteri eklendi...");

        }
    },
    delete: function (id) {

        console.log(`${id} id'li müşteri silindi ...`);

    },
    get : function(id){
        console.log(`${id} id'li müşteri bulundu`);

    },
    update : function(id){
        console.log(`${id} id'li müşteri güncellendi ...`);


    }
}

database.add();
database.add(customer2);
database.add(customer1);
database.delete(customer1.id);
database.delete(customer2.id);
database.get(23);
database.update(customer1.id);

console.log(customer1);