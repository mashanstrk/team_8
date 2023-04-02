// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

const firstList = document.createElement("ol");
const addBtn = document.createElement("button");
const removeBtn = document.createElement("button");
addBtn.textContent = "ADD";
removeBtn.textContent = "REMOVE";
const inputList = document.createElement("input");

document.body.append(firstList, addBtn, removeBtn, inputList);

addBtn.addEventListener("click", onAddClick);
function onAddClick() {
  // console.log(inputList.value);
  if (inputList.value.trim() === "") {
    return;
  }
  const newLi = document.createElement("li");
  newLi.textContent = inputList.value;
  firstList.append(newLi);
  //   if (firstList.children.length % 2 === 0) {
  //     newLi.style.background = "yellow";
  //   } else {
  //     newLi.style.background = "blue";
  //   }
  newLi.style.background =
    firstList.children.length % 2 === 0 ? "yellow" : "blue";
  inputList.value = "";
}

removeBtn.addEventListener("click", onRemoveClick);

function onRemoveClick() {
  if (firstList.lastChild) {
    firstList.lastChild.remove();
  }
}
