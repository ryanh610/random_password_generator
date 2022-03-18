var generateBtn = document.querySelector("#generate");

var passLength = "";
var lowerCaseValue = "";
var upperCaseValue = "";
var numberValue = "";
var specialCharacterValue = "";
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = [1,2,3,4,5,6,7,8,9,0];
var specialCharacters = ["!","@","#","$","%","^","&","*","?",">","<"];
var passCriteria = ["lowerCaseValue", "numbers"];
var numbersArray = ["0","1"];

function writePassword() {
  if (askCriteria()) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== undefined) {
    passwordText.value = password;
  };
  };
};

function askCriteria() {

  passLength = prompt("Please enter a password length between 8-128 characters: ");
  if (passLength == null) {
    return false;
  };
  if (passLength < 8 || passLength > 128) {
    alert("You have selected a number outside of the allowed password length");
    passLength = prompt("Please enter a password length between 8-128 characters: ");
    return false;
  };

  lowerCaseValue = confirm("Do you want the password to include lowercase?");
  upperCaseValue = confirm("Do you want the password to include uppercase?");
  numberValue = confirm("Do you want the password to include numbers?");
  specialCharacterValue = confirm("Do you want the password to include special characters?");
  return true
};

function generatePassword() {
  var passArray = [];
  var password = "";
    if (lowerCaseValue === false && upperCaseValue === false && numberValue === false && specialCharacterValue === false) {
      alert("You must select at least one character type");
    }
  
    else {
      if (lowerCaseValue === true){
      passArray.push(lowerCaseCharacters)
      };
      if (upperCaseValue === true) {
      passArray.push(upperCaseCharacters)
      };
      if (numberValue === true) {
      passArray.push(numberCharacters)
      };
      if (specialCharacterValue === true) {
        passArray.push(specialCharacters)
      };
      for (var i = 0; i <= passLength; i++) {
        var randomPool = Math.floor(Math.random() * passArray.length);
        var randomIndex = Math.floor(Math.random() * passArray[randomPool].length);
        password += passArray[randomPool][randomIndex];
      };
      return password;
  };
};
generateBtn.addEventListener("click", writePassword);
