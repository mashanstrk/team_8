//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const message = prompt("Яка офіційна назва JavaScript?");
// console.log(message);

// if (message === "ECMAScript") {
//     alert("Вірно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// let userAnswer = prompt("кількість хвилин");

// let hours = Math.floor(userAnswer / 60);
// hours = String(hours).padStart(2, "0");

// let minutes = userAnswer % 60;
// minutes = String(minutes).padStart(2, "0");

// console.log(`You entered ${hours}:${minutes}`);

//Напишіть цикл, який виводить в консоль
//числа от max до min по убыванию
//Виведіть в консоль суму усіх парних чисел

// const min = 0;
// const max = 10;
// let sum = 0;
// for (let i = max; i >= min; i -= 1){
//     console.log(i);
//     if (i % 2 === 0) {
//     sum += i;
//     }

// }
// console.log(sum);

// function summary(min, max) {
//     let sum = 0;
//     for (let i = max; i >= min; i -= 1){
//         if (i % 2 !== 0) {
//             continue;
//         }
//         sum += i;
//         console.log(i);
//     }
//     return sum;
// }
// console.log(summary(10, 16));

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 10;
// let result = " ";

// switch (num) {
//   case 1:
//     result = " winter";
//     break;
//   case 2:
//     result = "spring";
//     break;
//   case 3:
//     result = "summer";
//     break;
//   case 4:
//     result = "autumn";
//     break;
//   default:
//     result = "Entered number is not corect, please enter number 1-4";
// }
// console.log(result);

// function timeOfYear(num) {
//   let result = " ";

//   switch (num) {
//     case 1:
//       result = " winter";
//       break;
//     case 2:
//       result = "spring";
//       break;
//     case 3:
//       result = "summer";
//       break;
//     case 4:
//       result = "autumn";
//       break;
//     default:
//       result = "Entered number is not corect, please enter number 1-4";
//   }
//   return result;
// }
// console.log(timeOfYear(33));

// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

// const styles = ['Джаз', 'Блюз']
// styles.push('Рок-н-ролл');
// // styles.splice(1, 1, 'Класика');

// const index = styles.indexOf('Блюз');
// styles[index] = 'Класика';
// console.log(styles.shift());
// styles.unshift('Реп', 'Реггі');
// console.table(styles);

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

const logins = ["Peter", "John", "Igor", "Sasha"];
// const inputLogin = prompt("Enter Login");
// if (logins.includes(inputLogin)) {
//     console.log("Доступ дозволено");
// }
// else {
//     console.log("Користувач не знайден");
// }

function findLogin(array) {
  const inputLogin = prompt("Enter Login");
  if (array.includes(inputLogin)) {
     return console.log("Доступ дозволено");
  }
 
   return console.log("Користувач не знайден");
  
}
findLogin(logins)


