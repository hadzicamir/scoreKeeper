// VARIABLES
let first = document.querySelector('#first');
let second = document.querySelector('#second');
let reset = document.querySelector('#reset');
let select = document.querySelector('#select');
let resOne = document.querySelector('#resOne');
let resTwo = document.querySelector('#resTwo');
first.disabled = false;
second.disabled = false;
// FUNCTIONS

// EVENT LISTENERS
first.addEventListener('click', () => {
    resOne.innerHTML++;
    if(resOne.innerHTML === select.value){
        first.disabled = true;
        second.disabled = true;
        resOne.classList.add('win');
        resTwo.classList.add('lose');
        first.disabled = true;
        second.disabled = true;
    };
});

second.addEventListener('click', () => {
    resTwo.innerHTML++;
    if(resTwo.innerHTML === select.value){
        second.disabled = true;
        first.disabled = true;
        resTwo.classList.add('win');
        resOne.classList.add('lose');
        first.disabled = true;
        second.disabled = true;
    }
});

reset.addEventListener('click', () => {
    first.disabled = false;
    second.disabled = false;
    resOne.innerHTML = 0;
    resTwo.innerHTML = 0;
    resTwo.classList.remove('win', 'lose');
    resOne.classList.remove('lose', 'win');
    first.disabled = false;
    second.disabled = false;
});

select.addEventListener('change', (event) => {
    if(event.target.value){
        first.disabled = false;
        second.disabled = false;
        resOne.innerHTML = 0;
        resTwo.innerHTML = 0;
    };
    if((resOne === resTwo) && (resOne < select.value) && (resTwo < select.value)){
        console.log('asgsa')
    }
});

