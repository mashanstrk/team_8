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

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  //поточний баланс рахунка
  balance: 0,

  //Історія транзакцій
  transactions: [],

  //Метод створює і повертає об'єкт транзакцій
  //Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод відповідає за додавання сумми к балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const transactionDep = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push({ ...transactionDep, id: new Date().valueOf() });
    return this.transactions;
  },
  //Метод відповідає за зняття сумми з балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає йогого в історю транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
    if (amount > this.balance){
      return 'NOT ENOUGH MONEY';
    }
    this.balance -= amount;
    const transactionWith = this.createTransaction(Transaction.WITHDRAW, amount);
    this.transactions.push({ ...transactionWith, id: 123 });
    return this.transactions;
  },

  //Метод повертає поточний баланс
  getBalance() {
    console.log(`На вашому рахунку ${this.balance} доларів`)
   },
  //Метод шукає і повертає об'єкт транзакції по id
  getTransactionDetails(id) {
const idTrans = this.transactions.find(transaction => transaction.id === id) 
// те ж саме що idTrans === undefined
 if (!idTrans) {
    return `Транзакцію з таким id не знайдено`
 } 
 return idTrans;
   },

  //Метод повертає кількіств коштів вказаного типу
  //транзакціи зі всієї історії транзакцій
  getTransactionType(type) { }
}
console.log(account.deposit(500));
console.log(account.withdraw(300));
console.log(account.withdraw(700));
account.getBalance();
console.log(account.getTransactionDetails(1234));