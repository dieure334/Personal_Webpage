//Function to toggle Dark Mode
function darkMode() {

    //Access HTML Body Element
    var bodyElement = document.body;

    //Change theme
    bodyElement.classList.toggle("dark_mode");
}

//Call function when clicked
document.getElementById("btn").addEventListener("click", darkMode);