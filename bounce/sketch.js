let x = 10
let y = 20

let xSpeed = 1
let ySpeed = 1

function setup() {
    createCanvas(300,200);
    background(0);

}

function draw() {
    background(0)
    ellipse(x,y,25,25)

    x += xSpeed;
    y += ySpeed;

    //x bounce left or right
    if(x  >= 290 || x <= 0){
        //bounce
        xSpeed = xSpeed * -1.1;
        fill(random(255),random(255),random(255))
    }

    // y bounce up or down
    if ( y >= 190 || y <= 0){
        ySpeed = ySpeed * -1.1;
        fill(random(255),random(255),random(255))
    }

   //p5 constraint function
   xSpeed = constrain(xSpeed,-10,10)
   ySpeed = constrain(ySpeed,-10,10)

   


    
}