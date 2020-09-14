// constructor function
/*
factory function that will always return object
always start with Caps
*/
function Person(name) {
  //var obj = {};
  this.name = name;
  //return obj;
}
Person.prototype.sayHi = function () {
  console.log('hi', this.name);
};

var person1 = new Person('Mahmoud');
console.log(person1);
var person2 = new Person('Ahmad');
console.log(person2);
console.log({});
var arr =[]
console.log(arr)
person1.sayHi();
