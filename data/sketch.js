
let emojis; //hold data
let param = "random"

let animals = ["animal-amphibian", "animal-bird", "animal-bug", "animal-mammal", "animal-marine", "animal-reptile", "plant-flower", "plant-other"]

let verbs = ["steals","kicks","hugs","laughs at"]
let verb

let rand_animals;

let random_animal
let index = 0



function preload(){
  let url = "https://emojihub.yurace.pro/api/" + param
  let animalIndex = int(random(0,animals.length))
  
  let url1 = "https://emojihub.yurace.pro/api/all/group/" + animals[animalIndex]
  console.log(url1)
  
  random_emoji = loadJSON(url);
  rand_animals = loadJSON(url1)

  

}

function setup(){
  createCanvas(windowWidth,windowHeight)
  console.log(random_emoji)
  console.log(rand_animals)
  console.log("HJSABSA"+ rand_animals[0].name + " ")
  
}

function draw(){
  
  background(100)
 
  fill("white")
  text("name: " + random_emoji.name,20,20)
  text("category: " + random_emoji.category,20,40)
  text("group: " + random_emoji.group,20,60)
  text("html code: " + random_emoji.htmlCode[0],20,80)
  text("unicode: " + random_emoji.unicode[0],20,100)

  if(mouseIsPressed){
    let verbIndx = int(random(0,verbs.length))
    verb = verbs[verbIndx]
    index = int(random(0,animals.length))
    random_animal = rand_animals[index]
    //console.log("RAND ANIMALS" ,rand_animals[1], index)
    
    
  }else{
    if(random_animal){
      text(random_emoji.name + " " + verb + " " + random_animal.name , 20,140)
    }
    
  }

}