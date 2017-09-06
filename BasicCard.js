
console.log("this loads")
let fs = require('fs');
let obj = {};
let file = 'data.json';
let jsonfile = require('jsonfile')



function basicCard(front, back) {
    this.front = front;
    this.back = back;
    this.createJSON = function() {

        let card = {
            front: front,
            back: back,
            type: "Basic Card"
        };
        
        pushText(card);
    };
    this.pushText = function(card) {
    fs.readFile('data.json', 'utf8', function readFile(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.cards.push(card);
            json = JSON.stringify(obj, null, 2)
            fs.writeFile('data.json', json, "utf8")
        }
    });
   }
}

module.exports = {
    basicCard
}

basicCard();




