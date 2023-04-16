// setTimeout(function () {
//   console.log('A');
//   setTimeout(function () {
//     console.log('B');
//     setTimeout(function () {
//       console.log('C');
//     }, 1000);
//   }, 2000);
// }, 3000);

// =================================================

// let i = 0;
// setTimeout(() => alert(i), 100);

// for (let j = 0; j < 1000000000; j++) {
//   i++;
// }

// =================================================

// const first = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "один");
// });

// const second = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "два");
// });

// Promise.race([first, second]).then((res) => console.log(res));

// =================================================

// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise((res) => {
//   console.log(3);
//   res();
// }).then(() => console.log(4));

// console.log(5);

// ================================================

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return "hello world";
// }
// // setTimeout(greet, 2000)
// let greetPromise = new Promise((res,rej) => {
//     setTimeout(()=>res("hello world"),2000);
// });
// greetPromise.then((response) => console.log(response));

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

let message = prompt("Введіть число");
function checkMessage(message) {
  return new Promise((res, rej) => {
    message = Number(message);
    if (Number.isNaN(message)) {
      rej("error");
    }
    if (message % 2 === 0) {
      setTimeout(()=>res("even"), 1000);
    }
    if (message % 2 !== 0) {
      setTimeout(()=>res("odd"), 2000);
    }
  });
}
checkMessage(message).then((response) => console.log(response)).catch((error) => console.log(error));
