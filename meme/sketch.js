

let imgs = ["/meme/imgs/one.jpeg","/meme/imgs/two.jpeg","/meme/imgs/three.gif","/meme/imgs/four.jpeg","/meme/imgs/five.jpeg"]

let captions = ["when you don't know why the code is working \n but it works",
 "There are 10 types of people in the world:\n Those who understand binary, and those who don't.",
 "When you realize that 99% of coding is debugging.\n The other 1% is writing bugs.","When you fix a bug without knowing how: \n 'I have no idea what I'm doing.",
 "Trying to understand legacy code be like: \n 'Who wrote this, and what were they thinking?'"
];

let meme;


function preload(){
   let randomVal = floor(random(captions.length))
   let img = loadImage(imgs[randomVal]);
   img.resize(500,500)

   meme = {
      image: img,
      caption: captions[randomVal],
      textX: 10,
      textY: random(20, 30),
   }

}

function setup(){
   createCanvas(600, 500);

}

function draw(){
  
  image(meme.image, 0, 0)
  textSize(25)
  fill(255)
  stroke(0)
  strokeWeight(2)
  text(meme.caption, meme.textX, meme.textY)

}