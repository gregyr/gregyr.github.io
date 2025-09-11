let lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
let lowerCase = true
let upperCaseString = lowerCaseString.toUpperCase();
let upperCase = true
let numberString = '1234567890'
let numbers = true
let specialCharString = '!.?_=+*-#:;,'
let specialCharacters = true

const slider = document.getElementById("slider");
const lengthDisplay = document.getElementById("length");

slider.min = 5; 
slider.max = 40;     
slider.value = 22;   
lengthDisplay.textContent = "Length : " + slider.value;

slider.addEventListener("input", () => {
  lengthDisplay.textContent = "Length : " + slider.value;
});



function generatePassword(length){
    let password = ''
    let choices = (lowerCase ? lowerCaseString : '') + (upperCase ? upperCaseString : '') + (numbers ? numberString : '') + (specialCharacters? specialCharString : '')
    for(let i = 0; i< length; i++){
        let randomIdx = Math.round(Math.random()*choices.length)
        password += choices[randomIdx]
    }
    return password
}

