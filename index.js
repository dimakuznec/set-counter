const counterNode = document.querySelector('.js-counter');
const incBtnNode = document.querySelector('.js-inc-btn');
const clearBtnNode = document.querySelector('.js-clear-btn');
let counter = 0;

function increment() {
    counter += 1;
}

function clear() {
    counter = 0;
}

function render() {
    counterNode.innerText = counter;
}


incBtnNode.addEventListener('click', () => {
    increment();
    render(); 
});

clearBtnNode.addEventListener('click', () => {
    clear();
    render();
    
});




render();



