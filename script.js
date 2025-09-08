// Select DOM elements
const toggleBtn = document.querySelector('.toggle-btn');
const content = document.querySelector('.content');
const hoverBox = document.querySelector('.hover-box');
const textInput = document.querySelector('.text-input');
const inputMessage = document.querySelector('.input-message');

// Click event: Toggle content visibility
toggleBtn.addEventListener('click', () => {
  content.classList.toggle('visible');
});

// Mouseover event: Change hover-box style
hoverBox.addEventListener('mouseover', () => {
  hoverBox.classList.add('active');
});

// Mouseout event: Revert hover-box style
hoverBox.addEventListener('mouseout', () => {
  hoverBox.classList.remove('active');
});

// Keyup event: Display input text
textInput.addEventListener('keyup', (event) => {
  inputMessage.textContent = event.target.value || 'Start typing to see your message!';
});