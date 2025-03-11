const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const textInput = nameInput.value.trim();
  if (textInput === '') {
    nameOutput.textContent = 'Anonymus';
  } else {
    nameOutput.textContent = textInput;
  }
});
