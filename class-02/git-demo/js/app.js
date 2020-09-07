// linting rules
// 1 have eslint installed (eslint -v) one time thing (you already did it in 102)
// 2 have .eslintrc.json in your repo or folder
// 3 in any js file put 'use strict'

'use strict';
// Data Types (number,bool,string)
var num = 1;
console.log(typeof num); //number (1,1.2,0.1)
var str = 'mahmoud';
console.log(typeof str);
var bool = true;
console.log(typeof bool);

// Conditional Statement

/*
condition = True OR false
statement is any operation 
if(condition){
  do statement
}
*/

/*
if(condition){
  do statement
}else{
  do another statement
}
*/

/*
if(condition1){
  do statement
}else if(condition2){
  do another statement
}else{
  do last statement
}
*/

/*
switch(key){
case condition:
  do statement
  break;
case condition:
  do statement
  break;
default:
}
*/
var age = 19;

if (age > 20) {
  // only if the condition is true
  alert('hi');
} else {
  // only if the condition is false
  console.log('hello');
}

// Lgical operations
/*
or (||) it will always be true unless both are false
T || T => T
T || F => T
F || T => T
F || F => F

and (&&) it will always be false unless both are true
T && T => T
T && F => F
F && T => F
F && F => F
*/
var isOld = true;
var isFat = false;

if (isOld && isFat) {
  console.log('hi fat old');
} else {
  console.log('if without ifElse');
}

if (isOld && isFat) {
  console.log('hi fat old');
} else if (isOld || isFat) {
  console.log('hi fat Or old!');
} else {
  console.log('Noooooooooooo!');
}

var age = 16;

if (age < 18) {
  console.log('Go home');
} else if (age > 18) {
  console.log('You are good to go');
} else {
  console.log('Happy birthday');
}
var name = 'MaHmoud';

// var color = prompt('What is your favorite color?');

// switch (color.toLocaleLowerCase()) {
//   case 'red':
//     console.log('red');
//     break;
//   case 'blue':
//     console.log('blue');
//     break;
//   default:
//     console.log('Black');
//     break;
// }

var number = Number(prompt('What is your favorite number?'));

switch (true) {
  case (number >6):
    console.log('red');
    break;
  case 3:
    console.log('blue');
    break;
  default:
    console.log('Black');
    break;
}
var isSure = confirm('are you sure?');
console.log(isSure);