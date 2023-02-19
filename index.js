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
    
function summary(min, max) {
    let sum = 0;
    for (let i = max; i >= min; i -= 1){
        if (i % 2 !== 0) {
            continue;
        }
        sum += i;
        console.log(i);
    }
    return sum;
}
console.log(summary(10, 16));

