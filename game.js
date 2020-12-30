//DOM

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");
const reboot_div = document.getElementById("reboot");
const userBadge = document.getElementById("userLabel");
const compBadge = document.getElementById("compLabel");

//computer choice function
function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

//convert to word fucntion coverts  single letters into words. 
function convertToWord(letter) {
    if (letter === "R") return "Rock";
    if (letter === "S") return "Scissors";
    if (letter === "P") return "Paper";
    
}

//win function
function win(userChoice, computerChoice) {
    const userChoice_Div = document.getElementById('userLabel');
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    userChoice_Div.classList.add('green-glow');
    setTimeout(function() {document.getElementById('userLabel').classList.remove('green-glow') }, 500);
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} . You Win! Preem!`;
   

};

//lose outcome function

function lose(userChoice, computerChoice) {
    const compChoice_div = document.getElementById('compLabel')
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    compChoice_div.classList.add('green-glow');
    setTimeout(function() {compChoice_div.classList.remove('green-glow') }, 500);
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)} . You lost! Bogus!`;

}

//draw outcome function

function draw(userChoice, computerChoice) {
    const draw_div = document.getElementsByClassName("score-board");
    draw_div[0].classList.add('white-glow');
    setTimeout(function() {draw_div[0].classList.remove('white-glow') }, 1000)
    result_p.innerHTML = `Double ${convertToWord(userChoice)}.  It is a draw. Equally Matched.`;
}

//gameover player wins function
function gameoverPlayerWins() {
    if (userScore => 5) {
        result_p.innerHTML = "You Won! You're a legend!";
        userScore = 0;
        compScore = 0;
    }
}

function gameoverCompWins() {
    if (compScore => 5) {
        result_p.innerHTML = "You Lost! You're nothing.";
        userScore = 0;
        compScore = 0;
    }
}


//game function
function game(userChoice)  {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "PR":
        case "RS":
        case "SP":
            win(userChoice, computerChoice);
            break;
        case "RP":
        case "PS":
        case "SR":
            lose(userChoice, computerChoice);
            break;
        case "RR":
        case "SS":
        case "PP":
            draw(userChoice, computerChoice); 
            break;
    }
        if (userScore === 5 && compScore !=5) {
            gameoverPlayerWins();
        };

        if (compScore === 5 && userScore !=5) {
            gameoverCompWins();
            
        };

};

//user choice function
function main() {
    

    rock_div.addEventListener('click', function() {
    game('R');
    })

    paper_div.addEventListener('click', function() {
        game('P');  
    })

    scissors_div.addEventListener('click', function() {
        game("S");    
    })

};

main();