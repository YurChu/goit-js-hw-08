function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// ----------------
const color = document.querySelector('.color');
const newColor = document.querySelector('.change-color');
//
newColor.addEventListener('click', event => {
  const rndColor = getRandomHexColor();
  document.body.style.backgroundColor = rndColor;
  color.textContent = rndColor;
});
