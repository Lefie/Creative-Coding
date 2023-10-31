
let allEmojis 

let test

let emojiText;

let sentence = "I love watermelons"

let dict = {};



let input



let replacedText

function preload(){
    let url = "https://emojihub.yurace.pro/api/all" 

    allEmojis = loadJSON(url)


}

function setup(){
    let c = createCanvas(500,500)
    c.parent("#container")
    background(128)

    input = createInput();
    input.position(570, 320);


    for( let i = 0; i < 1790;i++){
        console.log(allEmojis[i].name)
        console.log(i)
        dict[allEmojis[i].name] = i
    }

   

   
    

}

function draw(){
    background(128,205,100)
    //emoji.display()
    let userInput = input.value();
    console.log(userInput)

    

    replacedText = replaceWordsWithEmojis(userInput, dict);
    textSize(20)
    if (mouseX && mouseY) {
        text(replacedText, 100, 300);
    }


}

function replaceWordsWithEmojis(text, emojiData) {
    const words = text.split(" ");
    const replacedWords = words.map(word => {


    // Convert the word to lowercase for case-insensitive matching
    const lowercaseWord = word.toLowerCase();

    // Check if the word is an exact match in the emojiData
 if (emojiData[lowercaseWord]) {
        let indx = dict[lowercaseWord]
        let code = process(allEmojis[indx].unicode[0])
      return code
    }

    // If it's not an exact match, check for partial matches
   const matchingEmoji = findPartialMatch(lowercaseWord, emojiData);
    return matchingEmoji ? matchingEmoji : word;
  });

  return replacedWords.join(" ");
}

function findPartialMatch(word, emojiData) {
    // Iterate through the emoji data and check for partial matches
    for (const key in emojiData) {
        
        if (emojiData.hasOwnProperty(key)) {

          if (key.includes(word)) {

            let index = emojiData[key]
            let code = process(allEmojis[index].unicode[0]);
            return code;
    }
        }
      }
      return null; 
  }



function process( unicodeStr){
       
  const unicodeHex = unicodeStr.substring(2);

  // Convert the hexadecimal Unicode to a JavaScript Unicode escape sequence
  const unicodeEscape = String.fromCodePoint(parseInt(unicodeHex, 16));

  return unicodeEscape


}
  
 