//strings to be used in password generation
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var bigAlphabet = alphabet.toUpperCase();
var numbers = "0123456789";
var specialCharacters = "!@$%^&*";
var questionList = ""

//html elements
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var wrapperEl = document.querySelector(".wrapper");

//prompts that collect user data and associated if statements that append the choice to the page
var numberDesired = prompt("please select number of characters desired (8-126)");
var alphabetQ = prompt("do you want lower case letters? yes/no");
var bigAlphabetQ = prompt("do you want upper case letters? yes/no");
var numbersQ = prompt("do you want numbers? yes/no");
var specialCharactersQ = prompt("do you want special characters? yes/no");
var numberDesiredNumeric = Number(numberDesired);

//funtions used in the app
function selectionAppender () {
  if (numberDesiredNumeric > 7 && numberDesiredNumeric < 127) {
    var newEl = document.createElement("p");
    var newText = document.createTextNode(numberDesired + " characters desired");
    newEl.appendChild(newText);
    wrapperEl.appendChild(newEl);
  }
  if (alphabetQ === "yes" || alphabetQ === "Yes") {
    var newEl = document.createElement("p");
    var newText = document.createTextNode("Lowercase selected");
    newEl.appendChild(newText);
    wrapperEl.appendChild(newEl);
  } else {
    var newEl = document.createElement("p");
    var newText = document.createTextNode("Lowercase not selected");
    newEl.appendChild(newText);
    wrapperEl.appendChild(newEl);
  }
  if (bigAlphabetQ === "yes" || bigAlphabetQ === "Yes") {
    var newEl = document.createElement("p");
    var newText = document.createTextNode("Uppercase selected");
    newEl.appendChild(newText);
    wrapperEl.appendChild(newEl);
  } else {
    var newEl = document.createElement("p");
    var newText = document.createTextNode("Uppercase not selected");
    newEl.appendChild(newText);
    wrapperEl.appendChild(newEl);
  }
  if (numbersQ === "yes" || numbersQ === "Yes") {
    var newEl = document.createElement("p");
    var newText = document.createTextNode("Numbers selected");
    newEl.appendChild(newText);
    wrapperEl.appendChild(newEl);
  } else {
    var newEl = document.createElement("p");
    var newText = document.createTextNode("Numbers not selected");
    newEl.appendChild(newText);
    wrapperEl.appendChild(newEl);
  }
  if (specialCharactersQ === "yes" || specialCharactersQ === "Yes") {
    var newEl = document.createElement("p");
    var newText = document.createTextNode("Special Characters selected");
    newEl.appendChild(newText);
    wrapperEl.appendChild(newEl);
  } else {
    var newEl = document.createElement("p");
    var newText = document.createTextNode("Special Characters not selected");
    newEl.appendChild(newText);
    wrapperEl.appendChild(newEl);
  }
}

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
  } else {
    passwordText.value = "you didn't enter a correct number. please refresh and try again";
  }

}

generateBtn.addEventListener("click", writePassword);
selectionAppender();