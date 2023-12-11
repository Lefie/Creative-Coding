
/*
 game states
 0 = default
 1 = mini game1
 2 = mini game2
 3 = mini game3
 4 = mini game4
 5 = loss mg1
 6 = won mg1
 7
 8
 9
 10
 11
 12
*/

let gameState = 0;


let cat
let cat2 
let catIdle;
let catRun;

let mg1
let mg2
let mg3
let mg4

let mg1Points = 0
let mg2Points = 0
let mg3Points = 0
let mg4Points = 0

//overall score
let score = 0


//game 1 variables
let groundX = 0
let groundY = 600


let ground2X = 1024
let ground2Y = 600

let ground1
let ground2

let obs1
let obs2


let award





//game 2 variables 

function preload(){
    catIdle = loadImage("img/cat03_idle_blink_8fps.gif");
    catRun = loadImage("img/cat03_run_12fps.gif")

}

function setup(){
    createCanvas(1024,windowHeight)
    cat = new Cat(width/2, height/2)
    cat2 = new Cat(30,570)
    noStroke()
    mg1 = new Square(100,100, "Game 1")
    mg2 = new Square(800,100, "Game 2")
    mg3 = new Square(100,400, "Game 3")
    mg4 = new Square(800,400, "Game 4")
    //frameRate(20)
    ground1 = new Ground(0,600)
    ground2 = new Ground(1024, 600)
    obs1 = new Obstacle(random(1024,1030),550,random(10,50),100)
    obs2 = new Obstacle(random(1040,1050),550,random(10,50),100)
    award = new Award(random(100,1000),500)

}

function draw(){
    background(248,131,121)
    //text("cat pos x : " + cat.x + " cat pos y: " + cat.y, 15,15)
    if(gameState === 0){ // the default map 
        console.log("got here")
        
        mg1.display()
        mg2.display()
        mg3.display()
        mg4.display()
        cat.display()
        cat.move()

        console.log("got here 1")
   
        let minigame1 = cat.detectMinigame(mg1)
        let minigame2 = cat.detectMinigame(mg2)
        let minigame3 = cat.detectMinigame(mg3)
        let minigame4 = cat.detectMinigame(mg4)

        console.log("got here 2")

          //if game state is 1 : we enter into mini game1

        //if game state is 1 : we enter into mini game2

        //if game state is 1 : we enter into mini game3

        //if game state is 1 : we enter into mini game4

        if(minigame1){
            gameState = 1
            // one()
        }
        if(minigame2){
            gameState = 2
            //two()
        }
        if(minigame3){
            gameState = 3
            //three()
        }
        if(minigame4){
            gameState = 4
            //four()
        }

    }

    if(gameState === 1){
        one()
    }

    if(gameState === 2 ){
        two()
    }

    if(gameState === 3){
        three()
    }

    if(gameState === 4){
        four()
    }

    if(gameState === 5){
        loss(mg1)
    }

    if(gameState === 6){
        won(mg1)
    }


}


//function 1: mini game 1

// function 2: mini game 2

//function 3 : mini game 3

//function 4 : mini game 4


/*
 cat oop
*/

class Cat{
    constructor(x,y){
        this.x = x
        this.y = y
        this.status = "idle"
        this.graphic = catIdle
        this.speed = 5
        this.jumpMode = false
        this.jumpPower = 0
    }

    display(){
       imageMode(CENTER)
        image(this.graphic,this.x,this.y,100,100)
       
    }

    move(){
        this.graphic = catIdle
        if (keyIsDown(RIGHT_ARROW)){
                this.graphic = catRun
                this.x += this.speed
        }

        else if(keyIsDown(LEFT_ARROW)){
                this.graphic = catRun
                this.x -= this.speed
        }

        else if(keyIsDown(UP_ARROW)){
            this.graphic = catRun
            this.y -= this.speed
        }

        else if(keyIsDown(DOWN_ARROW)){
            this.graphic = catRun
            this.y += this.speed
        }
    }

    move2(){
        this.graphic = catIdle
        if (keyIsDown(RIGHT_ARROW)){
                this.graphic = catRun
                this.x += this.speed
        }

        else if(keyIsDown(LEFT_ARROW)){
                this.graphic = catRun
                this.x -= this.speed
        }

       
    }

    detectMinigame(mg){
        if(
            (this.x >= mg.x + 50 && this.x <= mg.x + (mg.s - 50))
        && (this.y >= mg.y + 50 && this.y <= mg.y + (mg.s -50))
        ){
            // mg.color = color(128,128,128)
            
            mg.color = color(128,128,128)
            return true
        }else{
            
            mg.color = color(255,255,255)
          
            return false

        }
       
    }

}

class Square{
    constructor(x,y,txt){
        this.x = x
        this.y = y
        this.s = 200
        this.txt = txt
        this.color = color(255,255,255)
        this.points = 0

    }

    display(){
        rectMode(CORNER)
        noStroke()
        fill(this.color)
        rect(this.x,this.y,this.s,this.s)
        fill("pink")
        textSize(20)
        text(this.txt,this.x + 60,this.y + 100)
        text(this.points + " / 10", this.x + 60, this.y + 130)
        noFill()
        stroke(128)
        //text("x: " + this.x + " y: " + this.y, this.x + 60,this.y + 150)
        noFill()
    }


}

class Ground{
    constructor(x,y){
        this.x = x
        this.y = y
     
    }

    display(){
        rectMode(CORNER)
        fill(128)
        rect(this.x, this.y, 1024,1024)
        
    }

}

class Obstacle{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.speed = random(1,3)
        this.color1 = color(random(255), random(255), random(255))
    }

    display(){
        rectMode(CENTER)
        fill(this.color1)
        rect(this.x, this.y, this.w, this.h)
    }

    move(){
        this.x -= this.speed
    }

    detection(cat){
        let dis = dist(cat.x,cat.y,this.x,this.y)
        text(dis,100,100)
        if(dis < 40){
            mg1Points -= 5
            this.x = 0
        }
    }

}

class Award{
    constructor(x,y){
        this.x = x;
        this.y = y
    }

    display(){
        fill(color(0,200,0))
        ellipse(this.x, this.y, 20,20)
    }

    detectCollisionWithPlayer(cat){
        let dis = dist(cat.x,cat.y,this.x,this.y)
        //text(dis,10,10)
        if(dis < 25){
            this.x = random(100,1000)
            mg1Points += 1
        }
    }

    
}

function one(){

        if(mg1Points <= -10 || mg1Points >= 10){
            mg1.points = mg1Points
            fill("orange")
            rect(350,550,150,150)
            fill("white")
            textSize(25)
            text("Exit",335,570)

            if(dist(350,550,mouseX,mouseY) < 20){
                cat.x = width/2
                cat.y = height/2
                gameState = 0
            }

            fill("green")
            rect(850,550,150,150)
            fill("white")
            textSize(25)
            text("Try Again",800,570)
            if(dist(850,550,mouseX,mouseY) < 20){
                resetMg1()
            }
            
            //gameState = 0
        }

        else {

        background("pink")
        noStroke()
        rectMode(CENTER)
        fill("black")
        textSize(20)
        text("Score: " + mg1Points, 20,20)
        //floor
        fill(128)
        //text("ground1 x " + ground1.x,100,20)
        //text("ground2 x " + ground2.x,100,40)

        ground1.display()
        ground2.display()

        ground1.x -= 2
        ground2.x -= 2

        if(ground1.x <= -1024){
            ground1.x =  1024
        }

        if(ground2.x <= -1024){
            ground2.x = ground1.x + 1024
        }


        //let obs = new Obstacle(random(100,400),500,10,10)
        obs1.display()   
        obs1.move()
        obs1.detection(cat2)

        obs2.display()
        obs2.move()
        obs2.detection(cat2)

        if(obs1.x < 0){
            obs1.x = random(cat2.x + 100,1000)
            obs1.w = random(10,100)
        }

        if(obs2.x < 0){
            obs2.x = random(cat2.x + 200,1000)
            obs2.w = random(10,100)
        }



        cat2.display()
        cat2.move2()

        award.display()
        award.detectCollisionWithPlayer(cat2)

        if(keyIsDown(UP_ARROW) && cat2.jumpMode === false){
            cat2.jumpPower = -9
            cat2.jumpMode = true

        }

        if(cat2.jumpMode === true){
            cat2.y += cat2.jumpPower
            cat2.jumpPower += 0.2

            if(cat2.y >= groundY){
                cat2.jumpMode = false
                cat2.jumpPower = 0
                cat2.y = groundY-15
            }

        }

    }

}



function two(){
    background("pink")
}

function three(){
    background("green")
}

function four(){
    background("red")
}


function resetMg1(){
    mg1Points = 0
    cat2.x = 30
    cat2.y = 570
    
    obs1.x = random(cat2.x + 100,1000)
    obs1.w = random(10,100)
    
    obs2.x = random(cat2.x + 200,1000)
    obs2.w = random(10,100)
    
}
