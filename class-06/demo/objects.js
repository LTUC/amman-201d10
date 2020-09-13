'use strict';
// Objects
/*
its a data type
it's an entity that have properties(data) and methods(functions)
var obj = {key:value};
*/
// ['mahmoud,'amman',2,'dad']
// ['hamza',amman,3,'asd']
console.log(this);
var person1 = {
  name: 'test1',
  'full name': 'test1 test',
  sayHi: function () {
    // this refer to window object if its outside an object and refer to the object itself if inside a method in the object
    console.log('hi ', this.name);

  },
  arr: [1, 2, 3],
  obj: { a: 'b', b: 'c' },
  bool: true,
};
var person2 = {
  name: 'test2',
  'full name': 'test2 test',
  sayHi: function () {
    console.log('hi ',this.name);
  },
};
var people = [person1, person2];
console.log(people[0].name);
// dot notation
// only alphanumeric keys
// key cant start with number
console.log(person1.name);
// bracket notation
// var that hold string that is the key
var personName = 'name';
console.log(person1[personName]);
// js will get the value of the var personName which is 'name' then it will get the value for person['name']
// when we have a space in the key name
console.log(person1['full name']);
// adding properties or methods
person1.age = 1;
person1['something'] = true;
console.log(person1);
// removing from object
delete person1.age;
delete person1['something'];
console.log(person1);
console.log(person1.sayHi());
console.log(person2.sayHi());
var arr = [1,2,3,4,5];
// name : 'mahmoud'
person1.nameArr = [];
person1.nameArr.push(' zainb');
console.log(person1.nameArr)