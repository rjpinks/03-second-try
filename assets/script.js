// Assignment code here
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var bigAlphabet = alphabet.toUpperCase();
var numbers = "0123456789";
var specialCharacters = "!@$%^&*";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
var numberDesired = prompt("please select number of characters desired (1-126)");
var alphabetQ = prompt("do you want lower case letters? yes/no");
var bigAplhabetQ = prompt("do you want upper case letters? yes/no");
var numbersQ = prompt("do you want numbers? yes/no");
var specialCharactersQ = prompt("do you want special characters? yes/no");
var numberDesiredNumeric = Number(numberDesired);

function writePassword () {
  
}

generateBtn.addEventListener("click", writePassword);