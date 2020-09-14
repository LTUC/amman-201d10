'use strict';
// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like (eg: cuddling, chasing string, napping, food)
// - an image
// good with kids
// good with dogs
// good with other cats
// breed (e.g: Egyptian Mau, Persian,British Shorthair)

// TODO: dynamically generate kitten objects using form data
var cats = [];
function Cat(
  name,
  age,
  likes,
  imagePath,
  goodWithKids,
  goodWithDogs,
  goodWithOtherCats,
  breed
) {
  console.log(this);
  this.name = name;
  this.age = age;
  this.likes = likes;
  this.imagePath = imagePath;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats;
  this.breed = breed;
  cats.push(this);
}
Cat.prototype.getAge = function (min, max) {
  this.age = getRandomNumber(min, max);
};

Cat.prototype.render = function () {
  var container = document.getElementById('kittenProfiles');
  var articleEl = document.createElement('article');
  container.appendChild(articleEl);
  var h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.name;
  var pEl = document.createElement('p');
  articleEl.appendChild(pEl);
  pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
  var ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (var i = 0; i < this.likes.length; i++) {
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.likes[i];
  }
  // 1. create element
  // 2. append it to container
  // 3. set text content

  //// table
  var tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
  // row
  var headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  var thEl1 = document.createElement('th');
  headerRowEl.appendChild(thEl1);
  thEl1.textContent = 'good with cats';
  var thEl2 = document.createElement('th');
  headerRowEl.appendChild(thEl2);
  thEl2.textContent = 'good with dogs';
  var thEl3 = document.createElement('th');
  headerRowEl.appendChild(thEl3);
  thEl3.textContent = 'good with kids';
  var dataRowEl = document.createElement('tr');
  tableEl.appendChild(dataRowEl);
  var tdEl1 = document.createElement('td');
  dataRowEl.appendChild(tdEl1);
  tdEl1.textContent = this.goodWithOtherCats;
  var tdEl2 = document.createElement('td');
  dataRowEl.appendChild(tdEl2);
  tdEl2.textContent = this.goodWithDogs;
  var tdEl3 = document.createElement('td');
  dataRowEl.appendChild(tdEl3);
  tdEl3.textContent = this.goodWithKids;
  /*
     <!-- <table>
          <tr>
            <th>good with cats</th>
            <th>good with dogs</th>
            <th>good with kids</th>
          </tr>
          <tr>
            <td>true</td>
            <td>true</td>
            <td>false</td>
          </tr>
        </table> -->
*/
  var imgEl = document.createElement('img');
  articleEl.appendChild(imgEl);
  imgEl.setAttribute('src', this.imagePath);
};

new Cat(
  'Frankie',
  0,
  ['cuddling', 'napping', 'food'],
  'images/frankie.jpeg',
  true,
  false,
  true,
  'Persian',
  3,
  6
);
new Cat(
  'Jumper',
  0,
  ['cuddling', 'chasing string', 'food'],
  'images/jumper.jpeg',
  true,
  true,
  true,
  'British Shorthair',
  3,
  6
);
new Cat(
  'Serena',
  0,
  ['cuddling', 'napping', 'food'],
  'images/serena.jpeg',
  true,
  false,
  true,
  'British Shorthair'
);
for (var i = 0; i < cats.length; i++) {
  cats[i].getAge(3, 6);
  cats[i].render();
}

// helper functions
function getRandomNumber(min, max) {
  // Random number between min and max both included!!!
  // min = 3,max = 5 ===> 3,4,5
  return Math.floor(Math.random() * (max - min + 1) + min);
}
