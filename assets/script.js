//strings to be used in password generation
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var bigAlphabet = alphabet.toUpperCase();
var numbers = "0123456789";
var specialCharacters = "!@$%^&*";
var questionList = ""

//html elements
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

//prompts that collect user data
var numberDesired = prompt("please select number of characters desired (8-126)");
var alphabetQ = prompt("do you want lower case letters? yes/no");
var bigAlphabetQ = prompt("do you want upper case letters? yes/no");
var numbersQ = prompt("do you want numbers? yes/no");
var specialCharactersQ = prompt("do you want special characters? yes/no");
var numberDesiredNumeric = Number(numberDesired);


function writePassword () {
  if (alphabetQ === "yes" || alphabetQ === "Yes") {
    questionList = questionList + alphabet;
  }
  if (bigAlphabetQ === "yes" || bigAlphabetQ === "Yes") {
    questionList = questionList + bigAlphabet;
  }
  if (numbersQ === "yes" || numbersQ === "Yes") {
    questionList = questionList + numbers;
  }
  if (specialCharactersQ === "yes" || specialCharactersQ === "Yes") {
    questionList = questionList + specialCharacters;
  } 
  if ( numberDesiredNumeric > 7 && numberDesiredNumeric < 127) {
    var passGen = "";
    for (let index = 0; index < numberDesiredNumeric; index++) {
      var rando = Math.floor(Math.random() * questionList.length);
      passGen = passGen + questionList[rando];
    }
  console.log(passGen);
  passwordText.value = passGen;
  }

}

generateBtn.addEventListener("click", writePassword);