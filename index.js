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

// const logins = ["Peter", "John", "Igor", "Sasha"];
// const inputLogin = prompt("Enter Login");
// if (logins.includes(inputLogin)) {
//     console.log("Доступ дозволено");
// }
// else {
//     console.log("Користувач не знайден");
// }

// function findLogin(array) {
//   const inputLogin = prompt("Enter Login");
//   if (array.includes(inputLogin)) {
//      return console.log("Доступ дозволено");
//   }

//    return console.log("Користувач не знайден");

// }
// findLogin(logins)

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// function logItems(array) {
//     for (let i = 0; i < array.length; i+=1 ) {
//         console.log(`${i+1} - ${array[i]}`)
//     }
// }
// logItems(logins);

// // Наступна функція повертає true, якщо параметр age більше 18.
// // В іншому випадку вона запитує підтвердження через confirm і повертає його результат:
// let age = prompt("Скільки вам років?");

// function isAdult(age) {
//   //   if (age > 18) {
//   //     return true;
//   //   } else {
//   //     return confirm("Вам точно є 18?");
//   //   }
//   return age > 18 ? true : confirm("Вам точно є 18?");
// }
// console.log(isAdult(age));



//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

const names = ["Alla", "Petro", "Max", "Olena", "Boris"];


function addName(name) {
    names.push(name);
    return names;
}
console.log(addName("Serhii"));

function removeName(name) {

    const index = names.indexOf(name);
    if (index === -1) {
        return "User not faund"
    }
    names.splice(index, 1);
    return names;
}

HOMEWORK:
//1. Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

//2. При завантаженні сторінки користувачу пропонується
//в prompt ввести число. Ввод додається к значенню
//змінної total.
//Операція вводу числа продовжується до тих пір,
//доки користувач не натисне кнопку Cancel в prompt.
//Після того як користувач закінчив ввод натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сумма введенних чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

//3. Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо користувач ввів інше число - попросити
//ввести ще раз и так далі.
//Цикл повинен питати число, доки користувач не
//введе число більше 100, чи не натисне кнопку
//Cancel в prompt

//4. В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// 5. Є рядок, який складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є літера 'a'.
// Якщо це так - виведіть 'Так', в іншому випадку - 'Ні'.
// 6. Напишіть функцію min(a, b), яка повертає
// меньше з чисел a, b
//Додати перевірку, що функція отримує числа

// 7. Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

//8. Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.