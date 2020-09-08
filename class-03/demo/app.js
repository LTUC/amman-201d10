'use strict';

// Truthy and Falsy values????

// Truthy values:

/*
1. true
2. 1
3. 'mahmoud'
4. 4/2
5. 'false'
6. '0'
7. []
*/

// Falsy values
/*
1. false
2. 0
3. ''
4. '5'/10
5. var a;
6. undefined
7. null
8. NAN

*/
var str = ''; // falsy value
if (str) {
  console.log('hi');
} else {
  console.log('nooo');
}
var str1 = 'mahmoud'; // truthy value
if (str1 !== '') {
  console.log('hi');
} else {
  console.log('nooo');
}
var num = 'false'; // truthy value
if (num) {
  console.log('hi');
} else {
  console.log('nooo');
}
console.log(true/5);
console.log(false/5);
console.log('mahmoud'/6)

// Arrays
// values are stored at index, always start at 0
// to access values we need to provide the index arr[0]
var arr = ['mahmoud','saja','alaa','ahmad'];
//             0    ,   1  ,   2  ,   3
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr.length);
arr[0] = 'Hamza';
console.log(arr);
console.log(arr.pop());
console.log(arr);
arr.push('mahmoud');
console.log(arr);
arr.splice(1, 2); // advance remove 2 names from the array starting at index 1
console.log(arr);
arr.push('farah');
// Loops
/*
1. For Loop
  for(define;condition;update){

  }
2. While Loop
   while(condition is true){
     do statement
     update iterator
   }

3. Do while
   - at least it will run 1 time
   do{
     statement
     update iterator
   }while(condition is true);
*/

for(var i=0;i<10;i++){
  console.log(i);
}
for(var i=0;i<10;i+=2){
  console.log(i);
}
for(var j=10;j>0;j--){
  console.log(j);
}

console.log(arr.length);
for(var k =0;k < arr.length;k++){
  // k = 0 ==> arr[0] Hamza
  // k = 1 ==> arr[1] mahmoud
  console.log(arr[k]);
}
console.log(arr[3]);

for(var index =0;index < arr.length;index++){
  if(arr[index] === 'mahmoud'){
    console.log(true);
    break;
  }
  console.log(arr[index]);
}

var userInput = prompt('Guess my name').toLowerCase();
while(userInput !== 'mahmoud'){
  userInput = prompt('Guess my name').toLowerCase();
}
var myNumber = -1;
do {
  console.log(myNumber);
}while(myNumber > 0);
