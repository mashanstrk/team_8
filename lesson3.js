//1. Напишіть дві функції
// letMeSeeYourName(callback) - питає ім'я користувача
//через prompt и викликає callback функцію
//greet(name) - коллбек, якій приймає ім'я та логірує в консоль
//рядок "Привіт, <name>"
//Реалізуй перевірку, що prompt не пустий
// якщо пустий - додай дефолтне значення

// function letMeSeeYourName(callback) {
//     let name = prompt("Вкажіть ваше ім'я");
//     if (!name) name = "user"
//     callback(name)
// }

// function greet(name) {
// console.log(`Привіт ${name}`)
// }

// letMeSeeYourName(greet);

//2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товара, а також callback.
//Функція створює об'єкт товара, додавая йому унікальний
//ідентифікатор у властивість id та викликає callback
//передавая йому створений об'єкт.
//showProduct(product) - коллбек приймає об'єкт
//продукта і логірує його в консоль

function makeProduct(name, price, callback) {
    const product = {
        id: Math.random(),
        name,
        price,
    };

    callback(product);
}

function showProduct(product) {
    console.log(product);
}

makeProduct("Car", 100500, showProduct);
