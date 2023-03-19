//1. Напишіть дві функції
// letMeSeeYourName(callback) - питає ім'я користувача
//через prompt и викликає callback функцію
//greet(name) - коллбек, якій приймає ім'я та логірує в консоль
//рядок "Привіт, <name>"
//Реалізуй перевірку, що prompt не пустий
// якщо пустий - додай дефолтне значення

function letMeSeeYourName(callback) {
    let name = prompt("Вкажіть ваше ім'я");
    if (!name) name = "user"
    callback(name)
}

function greet(name) {
console.log(`Привіт ${name}`)
}

letMeSeeYourName(greet);