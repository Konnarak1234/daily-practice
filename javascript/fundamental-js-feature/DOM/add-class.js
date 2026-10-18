const p = document.querySelector('p.error');

// adding new class to class's attribute
p.classList.add('haha');
// remove new class to class's attribute
p.classList.remove('haha');
// add/remove new class to class's attribute if non-exist/exist
p.classList.toggle('haha');

console.log(p.classList);