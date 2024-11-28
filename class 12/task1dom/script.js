let imgs = document.querySelectorAll('img');
let modal = document.querySelector('#modal');
let page1 = document.querySelector(".page1"); 
let modalview = 0;


imgs.forEach(function (img) {
    img.addEventListener('click', function (event) {
        if (modalview === 0) {
            let currentsrc = img.getAttribute('src'); // Get the clicked image's source
            let i = document.createElement("img");    // Create a new image element
            i.src = currentsrc;                      // Set its src attribute

            modal.innerHTML = "";                    // Clear any previous content in the modal
            modal.appendChild(i);                    // Append the new image to the modal
            modal.style.display = "flex";           // Show the modal
            modalview = 1;                           // Set the modal view flag
            event.stopPropagation();                 // Prevent the click from propagating to `.page1`
        }
    });
});


page1.addEventListener('click', function (event) {
    if (modalview === 1) {
        modal.style.display = "none"; // Hide the modal
        modal.innerHTML = "";         // Clear modal content
        modalview = 0;                // Reset modal view flag
    }
});

// this is done