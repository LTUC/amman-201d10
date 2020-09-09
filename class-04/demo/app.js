'use strict';
// Functions

/*
a function is like a box

Function Declaration
function funcName(parameters) {
  function body
}

Function Expression
var funcName = function(){
  function body
}

to call a function
funcName(arguments);
*/

function sayHello() {
  console.log('Hello World!');
}

// Call or invoke function
sayHello();
 
function sayGoodBye(userName) {
  // userName is a parameter
  return('bye ' + userName);
}
var x; // Javascript default value is undefined
console.log(x);
// call function with argument
var bye = sayGoodBye('mahmoud');
console.log(bye);

function calc(x,y){
  return x + y;
} 
console.log(sayGoodBye(calc(3,4)));
var showName = function(){
  var userName = prompt('Name?');
  alert(userName);
};


showName();

// Immediately Invoked Functions

(function (name){
  alert(`Hi ${name}`);
})('hamza');

/* Scope
 Global
  - declared variables are visible from anywhere
 Local
  - declared variables inside functions are visible only from inside
*/ 

var globalVar = 'Hi I\'m Global';

function myFunc(){
  var localVar = 'Hi I\'m Local';
  console.log('In:',globalVar); // 'Hi I\'m Global'
  console.log(localVar); // 'Hi I\'m Local'
  return localVar;
}

console.log('Out: ',globalVar); //'Hi I\'m Global'
// console.log(localVar); // Error
console.log(myFunc());
