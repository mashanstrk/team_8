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

// class User {
//     constructor({userName, age, numbersOfPost}){
//         this.userName = userName;
//         this.age = age;
//         this.numbersOfPost = numbersOfPost;
//     }
//     getInfo() {
//         return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
//     }
// };
// const user1 = new User({ userName: "Serg", age: 18, numbersOfPost: 23 });
// console.log(user1);
// console.log(user1.getInfo());

//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get getClientData() {
//         return {
//             login: this.#login,
//             email: this.#email,
//         }
//     }

//     set changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const poly = new Client ("poly1234", "poly24@gmail.com")
// console.log(poly)
// console.log(poly.getClientData)
// poly.changeEmail = "mynewemail@gmail.com"
// console.log(poly.getClientData.email)

// -------

//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priopity,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priority = {
//     HIGHT: "hight",
//     MIDDLE: "middle",
//     LOW: "low",
//   };
//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const removeIndex = this.items.findIndex((item) => item.text === text);

//     if (removeIndex === -1) {
//       console.log("removeIndex doesn't exist!");
//     } else {
//       this.items.splice(removeIndex, 1);
//     }
//   }

//   updatePriority(text, newPriority) {
//     const updateIndex = this.items.findIndex((item) => item.text === text);
//     if (updateIndex === -1) {
//       console.log("updateIndex doesn't exist!");
//     } else {
//       this.items[updateIndex].priority = newPriority;
//     }
//   }
// }

// const note = new Notes();
// note.addNote({ text: "note_1", priority: Notes.Priority.HIGHT });
// note.addNote({ text: "note_2", priority: Notes.Priority.MIDDLE });
// note.addNote({ text: "note_3", priority: Notes.Priority.LOW });

// console.table(note.items);

// note.removeNote("note_2");

// console.table(note.items);

// note.updatePriority("note_3", Notes.Priority.HIGHT);

// console.table(note.items);


// 4. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary, який повертає повідомлення
//"Worker <name> has salary <salary> dollars"
//Створити клас TopLevelWorker, у якого є властивість position
//і який успадковує клас Worker, додаючи метод getPosition

// class Worker {
//     constructor(object) {
//         const { name, age, salary } = object;
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     getSalary() {
//        return `Worker ${this.name} has salary ${this.salary} dollars`
//    }
// }
// const worker1 = new Worker({ name: "Serhii", age: 30, salary: 1000 });
// console.log(worker1)
// console.log(worker1.getSalary())

// class TopLevelWorker extends Worker {
//     constructor(object, position) {
//         super(object);
//         this.position = position;
// }
//     getPosition() {
//         return `Worker ${this.name} works as ${this.position}`
//     }
// }
// const worker = { name: "Oleksii", age: 27, salary: 2000 };
// const worker2 = new TopLevelWorker(worker, "Middle")
// console.log(worker2)
// console.log(worker2.getPosition())
// console.log(worker2.getSalary())