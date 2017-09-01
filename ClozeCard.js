
var BasicCard = require("./BasicCard.js");
var bestPresident = require("./BasicCard.js");



function ClozeCard(text, cloze) {
    debugger;
    text = process.argv.slice(2).join(" ");
    cloze = bestPresident.back;
    partial = bestPresident.front;
    fullText = (`${bestPresident.front}? ${bestPresident.back}`);


    if(text === cloze) {
        console.log(`you got it right`);
    }    else if (text == "") {
        console.log(`YOU BLEW IT`);
    }else if (text != cloze) {
        console.log(`quess again`);
    }
  
    
    console.log(fullText);
    console.log(partial);
    console.log(cloze);

    // cloze = BasicCard;
    // console.log(firstPresident.front)
    debugger;



}


ClozeCard();


