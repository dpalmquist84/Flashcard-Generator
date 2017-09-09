let file = 'data.json'
let fs = require('fs');
let colors = require('colors');
let jsonfile = require('jsonfile');
let updated = {
	cards: []
}

function RemoveFromJSON(i) {

    let card = i - 1;

    jsonfile.readFile(file, function(err, data){
        if (card > data.length) {
            console.log(colors.red.bold.italic(`That card doesn't exist`))
        } else {
            data.cards.forEach(function(element, index) {
                if (card != index) {
                    updated.cards.push(element)
                }
            });
        jsonfile.writeFile(file, updated, {
            spaces: 2 
        }, function(err) {
           console.log(`card deleted`)
            })
          }
        })
    }
module.exports = {
    RemoveFromJSON
}
