
/*
 game states
 0 = default
 1 = mini game1
 2 = mini game2
 3 = mini game3
 4 = mini game4
*/

let gameState = 1;


let cat
let cat2 
let catIdle;
let catRun;

let mg1
let mg2
let mg3
let mg4

//game 1 variables
let groundX = 0
let groundY = 600
let obstacle1X = 1000
let obstacle1Y = 520

let ground2X = 1024
let ground2Y = 600


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
    frameRate(20)

}

function draw(){
    background(248,131,121)
    //text("cat pos x : " + cat.x + " cat pos y: " + cat.y, 15,15)
    if(gameState == 0){ // the default map 
        
        mg1.display()
        mg2.display()
        mg3.display()
        mg4.display()
        cat.display()
        cat.move()
   
        let minigame1 = cat.detectMinigame(mg1)
        let minigame2 = cat.detectMinigame(mg2)
        let minigame3 = cat.detectMinigame(mg3)
        let minigame4 = cat.detectMinigame(mg4)

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

        // else if(keyIsDown(UP_ARROW)){
        //     this.graphic = catRun
        //     this.y -= this.speed
        // }

        // else if(keyIsDown(DOWN_ARROW)){
        //     this.graphic = catRun
        //     this.y += this.speed
        // }
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

function one(){
    background("pink")
    noStroke()
    //floor
    fill(128)
    text("ground1 x " + groundX,100,20)
    text("ground2 x " + ground2X,100,40)

    rect(groundX,groundY,width,width)
    rect(ground2X,ground2Y,width,width)
    //rect(obstacle1X,obstacle1Y,30,80)

    fill("green")
    ellipse(groundX,groundY,20,20)
    fill("blue")
    ellipse(ground2X,ground2Y,20,20)

    //obstacle1X-= 1
    ground2X -= 2
    groundX -= 2

    if(groundX <= -1024){
        groundX =  1024
    }

    if(ground2X <= -1024){
        ground2X = groundX + 1024
    }

    cat2.display()
    cat2.move2()

    if(keyIsPressed && key === "j" && cat2.jumpMode === false){
        cat2.jumpPower = -7
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

function two(){
    background("pink")
}

function three(){
    background("green")
}

function four(){
    background("red")
}