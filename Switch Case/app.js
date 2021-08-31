let value;
value = new Date();
let message;
switch (value.getDay()) {
    case 0:
        message = "Today is Sunday";
        break;
    case 1:
        message = "Today is Monday";
        break;
    case 2:
        message = "Today is Tuesday";
        break;
    case 3:
        message = "Today is Wednesday " + (6 - value.getDay())+" days left to the Weekend";
        break;
    case 4:
        message = "Today is Thursday";
        break;
    case 5:
        message = "Today is Friday";
        break;

    case 6:
        message = "Today is Saturday";
        break;
   
    default:
        message = "I am looking forward to the Weekend to go to my ctiy";
        break;
}

console.log(message);
