var myBall;

function setup() {
    createCanvas(400, 400);
    
    myBall = new Ball();

  
    console.log(myBall);

}

function draw() {
  background(220);
  
  myBall.move();
  myBall.display();
  myBall.bounce();
  
}


