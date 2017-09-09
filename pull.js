
var jsonfile = require('jsonfile')
var file = 'data.json'
var chalk = require('chalk');
var colors = require('colors');
var arrForPlay = [];
var inquirer = require('inquirer');
var fs  = require('fs')

function showCards() {
    jsonfile.readFile(file, function(err, data){
        if (err){
            console.log(err)
        } else {
        data.cards.forEach(function(element, index) {
            let i = index + 1;

            console.log(colors.cyan(`<-----Card ${i}----->`))
            console.log(colors.green.italic(`Front: ${element.front}`))
            console.log(colors.red.italic(`Front: ${element.back}`))
            console.log(colors.cyan(`<-------------------->`))

        })   
        }
    })
}

module.exports = {
    showCards
}