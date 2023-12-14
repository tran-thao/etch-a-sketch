const container = document.querySelector('.container');

function createGrid (size) {
    removeAllChildNodes(container);
    for(let i = 0; i < size*size; i++){
        const square = document.createElement('div');
        square.classList.add("square");
        square.addEventListener('mouseover', function() {
            this.style.backgroundColor = randomRGB();
        });
        const squareWidth = (container.offsetWidth-2)/size;
        square.style.flexBasis = `${squareWidth-2}px`;
        container.appendChild(square);
    }
}

const button = document.querySelector('.button');
button.addEventListener('click', function(){
        createGrid(getSize());
});

const getSize = () => {
    let newSize;
    do {
        newSize = window.prompt("Enter a number from 1-100", 3);
    } while (newSize > 100 || newSize <= 0);
    return newSize;
}

function removeAllChildNodes(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

const randomRGB = ()=> {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}