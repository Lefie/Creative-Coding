var Y_AXIS = 1;
var X_AXIS = 2;

function setup() {

  createCanvas(500, 500);
 

var c1 = color(204, 102, 0);
var c2 = color(0, 102, 153);

//
setGradient(0,0,500,500,c2,c1,Y_AXIS)

//table
stroke(0)
fill(203,158,51,80)
rect(0,280,500,300);

//the green fruit
push()
rotate(PI/23.0)
fill(0)
ellipse(130,305,75,100)
fill(20,124,17)
ellipse(120,300,75,100)
pop()

//white plate
fill(0)
ellipse(220,370,220,180)
fill(255,255,250)
ellipse(230,360,220,180)

//peach3w
var c3 = color(240,210,13)

fill(c3)
ellipse(210,330,130);

fill(0)
ellipse(295,350,130);

fill(84,182,41)
ellipse(320,320,100)

fill(255,154,0)
ellipse(300,350,130);


fill(255,201,92)
ellipse(260,250,130)

strokeWeight(2)
line(270,220,250,250)
fill(0)
ellipse(250,250,10,10)
line(250,250,280,250)


ellipse(300,350,10,10)










 

  







}


//CREDIT: THIS FUNCTION IS TAKEN FROM P5.JS EXAMPLE
//http://www.fabtronics.nl/examples/color-linear-gradient.html
function setGradient(x, y, w, h, c1, c2, axis) {

   noFill();
 
   if (axis == Y_AXIS) {  // Top to bottom gradient
     for (var i = y; i <= y+h; i++) {
       var inter = map(i, y, y+h, 0, 1);
       var c = lerpColor(c1, c2, inter);
       stroke(c);
       line(x, i, x+w, i);
     }
   }  
   else if (axis == X_AXIS) {  // Left to right gradient
     for (var i = x; i <= x+w; i++) {
       var inter = map(i, x, x+w, 0, 1);
       var c = lerpColor(c1, c2, inter);
       stroke(c);
       line(i, y, i, y+h);
     }
   }
 }





