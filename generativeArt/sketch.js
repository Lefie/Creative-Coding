
let count = 0; //count the total num of shapes we have

const shapes = []; //create an array that has 3 types of shapes
shapes.push("ellipse")
shapes.push("rectangle")
shapes.push("triangle")



function setup(){
    createCanvas(500,500);
    noStroke()
    frameRate(15)

}

function draw(){

    //pick a random point on canvas
    let x  = random(width)
    let y = random(height)
    //create a random size
    let size = random(5,70) 

    //pick a random color 
    let r = random(255);
    let g = random(255);
    let b = random(255);

    fill(255,0,0)
    

    fill(r,g,b,random(200)) //fill bubbles with random color and transparency
    
    let id = int(random(3)) //get a random id for the shape

    //draw shape according to the id
    if(shapes[id] == "ellipse"){
      ellipse(x,y,size,size)// create random bubbles of random colors and sizes
    } else if (shapes[id] == "rectangle"){
      rect(x,y,size,size);
    }else{
      triangle(x,y,x+random(80),y,x,y+random(80))
    }
    
    
    count += 1 //count the number of total bubbles

    

    if(count >= 1000){ //if the total num of bubbles exceed 1000, reset
        background(255)
        count = 0;
    }

    //user controlled eraser to erase shapes
    stroke(255)
    strokeWeight(20)
    line(mouseX,mouseY,pmouseX,pmouseY)
    
   
    noStroke()
    

}

//clear background if mouse press detected
function mousePressed(){
    background(255)
}