const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

const clearAll = document.querySelector("#clear-all");
const checkAll = document.querySelector("#check-all");
const uncheckAll = document.querySelector("#uncheck-all");

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector("[name=item]").value;

  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);

  //   localStorage
  localStorage.setItem("items", JSON.stringify(items));

  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, index) => {
      return `
            <li>
                <input type="checkbox" 
                data-index="${index}" 
                id=item${index} 
                ${plate.done ? "checked" : ""}
                />
                <label for="item${index}">${plate.text}</label>
            </li>
        `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless its an input
  const el = e.target;
  const index = el.dataset.index;
  //   if L.H.S is true R.H.S will be false
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// Clear all item
function clearAllItem() {
  if (items.length !== 0) {
    localStorage.removeItem("items");
    itemsList.innerHTML = "";
  }
}

// Check All items
function checkAllItem() {
  if (items.length !== 0) {
    items.forEach(item => {
      item.done = true;
    });
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
  }
}

// Uncheck All items
function uncheckAllItem() {
  if (items.length !== 0) {
    items.forEach(item => {
      item.done = false;
    });
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
  }
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
clearAll.addEventListener("click", clearAllItem);
checkAll.addEventListener("click", checkAllItem);
uncheckAll.addEventListener("click", uncheckAllItem);

populateList(items, itemsList);
