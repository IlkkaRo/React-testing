"use strict";

// assign button elements in the array
let buttons = [
  document.getElementById('button0'),
  document.getElementById('button1'),
  document.getElementById('button2'),
  document.getElementById('button3')
];

let current = 0; // current active button
let a = []; //create array
let score = 0;
const colors = ["green", "blue", "yellow", "darkorange"];

init();

function init(){
document.getElementById('button0').style.backgroundColor = colors[0];
document.getElementById('button1').style.backgroundColor = colors[1];
document.getElementById('button2').style.backgroundColor = colors[2];
document.getElementById('button3').style.backgroundColor = colors[3];
buttons[0].onclick = function() { pressed(0) };
buttons[1].onclick = function() { pressed(1) };
buttons[2].onclick = function() { pressed(2) };
buttons[3].onclick = function() { pressed(3) };
}

// pick the first active button in 1500ms, after that every 1000ms multiplied in timer to increase speed
let timer = setTimeout(pickNext, 1500, 1000) ;
// function to keep the engine going: pick a new button and set timer for the next pick

function pickNext(delay) {
  // pick next button
  let next = pickNew(current);

  buttons[current].style.backgroundColor = colors[current]; // previous
  console.log(buttons[current]);
  buttons[next].style.backgroundColor = "red"; // next
  console.log(buttons[next]);

  // change the active button
  current = next;

  // set timer to pick the next button
  console.log("Active:", current);
  timer = setTimeout(pickNext, delay, delay*0.99);

  a.push(current); //add to array a

  if (a.length >= 10) {
    gameOver();
  }

  function pickNew(previous) { //so random cannot come consequtively
    let next = getRandomInt(0, 3);
    if (next != previous) {
      return next;
    } else {
      return pickNew(previous);
    }
  }
}

// This function is called whenever a button is pressed
function pressed(i) {
  console.log("Pressed:", i);
  if (i === a[0]) {
    a.shift(a[0]);
    score++;
    document.getElementById('score').innerHTML = score;
  } else {
    gameOver();
  }
}

function gameOver() {
    clearTimeout(timer); // stop timer
    for (let i = 0; i < 4; i++) {
      buttons[i].style.backgroundColor = "red"; // set all buttons red
      buttons[i].onclick = null; // disable click event handlers
      document.getElementById('overlay').style.visibility = 'visible';
      if (score < 40) {
        document.getElementById('gameover').style.backgroundImage = "url('https://media1.tenor.com/images/038259989da7a0a0e520458de6d97fd3/tenor.gif?itemid=9848321')";
        document.getElementById('gameover').style.backgroundSize = 'cover'
    } else {
        document.getElementById('gameover').style.backgroundImage = "url('https://www.udiscovermusic.com/wp-content/uploads/2016/11/Freddie-Mercury.jpg')";
        document.getElementById('gameover').style.backgroundSize = 'cover'
    }

    // Set the overlay-element visible and update the gameover-element
  }}

  // generate random integer within range min - max
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
