// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let num = Number(prompt("Enter a num:"));
// if (num > 0) {
//     console.log(true);
// } else if (num < 0) {
//     console.log(false);
// } else {
//     console.log("It's zero");
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let word = (prompt("Enter a word:"));
// if (word == "test") {
//     console.log(true);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let number = Number(prompt("Enter a number:"));
// if (number > 10) {
//     number -= 5;
// } else if (number < 10) {
//     number += 5;
// }
// console.log(number);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let monthNum = Number(prompt("Enter the number of the month (1-12):"));
// switch(monthNum) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;

//     default:
//         console.log("Invalid month number");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let value = prompt("Enter a three-digit number please:");
// let result = 0;

// for (i = 0; i < value.length; i++) {
//     result += Number(value[i]);
// }

// alert(`The sum = ${result}`);