const categories = document.querySelector('#categories');

const itemsOfCategories = document.querySelectorAll('li.item');
console.log(`number of categories ${itemsOfCategories.length}`);
itemsOfCategories.forEach(item => {
  const elements = item.querySelectorAll('li');
  const title = item.querySelector('h2').textContent;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});
