let string = getComputerChoice();
let string2 = playerSelection();
function getComputerChoice(choice){
    choice = ['rock','papers','scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const randomElement = choice[randomIndex];
    console.log(randomElement);
    return;
}
function playerSelection(choice){
    choice = prompt("Write your choice (rock, papers or scissors");
}