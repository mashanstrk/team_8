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

// function makeProduct(name, price, callback) {
//     const product = {
//         id: Math.random(),
//         name,
//         price,
//     };

//     callback(product);
// }

// function showProduct(product) {
//     console.log(product);
// }

// makeProduct("Car", 100500, showProduct);

// / 1. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);

//   },
// };
// product.showPrice();
// // 2. Яким буде результат виклику функції?
// function f() {
//   console.log(this.name);
// }

// const foo = f.bind({ name: "Іван" }).bind({ name: "Петро" });

// foo();
// 3. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }
// callAction(product.showPrice.bind(product));

// 4. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }

// const user = {
//     name: "Serhii",
//     loginOk() {
//         console.log(`${this.name} logged in`);
//     },
//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     }
// }

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта

//1. Створи клас User для створення користувача з такими властивостями:
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

class User {
    constructor({userName, age, numbersOfPost}){
        this.userName = userName;
        this.age = age;
        this.numbersOfPost = numbersOfPost;
    }
    getInfo() { 
        return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
    }
};
const user1 = new User({ userName: "Serg", age: 18, numbersOfPost: 23 });
console.log(user1);
console.log(user1.getInfo());