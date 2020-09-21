var names = [
  'cruisin-goat',
  'emotional-goat',
  'float-your-goat',
  'goat-out-of-hand',
  'kissing-goat',
  'sassy-goat',
  'smiling-goat',
  'sweater-goat',
];
const leftImageEl = document.getElementById('left-image');
const rightImageEl = document.getElementById('right-image');
const imagesSection = document.getElementById('images-section');
let remainingVotes = 5;
// const allGoats = []
function Goat(name) {
  this.name = name;
  this.path = `assets/${name}.jpg`;
  this.votes = 0;
  // allGoats.push(this);
  Goat.all.push(this);
}
Goat.all = [];
for (let i = 0; i < names.length; i++) {
  new Goat(names[i]);
}
function render() {
  const leftIndex = randomNumber(0, Goat.all.length - 1);
  const rightIndex = randomNumber(0, Goat.all.length - 1);
  console.log(
    'Index:',
    leftIndex,
    'Goat.all',
    Goat.all[leftIndex],
    'path:',
    Goat.all[leftIndex].path
  );
  leftImageEl.src = Goat.all[leftIndex].path;
  rightImageEl.src = Goat.all[rightIndex].path;
  leftImageEl.alt = Goat.all[leftIndex].name;
  rightImageEl.alt = Goat.all[rightIndex].name;
  leftImageEl.title = Goat.all[leftIndex].name;
  rightImageEl.title = Goat.all[rightIndex].name;
}
imagesSection.addEventListener('click', clickHandler);
function clickHandler(event) {
  remainingVotes--;
  if (remainingVotes === 0) {
    createChart();
  } else {
    if (event.target.id !== 'images-section') {
      console.log('hi', event.target);
      for (let i = 0; i < Goat.all.length; i++) {
        if (Goat.all[i].name === event.target.title) {
          Goat.all[i].votes++;
        }
      }
      render();
      console.log(Goat.all);
    }
  }
}
function createChart() {
  var ctx = document.getElementById('myChart');
  const goatNames = [];
  const votes = [];
  for (let i = 0; i < Goat.all.length; i++) {
    goatNames.push (Goat.all[i].name)
    votes.push(Goat.all[i].votes)
    
  }
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [
        {
          label: '# of Votes',
          data: votes,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
render();
//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
