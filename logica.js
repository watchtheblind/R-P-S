let table = document.getElementById("myTable");
let tbody = table.getElementsByTagName("tbody")[0];
let div = document.querySelector("#finalresult");
let userScore = 0;
let comScore = 0;
// let ol = document.getElementById("si");
function playRound(x){
    let newRow = table.insertRow(tbody.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    //player chooses
    const playerSelection = x;
    //so do computer
    const choice = ['rock','papers','scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const computerSelection = choice[randomIndex];
    //all possible cases
    switch (true){
        case (playerSelection=='rock' && computerSelection =='scissors'):
        case (playerSelection=='scissors' && computerSelection =='papers'):
        case (playerSelection=='papers' && computerSelection =='rock'):
                userScore+=1;
                // Añadimos contenido a las celdas
                cell1.innerHTML = "You win";
                cell2.innerHTML = "You lose";
                break;
        case (playerSelection==computerSelection):
                cell1.innerHTML = "Draw";
                cell2.innerHTML = "Draw";   
                break;
        case (playerSelection=='papers' && computerSelection =='scissors'):
        case (playerSelection=='rock' && computerSelection =='papers'):
        case (playerSelection=='scissors' && computerSelection =='rock'):
                comScore+=1;
                // Añadimos contenido a las celdas
                cell1.innerHTML = "You lose";
                cell2.innerHTML = "You win";
               break;
        default:
            break;
        }
    if (userScore ==5){
        result = document.createTextNode("YOU WON! Total score:"+userScore+"-"+comScore);
        div.appendChild(result);
        table.replaceChildren();
    }
    else if (comScore ==5){
        result = document.createTextNode("YOU LOST! Total score:"+userScore+"-"+comScore);
        div.appendChild(result);
        table.replaceChildren();
    }
    }
const rockButton = document.querySelector('button[value="rock"]');
rockButton.addEventListener("click", () => playRound("rock"));
const papersButton = document.querySelector('button[value="papers"]');
papersButton.addEventListener("click", () => playRound("papers"));
const scissorsButton = document.querySelector('button[value="scissors"]');
scissorsButton.addEventListener("click", () => playRound("scissors"));