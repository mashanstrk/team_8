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