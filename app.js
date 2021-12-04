const p1 = {
    score: 0,
    button: document.querySelector('#first'),
    display: document.querySelector('#resOne'),
}
const p2 = {
    score: 0,
    button: document.querySelector('#second'),
    display: document.querySelector('#resTwo'),
}

let resetBtn = document.querySelector('#reset');
let select = document.querySelector('#select');
let winningScore = 3;
let isGameOver = false;

function updateScores (player, opponent) {
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
});
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
});

select.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

resetBtn.addEventListener('click', reset);

function reset () {
    isGameOver = false;
    for(let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

// // VARIABLES
// let first = document.querySelector('#first');
// let second = document.querySelector('#second');
// let reset = document.querySelector('#reset');
// let select = document.querySelector('#select');
// let resOne = document.querySelector('#resOne');
// let resTwo = document.querySelector('#resTwo');
// first.disabled = false;
// second.disabled = false;
// let finalScore = select.value;
// let isGameOver = false;
// // FUNCTIONS

// // EVENT LISTENERS
// first.addEventListener('click', () => {
//     resOne.innerHTML++;
//     if(resOne.innerHTML === finalScore){
//         first.disabled = true;
//         second.disabled = true;
//         resOne.classList.add('has-text-success');
//         resTwo.classList.add('has-text-danger');
//     };
// });

// second.addEventListener('click', () => {
//     resTwo.innerHTML++;
//     if(resTwo.innerHTML === finalScore){
//         second.disabled = true;
//         first.disabled = true;
//         resTwo.classList.add('has-text-success');
//         resOne.classList.add('has-text-danger');
//     }
// });

// reset.addEventListener('click', () => {
//     first.disabled = false;
//     second.disabled = false;
//     resOne.innerHTML = 0;
//     resTwo.innerHTML = 0;
//     resTwo.classList.remove('has-text-success', 'has-text-danger');
//     resOne.classList.remove('has-text-success', 'has-text-danger');
//     first.disabled = false;
//     second.disabled = false;
// });

// select.addEventListener('change', (event) => {
//     if(event.target.value){
//         first.disabled = false;
//         second.disabled = false;
//         resOne.innerHTML = 0;
//         resTwo.innerHTML = 0;
//     };
// });

