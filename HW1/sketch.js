//Yue Gu
//IGME 609.01 project 1
//self portrait
//Jan 28,2019

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  
  fill(255,220,200);
  
  //NECK
  rect(175,300,50,30); 
  
  //FACE
  ellipse(200,200,180,220); 

  //NOSE
  arc(200,250,15,10,-0.45*PI,0);
  arc(200,250,15,15,0,0.5*PI);
  
  //eyebrow
  strokeWeight(2)
  arc(150,180,20,10,0,1.8);//LEFT
  arc(230,180,20,10,0,1.8);//RIGHT
  
  //eye frame
  arc(160,230,30,10,0,-1*PI);//down LEFT
  arc(240,230,30,10,0,-1*PI);//down RIGHT
  arc(160,210,30,10,-1*PI,0);//upLEFT
  arc(240,210,30,10,-1*PI,0);//upRIGHT
  
  //xposition()
  fill(0);
  ellipse(160,220,20,30);//LEFT EYE
  ellipse(240,220,20,30);//RIGHT EYE
  fill(250);
  ellipse(155,220,10,20);//puple
  ellipse(235,220,10,20);
  fill(10);
  ellipse(160,220,5,10);//eyeball
  ellipse(240,220,5,10);
  
  //cheak
  fill(255);

  arc(200,280,15,10,1.8,0.5)//mouth
  
  //hair
  //bezierVertex(cpx1, cpy1, cpx2, cpy2, x, y);
  fill(139,69,19);
  stroke(10);
  beginShape();
  vertex(220,100); // first point
  bezierVertex(200,90,160,90,120,200);//left hair1
  bezierVertex(120,200,150,220,150,320);//left hair bottom
  bezierVertex(150,380,50,300,85,300);//left hair curve angle
  bezierVertex(90,220,60,30,220,80);//left hair up
  
  bezierVertex(300,50,350,300,300,350);//right hairup
  bezierVertex(300,350,220,320,250,300);//right hair bottom
  bezierVertex(320,200,200,150,220,100);//right hair curve angle
  endShape();

  //cloth or body
  fill(158, 255, 255);
  ellipse(200,400,220,150);
 
  
  
}