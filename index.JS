const button = document.querySelector('button')

function changeText(){
let userInput = document.querySelector('.W');
userInput.textContent = document.getElementById("FS").value

} 
button.addEventListener('click', changeText)
