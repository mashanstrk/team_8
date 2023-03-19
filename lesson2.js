//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;

//   const userKeys = Object.keys(user);

//   for (const key of userKeys)  {
//     console.log(`${key}: ${user[key]}`)
//   }

// ================

//2. У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const salary = Object.values(salaries);

// console.log(salary.reduce((sum, item) => (sum + item), 0));

// let sum = 0;

// for (const salary of Object.values(salaries)) {
//   sum += salary;
// };

// console.log(sum);

//3. Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає массив об'єктів і
//рядок з назвами каміння.
//Функція рахує і повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
//   { name: "Діамант", price: 5700, quantity: 1 },
// ];

// const calcTotalPrice = (stones, stonesName) => stones.filter(stone => stone.name === stonesName).reduce((total, stone) => total + stone.price * stone.quantity, 0);

// console.log(calcTotalPrice(stones, "Діамант"));
// console.log(stones);

//7. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостями id, type, amount

// const account = {
//   //поточний баланс рахунка
//   balance: 0,

//   //Історія транзакцій
//   transactions: [],

//   //Метод створює і повертає об'єкт транзакцій
//   //Приймає сумму і тип транзакцій
//   createTransaction(type, amount) {
//     return {
//       type,
//       amount,
//     };
//   },

//   //Метод відповідає за додавання сумми к балансу.
//   //Приймає сумму транзакціи.
//   //Визиває createTransaction для створення об'єкта транзакціи
//   //після чого додає його в історію транзакцій
//   deposit(amount) {
//     this.balance += amount;
//     const transactionDep = this.createTransaction(Transaction.DEPOSIT, amount);
//     this.transactions.push({ ...transactionDep, id: new Date().valueOf() });
//     return this.transactions;
//   },
//   //Метод відповідає за зняття сумми з балансу.
//   //Приймає сумму транзакціи.
//   //Визиває createTransaction для створення об'єкта транзакціи
//   //після чого додає йогого в історю транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//   withdraw(amount) {
//     if (amount > this.balance){
//       return 'NOT ENOUGH MONEY';
//     }
//     this.balance -= amount;
//     const transactionWith = this.createTransaction(Transaction.WITHDRAW, amount);
//     this.transactions.push({ ...transactionWith, id: 123 });
//     return this.transactions;
//   },

//   //Метод повертає поточний баланс
//   getBalance() {
//     console.log(`На вашому рахунку ${this.balance} доларів`)
//    },
//   //Метод шукає і повертає об'єкт транзакції по id
//   getTransactionDetails(id) {
// const idTrans = this.transactions.find(transaction => transaction.id === id)
// // те ж саме що idTrans === undefined
//  if (!idTrans) {
//     return `Транзакцію з таким id не знайдено`
//  }
//  return idTrans;
//    },

//   //Метод повертає кількіств коштів вказаного типу
//   //транзакціи зі всієї історії транзакцій
//   getTransactionType(type) { }
// }
// console.log(account.deposit(500));
// console.log(account.withdraw(300));
// console.log(account.withdraw(700));
// account.getBalance();
// console.log(account.getTransactionDetails(1234));

// ===============

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// function getSortedUniqueSkills(users) {

//   const sumSkills = [];

//   for (const user of users) {
//     sumSkills.push(...user.skills);
//   }

//   sumSkills.sort();

//   for (let i = 0; i < sumSkills.length; i++) {
//     if (sumSkills[i] === sumSkills[i + 1]) {
//       sumSkills.splice(i + 1, 1);
//     }
//   }

//   return sumSkills;
// // }

// function getSortedUniqueSkills(users) {
//   return [...users].flatMap(user => user.skills).filter((item, index, array) => array.indexOf(item) === index).sort();
// }

// console.log(getSortedUniqueSkills(users));

// Homework:

// Task 1

// Отримати масив імен усіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Task 2

// Отримати масив об'єктів користувачей по кольору очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'є'кт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// Task 3

// Отримати загальну суму баланса (поле balance) усіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916

// Task 4

// Отримати масив імен користувачів по полю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]