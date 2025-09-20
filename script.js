let lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
let lowerCase = true
let upperCaseString = lowerCaseString.toUpperCase();
let upperCase = true
let numberString = '1234567890'
let numbers = true
let specialCharString = '!.?=+*-:;,'
let specialCharacters = true

const slider = document.getElementById("slider");
const lengthDisplay = document.getElementById("length");

slider.min = 5; 
slider.max = 35;     
slider.value = 20;   
lengthDisplay.textContent = "Length : " + slider.value;

slider.addEventListener("input", () => {
  lengthDisplay.textContent = "Length : " + slider.value;
  slider.style.scale = 1.01
  setTimeout(function(){
    slider.style.scale = 1.00
}, 100);

});



function generatePassword(length){
    let password = ''
    let choices = (lowerCase ? lowerCaseString : '') + (upperCase ? upperCaseString : '') + (numbers ? numberString : '') + (specialCharacters? specialCharString : '')
    if(lowerCase || upperCase || numbers || specialCharacters){
      for(let i = 0; i< length; i++){
        let randomIdx = Math.floor(Math.random()*choices.length)
        password += choices[randomIdx]
    } 
    }
    else {password = "No Characters defined!"}
    
    return password
}




function toggleOptions(option){
  const button = document.getElementById(option);
  switch (option){
    case "lower-case":
      lowerCase = !lowerCase
      button.style.backgroundColor = lowerCase ? '#6F6866' : '#4f4847';
      break;
    case "upper-case":
      upperCase = !upperCase
      button.style.backgroundColor = upperCase ? '#6F6866' : '#4f4847';
      break;
    case "numbers":
      numbers = !numbers
      button.style.backgroundColor = numbers ? '#6F6866' : '#4f4847';
      break;
    case "special-chars":
      specialCharacters = !specialCharacters
      button.style.backgroundColor = specialCharacters ? '#6F6866' : '#4f4847';
      break;
  }

  console.log("lower " + lowerCase)
  console.log("upper " + upperCase)
  console.log("nums " + numbers)
  console.log("special " + specialCharacters)
}

function generator(){
  const password_field = document.getElementById("password");
  let password  = generatePassword(slider.value);
  password_field.value = password
  console.log(password)
}


