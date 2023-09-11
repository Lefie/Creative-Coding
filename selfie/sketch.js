function setup() {

  createCanvas(600, 800);
  // //background canvas
   background(255,250,205);


   //random shapes as background
fill(255,192,203);

beginShape();
vertex(80, 100);
vertex(400, 140);
vertex(120, 310);
vertex(180,220);
endShape(CLOSE)

fill(124,252,0,120)
ellipse(430, 140, 80, 80);


   //hair
   fill(0)
   ellipse(330,420,200,350);
   ellipse(270,420,200,350);


   //face
   fill(240, 211, 192); //skin color
   noStroke(); //get rid of stroke
   ellipse(300, 400, 220, 290); //face 

   //bangs
   fill(0)
   arc(300, 290, 180, 100, PI, 0);
   
   fill(240, 211, 192);
   triangle(280, 290, 300, 240, 320,290);

  

 
   //eyebrows
   stroke(41)
   strokeWeight(2)
   noFill()
   arc(250, 355, 30, 30, PI, PI+HALF_PI+HALF_PI);

   //right eye brows
   stroke(41)
   strokeWeight(2)
   noFill()
   arc(350, 355, 30, 30, PI, PI+HALF_PI+HALF_PI);

   //left eye
   strokeWeight(1)
   stroke(21)
   ellipseMode(RADIUS);
  fill(255);

ellipse(250, 370, 20, 10);
ellipseMode(CENTER);
fill(101,67,33);
ellipse(250, 370, 15, 15);

//right eye
ellipseMode(RADIUS);
fill(255);
ellipse(350, 370,20, 10);
ellipseMode(CENTER);
fill(101,67,33);
ellipse(350, 370, 15, 15);

//nose
noStroke()
fill(231,190,191);
rect(295,400,15,30,20);


//meh mouth
stroke(21)
noFill()
line(280,470,320,470);


   //neck 
noStroke();
fill(240, 211, 192);
rect(260,500,80,70,20);

//stroke
stroke(21);
strokeWeight(21);
stroke(240, 211, 192);

//dress
fill(135, 206, 235); //shirt color
rect(165,550,280,360,60); // shirt 


//  stroke(51);
fill(240, 211, 192); //triangle 
triangle(260,550,340,550,300,600); //upside triangle collar

   

   



}





