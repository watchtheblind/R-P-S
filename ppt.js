const emp_str=""
playRound(emp_str);
function playRound(x){
    //player chooses
    const playerSelection = prompt("Write your choice (rock, papers or scissors");
    //so do computer
    const choice = ['rock','papers','scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const computerSelection = choice[randomIndex];
    switch (true){
        case (playerSelection=='rock' && computerSelection =='scissors'):
        case (playerSelection=='scissors' && computerSelection =='papers'):
        case (playerSelection=='papers' && computerSelection =='rock'):
           const text = document.getElementById("item");
           x= (text.textContent="Player wins!");
           return x;
            break;
        case (playerSelection==computerSelection):
            x="Draw game!";
            return x;
            break;
        case (playerSelection=='papers' && computerSelection =='scissors'):
        case (playerSelection=='rock' && computerSelection =='papers'):
        case (playerSelection=='scissors' && computerSelection =='rock'):
            x="You lose!";
            return x;
            break;
        default:
            x="Error!";
            return x;
        }
}
// function Game(emp_str){
//     let counterPlayer=0;
//     let counterComputer=0;
//     for (let i=1;i<6;i++){
//         let result=playRound(emp_str);
//         if (result=="Player wins!"){ 
//             counterPlayer+=1;
//         }
//         else if(result=="You lose!"){
//             counterPlayer+=1;
//         }
//         else if(result=="Draw game!"){
//             document.write("draw.");
//         }
//         document.write("<br>"+"player score:"+counterPlayer+"  "+"com score:"+counterComputer+"<br>");
//                                     }
//     if (counterPlayer>counterComputer){
//         document.write("<br>"+"you win!"+"<br>")}
//     else if(counterPlayer<counterComputer){
//         document.write("<br>"+"you lose!"+"<br>")}
//     else if (counterComputer==counterPlayer){
//         document.write("<br>"+"draw game!"+"<br>")}
//     }