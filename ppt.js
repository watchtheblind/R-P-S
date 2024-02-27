/* queryselector para cada botón */
document.querySelector('button[value="rock"]').addEventListener("click", playRound("rock"));
document.querySelector('button[value="papers"]').addEventListener("click", playRound("papers"));
document.querySelector('button[value="scissors"]').addEventListener("click", playRound("scissors"));
const div = document.createElement('div');

function playRound(x){
    //player chooses
    const playerSelection = x;
    //so do computer
    const choice = ['rock','papers','scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const computerSelection = choice[randomIndex];
    switch (true){
        case (playerSelection=='rock' && computerSelection =='scissors'):
        case (playerSelection=='scissors' && computerSelection =='papers'):
        case (playerSelection=='papers' && computerSelection =='rock'):
           let texto = document.createTextNode("Player wins!");
           div.appendChild(texto);
           return  document.body.appendChild(div);
           break;
        case (playerSelection==computerSelection):
            texto = document.createTextNode("Draw game!");
            div.appendChild(texto);
            return document.body.appendChild(div);
            break;
        case (playerSelection=='papers' && computerSelection =='scissors'):
        case (playerSelection=='rock' && computerSelection =='papers'):
        case (playerSelection=='scissors' && computerSelection =='rock'):
            texto = document.createTextNode("you lose!");
            div.appendChild(texto);
            return document.body.appendChild(div);
            break;
        default:
            texto = document.createTextNode("error!");
            div.appendChild(texto);
            return document.body.appendChild(div);
            break;
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