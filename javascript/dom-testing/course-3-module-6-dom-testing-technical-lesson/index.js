// Your code here!
const button = document.getElementById("add-item");
const list = document.getElementById("item-list");

//function to dynamically add a new item to the list when the button is clicked
function addItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
}
//Attac event listener to the button
button.addEventListener("click", addItem);