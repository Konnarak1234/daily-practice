
const div = document.querySelector('div.content');

// get children inside the selected parent
console.log(div.children);

// get parent from selected children point
const p = document.querySelector('.content p');

console.log(p.parentElement);

// get nearby sibling element
const h2 = document.querySelector('.content h2')
console.log(h2.nextElementSibling);
console.log(h2.previousElementSibling);