//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

const message = prompt("Яка офіційна назва JavaScript?");
console.log(message);

if (message === "ECMAScript") {
    alert("Вірно!")
} else {
    alert("Не знаєте? ECMAScript!")
}