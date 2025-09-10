let lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
let lowerCase = true
let upperCaseString = lowerCaseString.toUpperCase();
let upperCase = true
let numberString = '1234567890'
let numbers = true
let specialCharString = '!.?_=+*-#:;,'
let specialCharacters = true
let length = 20

function generatePassword(length){
    let password = ''
    let choices = (lowerCase ? lowerCaseString : '') + (upperCase ? upperCaseString : '') + (numbers ? numberString : '') + (specialCharacters? specialCharString : '')
    for(let i = 0; i< length; i++){
        let randomIdx = Math.round(Math.random()*choices.length)
        password += choices[randomIdx]
    }
    return password
}