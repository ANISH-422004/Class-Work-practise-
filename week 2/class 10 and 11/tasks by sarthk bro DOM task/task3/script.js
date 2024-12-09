function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const button = document.querySelector('button');
const box = document.querySelector('.box');

button.addEventListener('click', function () {
    
    box.style.backgroundColor = getRandomColor();
});





const circle = document.querySelector('.circle');

circle.addEventListener('mouseover', function () {
    
    circle.style.backgroundColor = getRandomColor();
    circle.textContent = getRandomColor();
});

circle.addEventListener('mouseout', function () {
    circle.textContent = "Hover me!";
});
