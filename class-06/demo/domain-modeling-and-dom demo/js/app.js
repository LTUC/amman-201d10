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

var frankie = {
  name: 'Frankie',
  age: 0,
  likes: ['cuddling', 'napping', 'food'],
  imagePath: 'images/frankie.jpeg',
  goodWithKids: true,
  goodWithDogs: false,
  goodWithOtherCats: true,
  breed: 'Persian',
  getAge: function (min, max) {
    this.age = getRandomNumber(min, max);
  },
  render: function () {
    // DOM
    /*generate this from js:
    <article>
      <h2>frankie</h2>
      <p>Frankie is adorable, and is 4 months old.</p>
      <ul>
        <li>cuddling</li>
        <li>chasing string</li>
      </ul>
      <img src="images/frankie.jpeg" />
    </article> */
    // get element by the id
    var container = document.getElementById('kittenProfiles');
    // console.log(container)
   
    var articleEl = document.createElement('article');
    // document.getElementById('kittenProfiles').appendChild(articleEl)
    container.appendChild(articleEl);
     // 1) create an HTML element
    var h2El = document.createElement('h2')
    // 2) append the new element to the parent
    articleEl.appendChild(h2El);
    //3) set the text content
    h2El.textContent = this.name;
    var pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl)
    for(var i=0;i<this.likes.length;i++){
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.likes[i];
    }
    var imgEl = document.createElement('img');
    articleEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.imagePath)
  },
};

frankie.getAge(3, 6);
frankie.render();
// console.table(frankie)
// helper functions

function getRandomNumber(min, max) {
  // Random number between min and max both included!!!
  // min = 3,max = 5 ===> 3,4,5
  return Math.floor(Math.random() * (max - min + 1) + min);
}

