let value ;

const now = new Date();

const date1 = new Date('April 26,2000 05:15:32');

const date2 = new Date('2000-04-26 03:12:00');

value = now ;
value = date1 ;
value = date2 ;
value = date2.getDate();
value = date2.getDay();
value = date2.getMinutes();
value = date2.getDate();// it gives day of the date .

date2.setDate("10");
date2.setFullYear("2018");
date2.setHours("6");
date2.setMinutes("25"); // artanı saate ekliyor 60 a bölüyor.
date2.setMilliseconds("1");
value = date2;
console.log(value);