// getting html attribute from <a> achor tag

const a = document.querySelector('a');

console.log(a.getAttribute('href'));

// setting html attribute
a.setAttribute('href', 'https://chatgpt.com');

// adding an unexisting attribute to html tag
a.setAttribute('style', 'color: green;');