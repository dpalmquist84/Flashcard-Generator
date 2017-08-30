module.exports = ClozeCard;

var card = require("./BasicCard.js");

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
   
}

ClozeCard.prototype.printInfo = function() {
    console.log(`${this.text} ${this.cloze}`);
}

card.prototype.printInfo = function() {
    console.log(`${this.text} ${this.cloze}`);
}

let georgeWashington = new ClozeCard(car), "George Washington")

georgeWashington.printInfo();

