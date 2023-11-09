let bus;
let xSpeed = 1;



function setup(){

   createCanvas(800,500)
   background(128)

   bus = new Bus(200,200);

}

function draw(){
   let r = random(255)
   let g = random(255)
   let b = random(255)
   background(128)
   bus.display()
   bus.move()

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
   }

   display(){
      fill(this.color)
      rect(this.x1,this.y1,this.width,this.height)
      fill("black")
      ellipse(this.tire1X,this.tireY,this.tireSize)
      ellipse(this.tire2X,this.tireY,this.tireSize)

     
   }

   move(){
      this.tire1X += xSpeed
      this.tire2X += xSpeed;
      this.x1 += xSpeed

      if(this.x1 >= 600 || this.x1 <= 100){
         xSpeed = xSpeed * -1
       
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