// Changing text inside html element
const p = document.querySelector('p');

console.log(p.innerText);

p.innerText = 'hello world change';


// changing html inside html element
const content = document.querySelector('.content');

content.innerHTML += '<p>hello me</p>';

// listing array of data to html content
const fruits = ['banana', 'grape', 'apple'];

fruits.forEach((fruit) => {
    content.innerHTML += `<p>${fruit}<p>`;
});