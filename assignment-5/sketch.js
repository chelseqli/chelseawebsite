// Class:ARTG 2262
// Name: Chelsea Li
// Email: li.chel@northeastern.edu
// Assignment 5:Screensaver
// Piece Name: Night Sky

// stars
let numStars = 20;
let starX = [];
let starY = [];
let starSize = [];
let starPhase = []; // pulse

// circles
let numCircles = 15;
let circleX = [];
let circleY = [];
let circleSize = [];
let circlePhase = []; // pulse

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  makeStars();
}

function makeStars() {
  for (let i = 0; i < numStars; i++) {
    starX[i] = random(0, width);
    starY[i] = random(0, height);
    starSize[i] = random(5, 15);
    starPhase[i] = random(0, 8);
  }
  for (let i = 0; i < numCircles; i++) {
    circleX[i] = random(0, width);
    circleY[i] = random(0, height);
    circleSize[i] = random(5, 15);
    circlePhase[i] = random(0, 6);
  }
}

function draw() {
  background(10, 10, 40);
  noStroke();

// loop the stars
  fill(255, 255, 200);
  for (let i = 0; i < numStars; i++) {
    starPhase[i] += 0.05;
    let r = starSize[i] + sin(starPhase[i]) * 4;
    drawStar(starX[i], starY[i], r);
  }

// loop the circles
  fill(150, 200, 255, 150);
  for (let i = 0; i < numCircles; i++) {
    circlePhase[i] += 0.04;
    let r = circleSize[i] + sin(circlePhase[i]) * 6;
    ellipse(circleX[i], circleY[i], r);
  }

// clock
  let hh = nf(hour(), 2);
  let mm = nf(minute(), 2);
  let ss = nf(second(), 2);
  fill(255);
  textSize(width * 0.07);
  textAlign(CENTER, CENTER);
  text(hh + ":" + mm + ":" + ss, width / 2, height / 2);
  textSize(width * 0.025);
  text(month() + "/" + day() + "/" + year(), width / 2, height / 2 + width * 0.09);
}

// star shape
function drawStar(x, y, r) {
  let outerR = r;
  let innerR = r * 0.4;
  let points = 5;
  beginShape();
  for (let i = 0; i < points * 2; i++) {
    let angle = (PI / points) * i - HALF_PI;
    let rad = (i % 2 == 0) ? outerR : innerR;
    vertex(x + cos(angle) * rad, y + sin(angle) * rad);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  makeStars();
}