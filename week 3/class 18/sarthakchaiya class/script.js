let x = 0; // Initial position
const box = document.getElementById("box");

function animate() {
    x += 1; // Move the box by 1px each frame
    box.style.transform = `translateX(${x}px)`; // Update position
    requestAnimationFrame(animate); // Schedule the next frame
}

animate(); // Start the animation
















