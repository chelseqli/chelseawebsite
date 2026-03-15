// Chelsea Li, li.chel@northeastern.edu, Prototyping with Code, Lab #3, Assignment 3, "Hello World! From Chelsea"

function setup() {
  createCanvas(500,500);
}

function draw() {
  background('#A9DDAB');
  textSize(70)
  text('🌱',210,90);
  
  /*
  line(20,20,180,120);//line x1,y1,x2,y2)
  point(300,120);
  // strokeWeight(6);
  
  rect(20,20,80,60); //rect (x,y,w,h), xy not in the center
  square(120,20,60); //square (x,y,size)
  ellipse (200,120,80,40); //ellipse (x,y,w,h)
  circle (200,180,40);
  triangle (40,180,80,140,120,180); // triangle (x1,y1)
  quad (160,140,220,120,260,180,180,200); //quad(x1,y1,x2,y2,x3,y3,x4,y4)
  arc(300,300,60,60,0, PI/3); //arc(x,y,w,h,start,stop);
  
  curve(20,160,60,340,140,360,180,180)
  bezier (50,150,50,120,140,180,170,150); //bezoer (x1,y1,cx1,cy1, cx,cy2,x2,y2)
  
  */
  
  //drawing the background
  
    fill('#4CAF50');

  beginShape()
  noStroke()
  vertex(0,200);
  vertex(500,80);
  vertex(0,430);
  vertex(500,250);
  endShape(CLOSE);
  
  describe('lighting shape');
  
  
  //drawing back of my hair
   
    fill('#000080')
  rect (115,300,270,700);
  
  fill('black')
  rect (115,200,270,200);
  
  fill('black');
  noStroke();
  ellipse (250,200,270,250)
  
  fill('#040439');
  rect (115,320,270,90);
  
  //drawing my face
  
  fill('#FFD3AC ');
  ellipse(250,250,200,250)
  noStroke();
  
    noStroke()
  fill('black');
  circle(290,246,25);
  
    noStroke()
  fill('black');
  circle(209,246,25);
  
  fill('white');
  circle(294,246,7);
  
  fill('white');
  circle(215,246,7);
  
  
  //drawing my bangs

  fill('#000080');
  bezier (340,158,250,50,140,140,120,300);
    
  stroke(9)
  noFill()
  bezier(220,300,230,330,270,330,280,300);
  
  fill('#FFD3AC ')
  noStroke();
  rect(225,360,50,200)
  
  // drawing my clothes
  fill('rgb(12,19,90)');
  quad(225,409,108,444,95,500,225,500)
  
  fill('rgb(12,19,90)');
quad(275,409,394,439,420,500,275,500);
  
  fill('white');
  rect(225,452,50,60);
  
  
  
  function mousePressed(){
    saveCanvas("my-self-portrait", "png");
  }
  
  fill('white');
  textSize(15);
  fill(255);
  stroke(0);
  strokeWeight(3);
text('Hello World! From Chelsea',300,490);
  
}
