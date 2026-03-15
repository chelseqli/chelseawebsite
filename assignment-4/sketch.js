// Name: Chelsea Li
// Class: ARTG2262
//Email: li.chel@northeastern.edu
//Assignment number: 4
//Artwork: Vaperwave Squares

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
//pixels in each direction
  let countX = 100;
  let countY = 100;
  
  //pixel size according to sketch dimensions
  let pixelW = width / countX;
  let pixelH = height / countY;
  
  //nested loop so all pixels are side by side
  
  for (let i = 0; i < countX; i++){
    for (let j = 0; j < countY; j++) {
      //pixel location
      let x = i * pixelW;
      let y = j * pixelH;
      
      //pixel color
      let r = map(i,0,countX, 0, 255);
      let g = map(j,0,countY,0,200);
      let b = 230;
  
      //draw pixel
      fill(r,g,b); // fill according to position
      rect (x, y, pixelW, pixelH); //draw pixel within the computed values
    
    }
  }   
  
  // dots pattern
  noStroke();
  fill(255, 255, 255, 100);
  
  let spacing = 25;
  let dotSize = 5;
  
  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      
  //  opacity based on position
      fill(255, 255, 255, 50);
      circle(x, y, 5);
    }
  }
  
  //transparent squares
  
let squareSpacing = 75;
for (let x = 25; x < width; x += squareSpacing) {
  for (let y = 25; y < height; y += squareSpacing) {
    
    if (x < 83) {
      fill(255, 105, 180,100); // pink squares on left side
      rect(x, y, 50, 50);
    }
    if (x <= 166) {
      fill(255, 105, 180,80); 
      rect(x, y, 50, 50);
    }
     if (x <= 249) {
      fill(255, 105, 180,50); 
      rect(x, y, 50, 50);
    }
    if (x >= 250) {
      fill(0, 0, 255,50); // blue squares on right side
      rect(x, y, 50, 50);
    }
    if (x >= 350) {
      fill(0, 0, 255,40); 
      rect(x, y, 50, 50);
    }
    if (x >= 333) {
      fill(0, 0, 255,60); 
      rect(x, y, 50, 50);
}
}
}
}

/**
* A function to define what to do whenever a key
* is pressed over the canvas.
*/
function keyPressed() {
// Was it the upper/lower 'S' key?
if (key == 'S' || key == 's') {
saveCanvas("assignment[3]_pattern_roe_jane");
}
}