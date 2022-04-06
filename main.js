const body = document.querySelector('body');
const duckBtn = document.querySelector('.duck-btn');
const duckRight = document.querySelector('.duck-right');

duckBtn.onclick = function () {
    duckBtn.textContent = 'Click me again!'
    if (duckRight.querySelector('p')) {
        let oldQuack = duckRight.querySelector('p');
        oldQuack.remove();
    }
    let quack = document.createElement('p');
    quack.textContent = 'Quack!';
    quack.setAttribute('style', 'position: relative; font-size: 50px; color: #727a6d; top: ' + Math.round(Math.random()*86) + '%; left: ' + Math.round(Math.random()*64) + '%; z-index: 1');
    duckRight.appendChild(quack);
}