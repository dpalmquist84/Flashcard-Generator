module.exports = BasicCard;

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    console.log(this);
}

BasicCard.prototype.printInfo = function() {
    console.log(`${this.front} ${this.back}`);
}
let firstPresident = new BasicCard ("Who was the first president of the United States", "George Washington");

firstPresident.printInfo();
