'use strict';

// target our order form from the html
var orderForm = document.getElementById('order-form');
var orders = document.getElementById('orders');

// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType) {
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);
}

// set the global array to empty
Coffee.drinks = [];

function updateDrinks() {
  // store to local storage
  //1 stringify
  var drinksString = JSON.stringify(Coffee.drinks);
  //2 setItem
  localStorage.setItem('orders', drinksString);
}
function getDrinks() {
  // 1 getItem
  var drinksString = localStorage.getItem('orders');
  console.log('drinks', drinksString);
  // 2 parse
  var drinksArray = JSON.parse(drinksString);
  console.log('arr', drinksArray);
  if (drinksArray) {
    //this will remove any prototype methods from the constructor object!!!!!
    // Coffee.drinks = drinksArray;
    for (var i = 0; i < drinksArray.length; i++) {
      new Coffee(
        drinksArray[i].name,
        drinksArray[i].size,
        drinksArray[i].milk,
        drinksArray[i].isHot,
        drinksArray[i].drinkType
      );
    }
    renderOrders();
  }
}
// event handler function to run everytime the form is submitted
function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  var drink = event.target;
  var name = drink.name.value;
  var size = drink.size.value;
  var isHot = drink.isHot.checked;
  var dType = drink.drinkType.value;
  var milk = drink.milk.value;

  new Coffee(name, size, milk, isHot, dType);
  // update the previous orders with the new order
  updateDrinks();
  renderOrders();
}

function renderOrders() {
  // clear all my current uls to prevent duplicate information
  orders.textContent = '';
  console.log('the drinks to show',Coffee.drinks);
  // go through the array and output the details of each drink in the array
  for (var i = 0; i < Coffee.drinks.length; i++) {
    var drinkLI = document.createElement('li');
    var infoP = document.createElement('p');
    var temp;
    if (Coffee.drinks[i].isHot) {
      temp = 'hot';
    } else {
      temp = 'cold';
    }
    infoP.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}
getDrinks();
// Add an event listener to the submit button
orderForm.addEventListener('submit', handleSubmit);
