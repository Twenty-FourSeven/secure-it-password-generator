// variables

var CharLength = 8;

//arrays to store possible symbols and letters for password when password is generated

var selectArray = [];

var numbersArray = [];


//special characters, lowercase, uppercase, and numbers available for employee to choose from
var specialChar = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  "'",
  ".",
];

var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// call the generate password button to work
function generatePassword() {
  var password = "";
  var tempCharacters = "";

    //ask employee to choose a password 8-128 characters in length
  var pwLength = prompt(
    "How long would you like your password to be? Please choose a value between 8 and 128 characters."
  );






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
