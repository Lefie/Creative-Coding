/*
 game states
 0 = default
 1 = mini game1
 2 = mini game2
 3 = mini game3
 4 = mini game4

*/

let gameState = 0;

let cat;
let cat2;
let cat3;
let catIdle;
let catAttack;
let catRun;

let mg1;
let mg2;
let mg3;
let mg4;

let mg1Points = 0;
let mg2Points = 0;
let mg3Points = 0;
let mg4Points = 0;

//overall score
let score = 0;

//game 1 variables
let groundX = 0;
let groundY = 600;
let ground2X = 1024;
let ground2Y = 600;
let ground1;
let ground2;
let obs1;
let obs2;
let award;

//game 2 variables
let hole1;
let hole2;
let hole3;
let hole4;
let hole5;
let hole6;
let mouseImg;
let mouse;
let mousePosX = [170, 670];
let mousePosY = [540, 240, 840];
let timer = 2
let clicks = 0

//game 3 variables
let enemyImg
let enemyArr = []
let timer2 = 120



function preload() {
  catIdle = loadImage("img/cat03_idle_blink_8fps.gif");
  catRun = loadImage("img/cat03_run_12fps.gif");
  catAttack = loadImage("img/cat03_attack_12fps.gif")
  mouseImg = loadImage("img/mouse.png");
  enemyImg = loadImage("img/slime_black_idle_down.gif")
}

function setup() {
  createCanvas(1024, windowHeight);
  cat = new Cat(width / 2, height / 2);
  cat2 = new Cat(30, 570);
  cat3 = new Cat(30, 570)
  noStroke();
  mg1 = new Square(100, 200, "Game 1");
  mg2 = new Square(700, 200, "Game 2");
  mg3 = new Square(100, 500, "Game 3");
  mg4 = new Square(700, 500, "Game 4");
  //game 1
  ground1 = new Ground(0, 600);
  ground2 = new Ground(1024, 600);
  obs1 = new Obstacle(random(1024, 1030), 550, random(10, 50), 100);
  obs2 = new Obstacle(random(1040, 1050), 550, random(10, 50), 100);
  award = new Award(random(100, 1000), 500);

  //game2
  hole1 = new Hole(250, 300);
  hole2 = new Hole(750, 300);

  hole3 = new Hole(250, 600);
  hole4 = new Hole(750, 600);

  hole5 = new Hole(250, 900);
  hole6 = new Hole(750, 900);
  //mouse = new Mouse(random(mousePosX) + 90, random(mousePosY) + 50);
  mouse = new Mouse(random(mousePosX) + 90, random(mousePosY) + 50)

  //game3
  
  for(let i = 0; i < 10; i++){
    enemyArr.push(new Enemy(random(100,1000),random(100,1200)))
  }
  

}

function draw() {
  background("pink");
  //text("cat pos x : " + cat.x + " cat pos y: " + cat.y, 15,15)
  if (gameState === 0) {
    // the default map
    console.log("got here");

    mg1.display();
    mg2.display();
    mg3.display();
    mg4.display();
    cat.display();
    cat.move();

    console.log("got here 1");

    let minigame1 = cat.detectMinigame(mg1);
    let minigame2 = cat.detectMinigame(mg2);
    let minigame3 = cat.detectMinigame(mg3);
    let minigame4 = cat.detectMinigame(mg4);

    console.log("got here 2");

    //if game state is 1 : we enter into mini game1

    //if game state is 1 : we enter into mini game2

    //if game state is 1 : we enter into mini game3

    //if game state is 1 : we enter into mini game4

    if (minigame1) {
      gameState = 1;
      // one()
    }
    if (minigame2) {
      gameState = 2;
      //two()
    }
    if (minigame3) {
      gameState = 3;
      //three()
    }
    if (minigame4) {
      gameState = 4;
      //four()
    }
  }

  if (gameState === 1) {
    one();
  }

  if (gameState === 2) {
    two();
  }

  if (gameState === 3) {
    three();
  }

  if (gameState === 4) {
    four();
  }
}

//function 1: mini game 1

// function 2: mini game 2

//function 3 : mini game 3

//function 4 : mini game 4

/*
 cat oop
*/

class Cat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.status = "idle";
    this.graphic = catIdle;
    this.speed = 5;
    this.jumpMode = false;
    this.jumpPower = 0;
  }

  display() {
    imageMode(CENTER);
    image(this.graphic, this.x, this.y, 100, 100);
  }

  move() {
    this.graphic = catIdle;
    if (keyIsDown(RIGHT_ARROW)) {
      this.graphic = catRun;
      this.x += this.speed;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.graphic = catRun;
      this.x -= this.speed;
    } else if (keyIsDown(UP_ARROW)) {
      this.graphic = catRun;
      this.y -= this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.graphic = catRun;
      this.y += this.speed;
    }
  }


  move2() {
    this.graphic = catIdle;
    if (keyIsDown(RIGHT_ARROW)) {
      this.graphic = catRun;
      this.x += this.speed;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.graphic = catRun;
      this.x -= this.speed;
    }
  }

  move3(){
    this.graphic = catIdle;
    if (keyIsDown(RIGHT_ARROW)) {
      this.graphic = catRun;
      this.x += this.speed;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.graphic = catRun;
      this.x -= this.speed;
    } else if (keyIsDown(UP_ARROW)) {
      this.graphic = catRun;
      this.y -= this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.graphic = catRun;
      this.y += this.speed;
    }else if(key === "k" && keyIsPressed)(
        this.graphic = catAttack
    
    )
   
  }

  detectEnemy(){
    for(let i = 0; i < enemyArr.length; i++){
        let dis = dist(enemyArr[i].x, enemyArr[i].y, this.x, this.y)
        if(dis < 25 && keyIsPressed && key === "k"){
            enemyArr.splice(i,1)
        }else if(dis < 25 ){
            enemyArr.push(new Enemy(random(100,1000), random(100,1000)))


        }
    }
    

  }

  detectMinigame(mg) {
    if (
      this.x >= mg.x + 50 &&
      this.x <= mg.x + (mg.s - 50) &&
      this.y >= mg.y + 50 &&
      this.y <= mg.y + (mg.s - 50)
    ) {
      // mg.color = color(128,128,128)

      mg.color = color(128, 128, 128);
      return true;
    } else {
      mg.color = color(255, 255, 255);

      return false;
    }
  }
}

class Square {
  constructor(x, y, txt) {
    this.x = x;
    this.y = y;
    this.s = 200;
    this.txt = txt;
    this.color = color(255, 255, 255);
    this.points = 0;
  }

  display() {
    rectMode(CORNER);
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.s, this.s);
    fill("pink");
    textSize(20);
    text(this.txt, this.x + 60, this.y + 100);
    text(this.points + " / 10", this.x + 60, this.y + 130);
    noFill();
    stroke(128);
    //text("x: " + this.x + " y: " + this.y, this.x + 60,this.y + 150)
    noFill();
  }
}

class Ground {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    rectMode(CORNER);
    fill(128);
    rect(this.x, this.y, 1024, 1024);
  }
}

class Obstacle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = random(1, 3);
    this.color1 = color(random(255), random(255), random(255));
  }

  display() {
    rectMode(CENTER);
    fill(this.color1);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x -= this.speed;
  }

  detection(cat) {
    let dis = dist(cat.x, cat.y, this.x, this.y);
    text(dis, 100, 100);
    if (dis < 40) {
      mg1Points -= 5;
      this.x = 0;
    }
  }
}

class Award {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill(color(0, 200, 0));
    ellipse(this.x, this.y, 20, 20);
  }

  detectCollisionWithPlayer(cat) {
    let dis = dist(cat.x, cat.y, this.x, this.y);
    //text(dis,10,10)
    if (dis < 25) {
      this.x = random(100, 1000);
      mg1Points += 1;
    }
  }
}

/*
game 2 classes
*/

class Hole {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    ellipseMode(CENTER);
    fill("black");
    ellipse(this.x, this.y, 200, 200);
    fill("yellow");
    ellipse(this.x, this.y, 180, 180);
  }
}

class Mouse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.graphic = mouseImg;
   
  }

  display() {
    imageMode(CENTER)
    image(this.graphic, this.x, this.y, 150, 150);
  }

  detectMouse() {
    stroke(128)
  
    //line(mouseX, mouseY, this.x, this.y);
    //ellipse(mouseX,mouseY,10,10)
    fill("black")
    let dis = dist(mouseX, mouseY, this.x, this.y);
    textSize(50)
    text("clicks: " + clicks, 50, 60);
    
    if(dis < 30 && mouseIsPressed){
        
        this.x = random(mousePosX) + 90
        this.y = random(mousePosY) + 50
        clicks += 1
        
    }
  }

  
}

/*
game 3
*/

class Enemy{
    constructor(x,y){
        this.x = x
        this.y = y
        this.graphic = enemyImg
        this.randomPointX = random(100,1000);
        this.randomPointY = random(100,800);
        
    }

    display(){
        imageMode(CENTER)
        image(this.graphic, this.x, this.y,50,50)
        
    }

    move(){
       
        if(this.x < this.randomPointX){
            this.x += 0.5
        }
        if(this.x > this.randomPointX){
            this.x -= 0.5
        }

        if(this.y < this.randomPointY){
            this.y += 0.5
        }
         if(this.y > this.randomPointY){
            this.y -= 0.5
        }

        //(dist(this.x,this.y,this.randomPointX,this.randomPointY),10,10)

        if(dist(this.x,this.y,this.randomPointX,this.randomPointY) < 10){
            
            this.randomPointX = random(100,1000);
            this.randomPointY = random(100,800);
        }

    }


}

function one() {
  if (mg1Points <= -10 || mg1Points >= 10) {
    mg1.points = mg1Points;
    rectMode(CENTER)
    fill("orange");
    rect(350, 550, 150, 150);
    fill("white");
    textSize(25);
    text("Exit", 335, 570);

    if (dist(350, 550, mouseX, mouseY) < 20 && mouseIsPressed) {
      cat.x = width / 2;
      cat.y = height / 2;
      gameState = 0;
    }

    
    fill("green");
    rect(850, 550, 150, 150);
    fill("white");
    textSize(25);
    text("Try Again", 800, 570);
    if (dist(850, 550, mouseX, mouseY) < 20 && mouseIsPressed) {
      resetMg1();
    }

    //gameState = 0
  } else {
    background("pink");
    noStroke();
    rectMode(CENTER);
    fill("black");
    textSize(20);
    text("Score: " + mg1Points, 20, 20);
    //floor
    fill(128);
    //text("ground1 x " + ground1.x,100,20)
    //text("ground2 x " + ground2.x,100,40)

    ground1.display();
    ground2.display();

    ground1.x -= 2;
    ground2.x -= 2;

    if (ground1.x <= -1024) {
      ground1.x = 1024;
    }

    if (ground2.x <= -1024) {
      ground2.x = ground1.x + 1024;
    }

    //let obs = new Obstacle(random(100,400),500,10,10)
    obs1.display();
    obs1.move();
    obs1.detection(cat2);

    obs2.display();
    obs2.move();
    obs2.detection(cat2);

    if (obs1.x < 0) {
      obs1.x = random(cat2.x + 100, 1000);
      obs1.w = random(10, 100);
    }

    if (obs2.x < 0) {
      obs2.x = random(cat2.x + 200, 1000);
      obs2.w = random(10, 100);
    }

    cat2.display();
    cat2.move2();

    award.display();
    award.detectCollisionWithPlayer(cat2);

    if (keyIsDown(UP_ARROW) && cat2.jumpMode === false) {
      cat2.jumpPower = -9;
      cat2.jumpMode = true;
    }

    if (cat2.jumpMode === true) {
      cat2.y += cat2.jumpPower;
      cat2.jumpPower += 0.2;

      if (cat2.y >= groundY) {
        cat2.jumpMode = false;
        cat2.jumpPower = 0;
        cat2.y = groundY - 15;
      }
    }
  }
}

function two() {
  background("pink");

  if(timer > 0){
    hole1.display();
    hole2.display();
  
    hole3.display();
    hole4.display();
  
    hole5.display();
    hole6.display();


    mouse.display()
    mouse.detectMouse()


    fill("black")
    textSize(50)
    text(timer,500,100)
    if(frameCount % 60 === 0 && timer > 0){
      timer -= 1
    }

  }else{
    
    if(clicks > 15){
        mg2Points = 10
     
    }else if(clicks >= 10){
        mg2Points = 5
    }else{
        mg2Points = 3
    }

    mg2.points = mg2Points

    noStroke()
    rectMode(CENTER)
    fill("black")
    text("You have won " + mg2Points + " points for this game!",450,350)
    fill("orange");
    rect(350, 550, 150, 150);
    fill("white");
    textSize(25);
    text("Exit", 335, 570);

    if (dist(350, 550, mouseX, mouseY) < 20 && mouseIsPressed) {
      cat.x = width / 2;
      cat.y = height / 2;
      gameState = 0;
    }

    fill("green");
    rect(850, 550, 150, 150);
    fill("white");
    textSize(25);
    text("Try Again", 800, 570);

    if (dist(850, 550, mouseX, mouseY) < 20 && mouseIsPressed) {
        resetMg2();
    }

  }
 
}

function three() {
  background("pink");

  if(timer2 === 0 && enemyArr.length != 0){
    //lose
    mg3Points = 0
    mg3.points = mg3Points

    noStroke()
    rectMode(CENTER)
    fill("black")
    text("You have won " + mg3Points + " points for this game!",450,350)
    fill("orange");
    rect(350, 550, 150, 150);
    fill("white");
    textSize(25);
    text("Exit", 335, 570);

    if (dist(350, 550, mouseX, mouseY) < 20 && mouseIsPressed) {
      cat.x = width / 2;
      cat.y = height / 2;
      gameState = 0;
    }

    fill("green");
    rect(850, 550, 150, 150);
    fill("white");
    textSize(25);
    text("Try Again", 800, 570);

    if (dist(850, 550, mouseX, mouseY) < 20 && mouseIsPressed) {
        fill("green")
        rect(20,20,50,50)
        resetMg3();
    }

  }

  else if(enemyArr.length === 0 && timer2 > 0){
    //win
    mg3Points = 10
    mg3.points = mg3Points

    noStroke()
    rectMode(CENTER)
    fill("black")
    text("You have won " + mg3Points + " points for this game!",450,350)
    fill("orange");
    rect(350, 550, 150, 150);
    fill("white");
    textSize(25);
    text("Exit", 335, 570);

    if (dist(350, 550, mouseX, mouseY) < 20 && mouseIsPressed) {
      cat.x = width / 2;
      cat.y = height / 2;
      gameState = 0;
    }

    fill("green");
    rect(850, 550, 150, 150);
    fill("white");
    textSize(25);
    text("Try Again", 800, 570);

    if (dist(850, 550, mouseX, mouseY) < 20 && mouseIsPressed) {
        fill("green")
        rect(20,20,50,50)
        resetMg3();
    }
  }
  
  else if(timer2 > 0 && enemyArr.length > 0){
    cat3.display()
    cat3.move3()
    for(let i = 0; i < enemyArr.length;i++){
        enemyArr[i].display()
        enemyArr[i].move()
    }
    cat3.detectEnemy()
    textSize(45)
    text(timer2,350,150)
    if(frameCount % 60 === 0 && timer2 > 0){
        timer2 -= 1
    }

  }

}

function four() {
  background("pink");
}

function resetMg1() {
  mg1Points = 0;
  cat2.x = 30;
  cat2.y = 570;

  obs1.x = random(cat2.x + 100, 1000);
  obs1.w = random(10, 100);

  obs2.x = random(cat2.x + 200, 1000);
  obs2.w = random(10, 100);
}

function resetMg2(){
    mg2Points = 0
    clicks = 0;
    timer = 5
}

function resetMg3(){
    mg3Points = 0
    timer2 = 120
    while(enemyArr.length < 10){
        enemyArr.push(new Enemy(random(10,100), random(10,100)))
    }
}
