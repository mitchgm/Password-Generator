// Assignment code here
var specialCharactersArray = [
    '',
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    '()',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    '[',
    ']',
    '^',
    
];

var generatePassword = function() {
    var passwordLength = window.prompt('How many characters would you like your password to be? ');

        passwordLength = passwordLength.toLocaleLowerCase();

        if (passwordLength > 7 && passwordLength < 128) {
           var passwordLowChar = window.prompt('What character types would you like in the password? Would you like to include lowercase letters? Type yes or no. ');
           passwordLowChar = passwordLowChar.toLocaleLowerCase();
           if (passwordLowChar === "yes") {

           }

            else if (passwordLowChar === "no") {

            }  

            else  {

            }
            
            
        }

        else {
            window.alert("You need to enter a valid password length between 8 and 128 characters")
            
        }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);