let bus;




// function setup(){

//    createCanvas(800,500)
//    background(128)

//    bus = new Bus(200,200);

// }

// function draw(){
//    let r = random(255)
//    let g = random(255)
//    let b = random(255)
//    background(128)
//    bus.display()
//    bus.move()

// }

// 
function setup(){
  createCanvas(800,500)
  let p = createVector(50,height/2-80)
  bus = new Bus(p.x,p.y)

}

function draw(){
  background(128)
  
  bus.display()
  bus.move()
  //bus.changeColor()

}

class Bus{

     constructor(x1,y1){
        this.x1 = x1;
        this.y1 = y1;
        this.width = 170;
        this.height = 80;
        this.tire1X = this.x1+40;
        this.tire2X = this.x1+130;
        this.tireY = this.y1 + 80;
        this.tireSize = 50;
        this.color = "pink"
        this.speedX = createVector(1,1.5)
     }
  
     display(){
        fill(this.color)
        rect(this.x1,this.y1,this.width,this.height)
        fill("black")
        ellipse(this.tire1X,this.tireY,this.tireSize)
        ellipse(this.tire2X,this.tireY,this.tireSize)
  
       
     }
  
     move(){
        this.tire1X += this.speedX.x
        this.tire2X +=this.speedX.x;
        this.x1 += this.speedX.x

        if(this.x1 >= 600 || this.x1 <= 10){
         this.speedX.x = this.speedX.x * -1.1
        this.changeColor()

       }
  
        
     }
  
     changeColor(){
        
        let r = random(255)
        let g = random(255)
        let b= random(255)
        this.color = color(r,g,b)
  
     }
  
  }
  
  function keyPressed(){
     bus.changeColor();
  }
  