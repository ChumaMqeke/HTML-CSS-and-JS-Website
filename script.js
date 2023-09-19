const header = document.querySelector("header");


window.addEventListener("scroll", function() {
header.classList.toggle("sticky", window.scrollY > 80)
}); 

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
};

window.scroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('open')
}


 // Get references to HTML elements
 const textToTypeElement = document.getElementById("textToType");
 const userInputElement = document.getElementById("userInput");
 const scoreElement = document.getElementById("score");
 
 let score = 0;
 
 // Generate initial random text
 let currentText = generateRandomText();
 textToTypeElement.textContent = currentText;
 
 // Function to generate random text
 function generateRandomText() {
     const texts = ["This is a sample text.", "Type this quickly.", "Keep typing!", "Test your skills."];
     const randomIndex = Math.floor(Math.random() * texts.length);
     return texts[randomIndex];
 }
 
 // Function to update the score
 function updateScore() {
     score++;
     scoreElement.textContent = score;
 }
 
 // Event listener for user input
 userInputElement.addEventListener("input", function () {
     const userInput = userInputElement.value;
     
     if (currentText.startsWith(userInput)) {
         if (currentText === userInput) {
             // User successfully typed the current text
             updateScore();
             currentText = generateRandomText();
             textToTypeElement.textContent = currentText;
             userInputElement.value = "";
         }
     } else {
         // User made a mistake, you can handle this as needed
     }
 });
        
        
  