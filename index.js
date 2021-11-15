//rock beats scissors, scissors beat paper, paper beats rock
let computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * options.length);
    return options[randomNum]
}

let playerSelection = prompt(`What's your pick?`);

let playRound = () => {
    const computerSelection = computerPlay();      
    const forPrint = 
    computerSelection === playerSelection ? `You tied` 
    : computerSelection === `scissors` && playerSelection === `paper` ? `You Win! ${computerSelection} beats ${playerSelection}`
    : computerSelection === 'rock' && playerSelection === 'scissors' ? `You Lose ! ${computerSelection} beats ${playerSelection}`
    : 'You tied' 


    return forPrint;  
}
  


let game = () => {
    for ( let i = 0; i < 5; i++){
        console.log(playRound())
        console.log(`Hello ${i}`)
       
    }
}
game()
