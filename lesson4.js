// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const firstList = document.createElement("ol");
// const addBtn = document.createElement("button");
// const removeBtn = document.createElement("button");
// addBtn.textContent = "ADD";
// removeBtn.textContent = "REMOVE";
// const inputList = document.createElement("input");

// document.body.append(firstList, addBtn, removeBtn, inputList);

// addBtn.addEventListener("click", onAddClick);
// function onAddClick() {
//   // console.log(inputList.value);
//   if (inputList.value.trim() === "") {
//     return;
//   }
//   const newLi = document.createElement("li");
//   newLi.textContent = inputList.value;
//   firstList.append(newLi);
//   //   if (firstList.children.length % 2 === 0) {
//   //     newLi.style.background = "yellow";
//   //   } else {
//   //     newLi.style.background = "blue";
//   //   }
//   newLi.style.background =
//     firstList.children.length % 2 === 0 ? "yellow" : "blue";
//   inputList.value = "";
// }

// removeBtn.addEventListener("click", onRemoveClick);

// function onRemoveClick() {
//   if (firstList.lastChild) {
//     firstList.lastChild.remove();
//   }
// }

// ==== TASK 2 ====

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// function chaneNpcStyles(npcEl) {
//   npcEl.style.cssText = forms[randomither(forms.length)];
//   npcEl.style.backgroundColor = getRandomHexColor();
//   npcEl.style.position = "absolute";
//   npcEl.style.top = randomither(100) + "%";
//   npcEl.style.left = randomither(100) + "%";
// }

// function createFormMarkup(forms) {
//   const npcEl = document.createElement("div");
//   chaneNpcStyles(npcEl);
//   document.body.append(npcEl);

//   npcEl.addEventListener("click", () => chaneNpcStyles(npcEl));
// }

// createFormMarkup(forms);

// ==== TASK 3 ====

// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// const cube = document.createElement("div");
// const btnDecrement = document.createElement('button');
// const btnIncrement = document.createElement('button');
// let size = 50;
// cube.style.width = `${size}px`;
// cube.style.height = `${size}px`;
// cube.style.background = "tomato";

// btnDecrement.textContent = "Зменшити";
// btnIncrement.textContent = "Збільшити";

// document.body.append(cube, btnDecrement, btnIncrement);

// btnDecrement.addEventListener("click", onBtnDecrement);
// function onBtnDecrement() {
//   if (size === 10) return;
//   size -= 10;
//   cube.style.width = `${size}px`;
//   cube.style.height = `${size}px`;
// }

// btnIncrement.addEventListener("click", onBtnIncrement);
// function onBtnIncrement(){
//   size += 10;
//   cube.style.width = `${size}px`;
//   cube.style.height = `${size}px`;
// }

// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".
// const tableEl = document.querySelector("#productTable");
// tableEl.addEventListener('click', onClick);
// function onClick(event) {
//     if (event.target.nodeName !== "TD") return;

//     const parent = event.target.parentNode;

//     const product = parent.firstElementChild.textContent;
//     const price = parent.lastElementChild.textContent;

//     const divEl = document.querySelector("#productDetails");

//     divEl.textContent =`Ви вибрали ${product} за ${price}`
// }

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const inputEl = document.querySelector("#passwordInput");
// const btn = document.querySelector("#passwordButton");

// btn.addEventListener('click', onClick);
// function onClick() {
//     if (btn.textContent === "Розкрити") {
//           btn.textContent = "Приховати";
//     inputEl.style.color = "inherit";
//     } else {
//         btn.textContent = "Розкрити";
//     inputEl.style.color = "transparent";
//     }
// }

// <!-- ЗАДАЧА 8 -->

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/
// const btnAll = document.querySelector(".statList");
// const resaultBtn = document.querySelector("#resultButton");
// const resultSection = document.querySelector("#resultSection");
// let sum = 0;
// let total = {};
// btnAll.addEventListener("click", onClickBtn);

// function onClickBtn(evt) {
//   if (evt.target.nodeName !== "BUTTON") return;
//   const num = Number(evt.target.dataset.number);
//   sum += num;
//   const btnName = evt.target.textContent;
//   if (total[btnName]) {
//     total[btnName] += 1;
//   } else {
//     total[btnName] = 1;
//   }
//   console.log(total);
// }

// resaultBtn.addEventListener("click", onClickResault);

// function onClickResault() {
//   let markup = "";
//   for (const key in total) {
//     markup += `Кнопка ${key} клікнута ${total[key]} разів`;
//   }
//   resultSection.textContent = `Загальна сума = ${sum}, ${markup}`;
//   sum = 0;
//   total = {};
// }

// Завдання 7
// При натисканні на коло він повинен слідувати за курсором.
// При повторному натисканні він стає в початкове положення.
// */



// <!-- ЗАДАЧА 11 -->
//     <!-- <p class="taskTitle">ЗАДАЧА 11</p>
//     <input class="contactsFilter" type="text" />
//     <ul class="contacts">
//       <li class="contact">Peter Miller</li>
//       <li class="contact">John Carter</li>
//       <li class="contact">Amanda Diaz</li>
//       <li class="contact">Brad Sanders</li>
//       <li class="contact">Devis Brooks</li>
//       <li class="contact">Robert Morgan</li>
//     </ul> -->

// /*
// Завдання 11
// Наведено список людей. Зроби фільтр на ім'я/прізвище.
// */
// goit tutor_6 to Everyone (2 Apr 2023, 12:32)
// <!-- ЗАДАЧА 13 -->
//     <!-- <p class="taskTitle">ЗАДАЧА 13</p>
//     <ul class="grid">
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//     </ul> -->

// .grid {
//   display: flex;
//   width: 460px;
//   height: 460px;
//   border: 2px solid white;
//   flex-wrap: wrap;
//   padding: 0;
//   margin: 0;
// }

// .gridItem {
//   width: calc(100% / 3);
//   height: calc(100% / 3);
//   background-color: red;
//   border: 1px dashed black;
//   border-radius: 50%;
//   margin: 0;
//   padding: 0;
//   list-style: none;
// }
// .hide {
//   background-color: transparent;
//   border: 1px dashed transparent;
// }

// /*
// Завдання 13
// Коло має зникати при наведенні на нього.
// При цьому позиція сусідніх кіл має залишатися незмінною.
// */

// <!-- ЗАДАЧА 14 -->
//     <!-- <ul class="gallery"></ul> -->

// .eventThumb {
//   display: flex;
//   gap: 10px;
//   flex-wrap: wrap;
// }

// .eventList {
//   list-style: none;
//   margin: 0;
//   padding: 15px;
//   font-size: 18px;
//   line-height: 1.5;
//   letter-spacing: 0.02em;
// }

// .eventKey {
//   color: firebrick;
// }

// .eventCode {
//   color: blueviolet;
// }

// // Завдання 14
// // Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// // Додати класи на список eventList, на елементи eventCode та eventKey
