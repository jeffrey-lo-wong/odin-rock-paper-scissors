let computerScore = 0;
let userScore = 0;

game(computerScore, userScore);

function game(computerScore, userScore) {
  
  //for (let i = 0; i < 5; i++) {
    // let sign = prompt("Rock, paper or scissors?"); //prompts rock, paper or scissors 

    //let playerSelection = sign.toLowerCase(); // brings to lowercase

        let playerChoice = 0;

        const div = document.querySelector('#results');
        div.setAttribute('style', 'border: black solid; background-color: pink;');

        // if player presses rock button, the method will send the number 1 to the method indicating the choice
        const rock = document.querySelector('#rock-btn');
        rock.addEventListener('click', () => {
            player("rock");
            //console.log("You threw rock"); 
            const words = document.createElement("h1"); 
            words.textContent = "You threw rock"; 
            div.append(words);

            let computerResult = Math.floor((Math.random() * 3) + 1); // randomize choice from computer

            //getComputerChoice(computerResult); 

            playRound(player("rock"), computerResult);

        });

        // if player presses paper button, the method will send the number 2 to the method indicating the choice
        const paper = document.querySelector('#paper-btn');
        paper.addEventListener('click', () => {
            
            //console.log("You threw paper"); 
            const words = document.createElement("h1"); 
            words.textContent = "You threw paper"; 
            div.append(words);

            let computerResult = Math.floor((Math.random() * 3) + 1); // randomize choice from computer

            //getComputerChoice(computerResult); 

            playRound(player("paper"), computerResult);
            

        });

        // if player presses scissors button, the method will send the number 3 to the method indicating the choice
        const scissors = document.querySelector('#scissors-btn');
        scissors.addEventListener('click', () => {
            
            //console.log("You threw scissors"); 
            const words = document.createElement("h1"); 
            words.textContent = "You threw scissors"; 
            div.append(words);

            let computerResult = Math.floor((Math.random() * 3) + 1); // randomize choice from computer

            //getComputerChoice(computerResult); 

            playRound(player("scissors"), computerResult);

        });

        function player (playerSelection) {
        if (playerSelection == "rock") {
            playerChoice = 1;
        } else if (playerSelection == "paper") {
            playerChoice = 2;
        } else if (playerSelection == "scissors") {
            playerChoice = 3;
        }
        return playerChoice;
        }  

        // gives the choice the computer chose
        /*function getComputerChoice(computerChoice) {

        if (computerChoice === 1) {
            console.log("Computer threw rock");
            } else if (computerChoice === 2) {
            console.log("Computer threw paper");
            } else if (computerChoice === 3) {
            console.log("Computer threw scissors");
            } 
        } */


    function playRound(playerSelection, computerResult) {
        if (playerSelection == computerResult) {
            //console.log("Tie")
            const words = document.createElement("h1"); 
            words.textContent = "Tie"; 
            div.append(words);

            const playerScore = document.createElement("h1"); 
            playerScore.textContent = "Player: " + userScore; 
            const compScore = document.createElement("h1"); 
            compScore.textContent = "Computer: " + computerScore; 
        
            div.append(playerScore);
            div.append(compScore);

            finalMessage(userScore)
        }

        else if (playerSelection == 2 && computerResult == 3) {
            //console.log("Scissors beat paper");
            //console.log("Computer wins!");
            const words = document.createElement("h1"); 
            words.textContent = "Scissors beat paper. Computer Wins!"; 
            div.append(words);
            computerScore++; 

            const playerScore = document.createElement("h1"); 
            playerScore.textContent = "Player: " + userScore; 
            const compScore = document.createElement("h1"); 
            compScore.textContent = "Computer: " + computerScore; 
        
            div.append(playerScore);
            div.append(compScore);

            finalMessage(userScore)
        }

        else if (playerSelection == 3 && computerResult == 1) {
            //console.log("Rock beats scissors");
            //console.log("Computer wins!");
            const words = document.createElement("h1"); 
            words.textContent = "Rock beats scissors. Computer Wins!"; 
            div.append(words);
            computerScore++; 

            const playerScore = document.createElement("h1"); 
            playerScore.textContent = "Player: " + userScore; 
            const compScore = document.createElement("h1"); 
            compScore.textContent = "Computer: " + computerScore; 
        
            div.append(playerScore);
            div.append(compScore);

            finalMessage(userScore)
        }

        else if (playerSelection == 1 && computerResult == 2) {
            //console.log("paper beats rock");
            //console.log("Computer wins!");
            const words = document.createElement("h1"); 
            words.textContent = "Paper beats rock. Computer Wins!"; 
            div.append(words);
            computerScore++; 

            const playerScore = document.createElement("h1"); 
            playerScore.textContent = "Player: " + userScore; 
            const compScore = document.createElement("h1"); 
            compScore.textContent = "Computer: " + computerScore; 
        
            div.append(playerScore);
            div.append(compScore);

            finalMessage(userScore)
        }

        else if (playerSelection == 1 && computerResult == 3) {
            //console.log("Rock beats scissors");
            //console.log("You win!");
            const words = document.createElement("h1"); 
            words.textContent = "Rock beats scissors. You Win!"; 
            div.append(words);
            userScore++;

            const playerScore = document.createElement("h1"); 
            playerScore.textContent = "Player: " + userScore; 
            const compScore = document.createElement("h1"); 
            compScore.textContent = "Computer: " + computerScore; 
        
            div.append(playerScore);
            div.append(compScore);

            finalMessage(userScore)
        }

        else if (playerSelection == 2 && computerResult == 1) {
            //console.log("Paper beats rock");
            //console.log("You win!");
            const words = document.createElement("h1"); 
            words.textContent = "Paper beats rock. You Win!"; 
            div.append(words);
            userScore++;

            const playerScore = document.createElement("h1"); 
            playerScore.textContent = "Player: " + userScore; 
            const compScore = document.createElement("h1"); 
            compScore.textContent = "Computer: " + computerScore; 
        
            div.append(playerScore);
            div.append(compScore);

            finalMessage(userScore)
        }

        else if (playerSelection === 3 && computerResult === 2) {
            //console.log("Scissors beats paper");
            //console.log("You win!");
            const words = document.createElement("h1"); 
            words.textContent = "Scissors beat paper. You Win!"; 
            div.append(words);
            userScore++;

            const playerScore = document.createElement("h1"); 
            playerScore.textContent = "Player: " + userScore; 
            const compScore = document.createElement("h1"); 
            compScore.textContent = "Computer: " + computerScore; 
        
            div.append(playerScore);
            div.append(compScore);

            finalMessage(userScore)
        }

        //console.log("Round " + i + " has ended.");

        /*if (i === 4) {
            console.log("User score is: " + userScore + " | Computer score is: " + computerScore + " | There were " + (i + 1) + " rounds");
            if (userScore < computerScore) {
                console.log("You lose, computer wins the game!"); 
            } else if (userScore > computerScore) {
                console.log("Computer loses, You win the game!");
            } else if (userScore === computerScore) {
                console.log("It is a tie, nobody wins.");
            }
        } */
        }

        function finalMessage(userScore) {
            if (userScore == 5) {
                const finish = document.createElement("h1"); 
                finish.textContent = "YOU WIN THE GAME";
            
                div.append(finish)

            } else if (computerScore == 5) {
                const finish = document.createElement("h1"); 
                finish.textContent = "YOU LOST";
            
                div.append(finish)
            } else if (computerScore > 5 || userScore > 5) {
                const finish = document.createElement("h1");
                finish.textContent = "Stop playing"

                div.append(finish);
            }
        }
        
    }

//}
//}