const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.querySelector('#scissors')

let P1choice = document.querySelector('.player_1_choice')
let computerChoice = document.querySelector('.player_computer_choice')

const randomResult = ()=> {
    const result = (Math.floor(Math.random()*10))

    if (result <= 4) {
        computerChoice.innerHTML = '<img src="./rock.png"> Rock'
        computerChoice.classList.add('computer_player_style')
    } else if (result > 4 && result < 7) {
        computerChoice.innerHTML = '<img src="./paper.png"> Paper'
        computerChoice.classList.add('computer_player_style')
    } else {
        computerChoice.innerHTML = '<img src="./scissors.png"> Scissors'
        computerChoice.classList.add('computer_player_style')
    }
}

rock.addEventListener('click', (e)=> {
    P1choice.innerHTML = '<img src="./rock.png"> Rock'
    randomResult()
    rockScoring()
    point()
    pointsReached()
})

paper.addEventListener('click', (e)=> {
    P1choice.innerHTML = '<img src="./paper.png"> Paper'
    randomResult()
    paperScoring()
    point()
    pointsReached()
})

scissors.addEventListener('click', (e)=> {
    P1choice.innerHTML = '<img src="./scissors.png"> Scissors'
    randomResult()
    scissorsScoring()
    point()
    pointsReached()
})

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const labelPlayer1 = document.querySelector('#player_1_choice')
const labelPlayerComputer = document.getElementById('player_computer_choice')

const computerWins = ()=> {
    labelPlayer1.innerHTML = 'You lose'
    labelPlayerComputer.innerHTML = 'Computer wins'
    labelPlayer1.style.backgroundColor = 'gray'
    labelPlayerComputer.style.backgroundColor = 'green'
}

const player1Wins = ()=> {
    labelPlayer1.innerHTML = 'You win'
    labelPlayerComputer.innerHTML = 'Computer lose'
    labelPlayer1.style.backgroundColor = 'green'
    labelPlayerComputer.style.backgroundColor = 'gray'
    // labelPlayer1.classList.add('player_1_wins_style')
}

const tiePlayers = ()=> {
    labelPlayer1.innerHTML = 'Draw'
    labelPlayerComputer.innerHTML = 'Draw'
}

const rockScoring = ()=> {
    if (P1choice.innerHTML.includes('Rock') && computerChoice.innerHTML.includes    ('Paper')) {
        computerWins()
    } else if (P1choice.innerHTML.includes('Rock') && computerChoice.innerHTML.includes('Scissors')) {
        player1Wins()
    } else {
        tiePlayers()
    }}

const paperScoring = ()=> {
    if (P1choice.innerHTML.includes('Paper') && computerChoice.innerHTML.includes    ('Scissors')) {
        computerWins()
    } else if (P1choice.innerHTML.includes('Paper') && computerChoice.innerHTML.includes('Rock')) {
        player1Wins()
    } else {
        tiePlayers()
    }
}

const scissorsScoring = ()=> {
    if (P1choice.innerHTML.includes('Scissors') && computerChoice.innerHTML.includes   ('Rock')) {
        computerWins()
    } else if (P1choice.innerHTML.includes('Scissors') && computerChoice.innerHTML.includes('Paper')) {
        player1Wins()
    } else {
        tiePlayers()
    }
}

const player1points = document.getElementById('score_player1')
const player2points = document.getElementById('score_player2')
let player1startPoints = 0
let player2startPoints = 0

const point = ()=> {
    if (labelPlayer1.innerHTML.includes('You win')) {
        player1startPoints++
        player1points.innerHTML = player1startPoints
    } else if (labelPlayerComputer.innerHTML.includes('Computer wins')) {
        player2startPoints++
        player2points.innerHTML = player2startPoints   
    }
}

const pointsReached = ()=> {
    if (player1points.innerHTML==10 || player2points.innerHTML==10) {
        winner()
        setTimeout(() => {
            location.reload()
        }, 1000);
    }
}

const winner = ()=> {
    if (player1points.innerHTML < player2points.innerHTML) {
        alert('Game over! YOU WIN!')
    } else {
        alert('Game over! YOU LOSE!')
    }
}













