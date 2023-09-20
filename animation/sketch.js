
let ballX = 0
let ballY = 0
let speedX = 1;
let speedY = 1;
let ballSizeX = 50;
let ballSizeY = 50;
let scaleFactor = 1;


function setup(){
  createCanvas(500,500);
  background(0);

  




}


function draw(){

  background(0)

  fill("yellow");
  rect(225,220,50,50);
  fill("red")
  
  ellipse(250,250,30,30)
  fill("brown")
  rect(180,430,160,50)
  
 
  

  fill(250,120,10)
  ellipse(245,50,45,70)
  fill(200,150,10)
  arc(245,40,150,80,PI,TWO_PI)
  

  fill("white")
  
  translate(width/2, height/2);
  scale(scaleFactor)
  ellipse(ballX,ballY,20,20);
  ballY += speedY;
  scaleFactor += 0.01;

 

  if(ballY >= 100){
    speedY = speedY * -1.1;
  }

  if(ballY <= 0){
    speedY = speedY * -1.1;
    scaleFactor = scaleFactor * -1;
  }

  speedY = constrain(speedY,-8,8)
  

}