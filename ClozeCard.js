let inquirer = require('inquirer');
let BasicCard = require('./BasicCard.js');
let jsonfile = require('jsonfile');
let file = 'data.json';
let fs = require('fs');
let colors = require('colors');
let pull = require('./pull.js');
let remove = require('./remove.js');
let fileA = "stuff.json";



function ClozeCard() {



inquirer.prompt([
    {
        type: 'list',
        name: 'options',
        message: `What do you want to do?`,
        choices: [ new inquirer.Separator(` ---options--- `), {
          name: "Play the game"
        }, {
          name: "Show all cards"
        }, {
          name: "Exit the game"
        }, { 
          name: "Add a card"
        }, { 
          name: "Delete a card"
        }
      ],
    }]).then(function(answers){
      let opts = answers.options;

      

      if( opts === "Play the game"){
        
        jsonfile.readFile(file, function(err, data){
        

          let card = data.cards.sort(function(){
            return .5 - Math.random();
          });
          

          card = card.slice(0, 3)

          let i = 0;
          let correct = 0;
          let incorrect = 0;

          function questions(i, card) {
            if (i === 3) {
              console.log(colors.bold.green(`correct ${correct} 👍`))
              console.log(colors.bold.red(`Incorrect ${incorrect} 👎`))
              setTimeout(ClozeCard, 2000);
            } else {
              console.log(colors.yellow(`Card: ${i+1}`))

              let question = [
                {
                  type: "input",
                  name: "in",
                  message: `${card[i].front}`
                }
              ];
            
            inquirer.prompt(question).then(function(answers){

              if(answers.in.toLowerCase() === card[i].back.toLowerCase()){
                correct++;
                console.log(colors.green.underline(`CORRECT!!! 😃`))
              } else {
                incorrect++;
                console.log(colors.red.underline(`INCORRECT!!! 🙁`))
                console.log(colors.blue(`The correct answer is: ${card[i].back}`))
              }
              i++
              questions(i, card)
            });
           }
          }
        questions(i, card)
    })
  }


      if( opts === "Show all cards"){
         pull.showCards()
         setTimeout(ClozeCard, 3000);
         
      }  
 

      if( opts === "Exit the game"){
      
        console.log(colors.bold.red("SEE YOU LATER!"))
				
				process.exit()
      } 

       if( opts === "Add a card"){
         
        
         let newCard = [{
           type: "input",
           name: "Front",
           message: "What will the question be ?!?"
         }, {
           type: "input",
           name: "Back",
           message: "What is the answer"
         }];
        
         inquirer.prompt(newCard).then(function(answers){

          let front = answers.Front.toString();
          let back = answers.Back.toString();

          let card = new BasicCard.basicCard(front, back)
          card.createJSON();
          console.log(`Card was added 👌`);
          setTimeout(ClozeCard, 1000);
         })
      }
      

       if( opts === "Delete a card 💔"){
         
        pull.showCards()

          let question = [
            {
              type: "input",
              name: "deleteCard",
              message: "what is the number of the card that you want to delete"
            }
          ]

        function deleteCard() {
          inquirer.prompt(question).then(function(answer) {
          

            
            if (isNaN(answer.deleteCard)) {
              console.log(colors.red.bold.italic("You didnt enter a number ❓"))
              setTimeout(deleteCard, 2000)
            } else {
              let i = answer.deleteCard;
              remove.RemoveFromJSON(i);
              setTimeout(ClozeCard, 1000)
            }
          })
        }
      setTimeout(deleteCard, 1000)
      
      }


    });



}


ClozeCard();


