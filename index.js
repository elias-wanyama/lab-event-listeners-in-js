// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Changes the background color using an rgb format to satisfy the test regex
  document.body.style.backgroundColor = "rgb(173, 216, 230)";
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Sets to an empty string to clear out inline styles as expected by the test
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay');
  // Formats text with the exact prefix required by the test framework
  keyPressDisplay.textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const textInputDisplay = document.getElementById('textInputDisplay');
  // Uses backticks to inject the input field value alongside the requested prefix
  textInputDisplay.textContent = `You typed: ${textInput.value}`;
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
