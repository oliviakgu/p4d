// Yue Gu
// IGME 609
// HOMEWORK 2- Interactive Scene


// p5.js setup
function setup() {

createCanvas(400, 400);

}

// p5.js animation loop main function
var x1=10;
var y1=200;
var x2=80;
var y2=50;
var x3=220;
var y3=160;
var x4=370;
var y4=30;
var size=10;
function draw() {
  // snowman
 
  
  //control the program speed
   delay(500*frameCount);
  changeBackground();
 
  //animatedBall();
  randomEllipse();
snowflake(x1,y1+frameCount,size);
snowflake(x2,y2+frameCount,size);
snowflake(x3,y3+frameCount,size);
snowflake(x4,y4+frameCount,size);
if(frameCount>height){frameCount=0;}  
  //

  snowman();
}


function delay(s)
{ 
  //before draw randomly display snowflakes
  for(var i=0;i<s;i++)
  { 
  } 
}
function snowflake(x,y,s)
{
 circle(x,y,s);
 strokeWeight(0);
 line(x+1.2*s,y+1.2*s,x-1.2*s,y -1.2*s);
 line(x-1.2*s,y+1.2*s,x+1.2*s,y -1.2*s);
 line(x-1.2*s,y,x+1.2*s,y);
 line(x,y-1.2*s,x,y+1.2*s);
}

function airCraft(x,y)
{
 triangle(x,y,x+15,y,x+15,y-50);
 triangle(x,y,x+35,y,x+35,y-35);
 triangle(x,y,x+50,y,x+50,y-15);

}


// Changing background

function changeBackground() {
  // Change the background color depending
  // on mouse position.

  // IF mouse is in left side of window, blue background
  if (mouseX < width / 2) {
    background(	255, 197, 143);
  }

  // IF mouse is in right side of window, red background
  if (mouseX > width / 2) {
    background(19,24,98);
  }

    //draw an aircraft
    airCraft(mouseX,mouseY);
  
}

  //animate ball
function animatedBall() {

  // Clear the background each frame

  background(0, 0, 255);

  // Draw the ball
  ellipse(ballXPosition, 50, 20, 20);

  // Move the ball by 1 pixel to the right every frame
  ballXPosition = ballXPosition + 5;


  // Log the position to the console window for debugging
  console.log(ballXPosition);

  // Wrap the ball to the left when it reaches the right side of the window
  if (ballXPosition > width) {
    ballXPosition = 0;
  }
}


// Randomly colored and placed ellipses 

function randomEllipse() {

  if (keyIsPressed && key == 'e') {
    // Generate a new value for the variables randomX and randomY  
    randomX = random(0, width);
    randomY = random(0, height);
  }
  // Generate a new random red channel value
  redValue = random(0, 255);
  fill(redValue, 255, 255);


}

//a snowman
function snowman() 
{
  //body
  fill(255)
  circle(200,200,50);
  ellipse(200,340,160,200);
  //nose
  fill(237, 145, 33);
  triangle(120,220,200,210,200,220);
}
