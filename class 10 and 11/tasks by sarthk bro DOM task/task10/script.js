var img = document.querySelector('#card img');
var i = document.querySelector("#card i");

img.addEventListener('dblclick', function () {
    i.style.display = "block"; // Show the heart
    // Add animation class to scale heart
    i.style.animation = "heartAnimation 0.9s ease-out forwards";

    setTimeout(() => {
        i.style.display = "none";  
    },900); 
});
