// Select the dodger element for manipulation
// Hint: Use document.getElementById to select the element with id "dodger"
const dodger = document.getElementById("dodger");
// Function to move the dodger left
// Hint: Define a function moveDodgerLeft()
// Hint: Convert the current left position from a string to an integer
// Hint: Ensure the dodger doesn't move off-screen
// Hint: Update the left position of the dodger
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) { // Prevent moving off-screen
    dodger.style.left = `${left - 10}px`;
  }
}


// Function to move the dodger right
// Hint: Define a function moveDodgerRight()
// Hint: Convert the current left position from a string to an integer
// Hint: Ensure the dodger doesn't move off-screen
// Hint: Update the left position of the dodger
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Prevent moving off-screen
    dodger.style.left = `${left + 10}px`;
  }
}


// Attach event listener to respond to key presses
// Hint: Use document.addEventListener to listen for "keydown" events
// Hint: Inside the event listener, call moveDodgerLeft if the left arrow key is pressed
// Hint: Call moveDodgerRight if the right arrow key is pressed
document.addEventListener("keydown", function (event) {
  console.log(event.key); // Logs the key pressed
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});


