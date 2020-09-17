'use strict';
//javascript Hoisting

// let userName = "mahmoud";
// userName = "ahmad"

// console.log('name:', userName);
const userName = "mahmoud";
// userName = "ahmad"
 console.log(a)
//  a = 4;
// console.log('A:',a)

console.log('name:', userName);
myFunc();
function myFunc(){
  var a = 4;
  console.log('hi');
}
//global
let funcExpression = function(){
  //local
  if(true){
    // local
    // for(){
    //   fullName = "testTest";
    //   // local
    // }
  }
  console.log('noooo');
}
console.log(funcExpression)
funcExpression();
// debugger
// reference error


// hoisting 
/*
all Vars go to the top of the code with a value of undefined
all function decleration will go to the top with its values 
all function expressions will be hoisted to the top with a value of undefined
*/

/*
let and const will replace var so we dont have hoisting issues
*/