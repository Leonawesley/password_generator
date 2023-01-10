// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

function getPasswordOptions() {
  let passwordArray = [];
  let passwordLength = 0;
  alert("Enter the length of your password (length between 10 and 64)");
  //To verify the password length
 if((passwordArray.passwordLength = prompt()) >= 10 && passwordArray.passwordLength <= 64){
    passwordArray = selectCharacterType(passwordArray);
    //To verify atleast one character type is selected
    while(((passwordArray.lowerCase) || (passwordArray.upperCase) || (passwordArray.numbers) || (passwordArray.specialChar )) == false){
      alert("Please select atleast one character type");
      passwordArray = selectCharacterType(passwordArray);
    }
    return passwordArray;
  }
  else{
    alert("Please enter the password length between 10 and 64 ");
    getPasswordOptions();
  }
  //console.log(passwordArray.passwordLength);
  
}

function selectCharacterType(passwordArray) {
  passwordArray.lowerCase = confirm("Do you want to include lowercase characters in your password");
  passwordArray.upperCase = confirm("Do you want upper case characters in your password");
  passwordArray.numbers = confirm("Do you want numbers in your password");
  passwordArray.specialChar = confirm("Do you want special characters in your password");
  console.log(passwordArray);
  return passwordArray;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomGenerate = Math.floor(Math.random() * arr.length);
  return arr[randomGenerate];
}


// Function to generate password with user input

function generatePassword(passwordItems) {
  console.log(passwordItems);
  let finalPasswordOptions = [];
  let generatedPassword = "";
  if(passwordItems.lowerCase){
    finalPasswordOptions = finalPasswordOptions.concat(lowerCasedCharacters);
  }
  if(passwordItems.upperCase){
    finalPasswordOptions = finalPasswordOptions.concat(upperCasedCharacters);
  }
  if(passwordItems.numbers){
    finalPasswordOptions = finalPasswordOptions.concat(numericCharacters);
  }
  if(passwordItems.specialChar){
    finalPasswordOptions = finalPasswordOptions.concat(specialCharacters);
  }
  //console.log(parseInt(passwordItems.passwordLength));
  for(let i=0; i < parseInt(passwordItems.passwordLength); i++){
    generatedPassword += getRandom(finalPasswordOptions);
  }
  console.log(generatedPassword)
  return generatedPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let passwordOptions = getPasswordOptions();
  let password = generatePassword(passwordOptions);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);