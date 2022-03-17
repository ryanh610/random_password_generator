// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var passLength = ""
var lowerCaseValue = ""
var upperCaseValue = ""
var numberValue = "";
var specialCharacterValue = "";
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberCharacters = [1,2,3,4,5,6,7,8,9,0]
var specialCharacters = ["!","@","#","$","%","^","&","*","?",">","<"]
var passCriteria = ["lowerCaseValue", "numbers"];
var numbersArray = ["0","1"];

function writePassword() {

  askCriteria();

  if (lowerCaseValue === false && upperCaseValue === false && numberValue === false && specialCharacterValue === false) {
    alert("You must select at least one character type");
    askCriteria();
  }
  console.log(passLength);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function askCriteria() {
  passLength = prompt("Please enter a password length between 8-128 characters: ");
  if (passLength < 8 || passLength > 128) {
    alert("You have selected a number outside of the allowed password length");
    passLength = prompt("Please enter a password length between 8-128 characters: ");
  };

  lowerCaseValue = confirm("Do you want the password to include lowercase?");
  upperCaseValue = confirm("Do you want the password to include uppercase?");
  numberValue = confirm("Do you want the password to include numbers?");
  specialCharacterValue = confirm("Do you want the password to include special characters?");
  console.log("lowerCaseValue: "+lowerCaseValue);
  console.log("upperCaseValue: "+upperCaseValue);
  console.log("numberValue: "+numberValue);
  console.log("specialCharacterValue: "+specialCharacterValue);
};

function generatePassword() {
    passCriteria[0]
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate each character at random pulling from trues in the array.

//array for each value type 
//select from array at random












// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
