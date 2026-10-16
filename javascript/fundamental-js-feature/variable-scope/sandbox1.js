
// Different between let and var keyword:
// - variable that define with "let" will have a right and constraince scope of accessing
// - variable that define with "var" will be accessing anywhere in a script without scope constrain

// To understand behaviour of scripts execution hierarcy and posistion in term of main{}, we need to test 3 things:
// 1. if we want to know does all scripts execution are mounted in one {...script1, script2} : declaring same variable 2 time
// 2. if we want to know does all scripts execution are mount seperatly {{script1} {script2}} : declaring same variable 2 time + accessing value declare in script1
// 3. if condition 2 fail, scripts execution will nested in each order co-related to order of execution {script1 {script2..{}}}

let num = 3;
console.log(num);