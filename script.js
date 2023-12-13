const container = document.querySelector('.container');

//Create 16x16 grid of divs
for(let i = 0; i < 16*16; i++){
    const square = document.createElement('div');
    square.classList.add("square");
    square.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'black';
    });
    container.appendChild(square);
}