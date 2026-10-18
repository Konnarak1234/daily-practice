
// select specific DOM
let param = document.querySelector('.error');
let div = document.querySelector('div.error');


console.log(param);
console.log(div);

// select list of DOM
let params = document.querySelectorAll('p');

params.forEach((param) => {
    console.log(param)
});

console.log(params)


// Alternative selective
// alternative to .querySelector('#error')
let p = document.getElementById('error');

// Alternative selective as List
// The different is, it will return the list of HTMLList
// HTMLList can't access forEach() method
let listOfErrors = document.getElementsByClassName('error');
let listOfParam = document.getElementsByTagName('p');