const div = document.createElement('div');
const body = document.querySelector('body');
div.innerHTML = "hello kodr";

let count = 0;

function render() {
    body.innerHTML = ""; // Clear the body
    div.innerHTML = `hello kodr ${count}`; // Update the div's content
    body.appendChild(div); // Append the div back to the body
}

function raf() {
    requestAnimationFrame(() => {
        render(); // Call render function to update UI
        count++;  // Increment the count
        raf();    // Recursively call raf for the next frame
    });
}

// Start the animation
raf();
