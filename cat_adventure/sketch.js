
/*
 game states
 0 = default
 1 = mini game1
 2 = mini game2
 3 = mini game3
 4 = mini game4
*/

let gameState = 0;


let cat
let catIdle;
let catRun;

function preload(){
    catIdle = loadImage("img/cat03_idle_blink_8fps.gif");
    catRun = loadImage("img/cat03_run_12fps.gif")

}

function setup(){
    createCanvas(640,500)
    cat = new Cat(height/2, width/2)
    noStroke()

    

}

function draw(){
    background(248,131,121)
    if(gameState == 0){ // the default map 
        text("Game 1",230,90)
        rect(200,100,100,100)
  
        if(dist(cat.x,cat.y,200,100) < 10){
            fill(128)
            rect(200,100,100,100)
        }else{
            fill(255)
            rect(200,100,100,100)
        }
    }

    //if game state is 1 : we enter into mini game1

    //if game state is 1 : we enter into mini game2

    //if game state is 1 : we enter into mini game3

    //if game state is 1 : we enter into mini game4

    
    cat.display()
    cat.move()

   
   
    
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
    }

    display(){
       
        image(this.graphic,this.x,this.y,100,100)
       
      
       
    }

    move(){
        this.graphic = catIdle
        if (keyIsDown(RIGHT_ARROW)){
                this.graphic = catRun
                this.x += 1
        }

        else if(keyIsDown(LEFT_ARROW)){
                this.graphic = catRun
                this.x -= 1
        }

        else if(keyIsDown(UP_ARROW)){
            this.graphic = catRun
            this.y -= 1
        }

        else if(keyIsDown(DOWN_ARROW)){
            this.graphic = catRun
            this.y += 1
        }
    }
}