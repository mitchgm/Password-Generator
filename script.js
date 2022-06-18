// Assignment code here
var specialCharactersArray = [
    
    "!",
    "'",
    "#",
    "$",
    "%",
    "&",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    
];
var userChar = [];

var numberArray = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ];
var lowCharArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var highCharArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var passwordLength, passwordLowChar, passwordHighChar, passwordNum, passwordSpecial;
var  thePassword = "";


function generatePassword () {
    userChar = [];
    passwordLength = 0
    getPasswordLength ();
    getPasswordLowChar ();
    getPasswordHighChar ();
    getPasswordNum ();
    getPasswordSpecial ();
    getThePassword ();
        
};

// start of password length function
function getPasswordLength() {
    passwordLength = window.prompt("How many characters would you like your password to be? ");
       

        if (passwordLength > 7 && passwordLength < 128) {
            
           return passwordLength = passwordLength;
           
        }

        else {
            window.alert("You need to enter a valid password length between 8 and 128 characters")
            generatePassword();
        }

};
// end of generate password function

// start of lowercase function
function getPasswordLowChar() {
    passwordLowChar = window.prompt("What character types would you like in the password? Would you like to include lowercase letters? Type yes or no. ");
   passwordLowChar = passwordLowChar.toLocaleLowerCase();
   if (passwordLowChar === "yes") {
    userChar.push(lowCharArray);
    
     return passwordLowChar = true;
   }

    else if (passwordLowChar === "no") {
        return passwordLowChar = false;
       
    }  

    else  {
        window.alert("Please enter YES or NO. ")
        getPasswordLowChar ();
    }
     
};
// end of lowercase function


// start of uppercase function
function getPasswordHighChar() {
    passwordHighChar =  window.prompt("Would you like to include uppercase letters? Type yes or no. ");
    passwordHighChar = passwordHighChar.toLocaleLowerCase();
    if (passwordHighChar === "yes") {
        userChar.push(highCharArray);
        
     return passwordHighChar = true;
    }
 
     else if (passwordHighChar === "no") {
         return passwordHighChar = false;
        
     }  
 
     else  {
         window.alert("Please enter YES or NO. ")
         getPasswordHighChar ();
     }

};
// end of uppercase function


// start of number function
function getPasswordNum () {
    passwordNum = window.prompt("Would you like to include numbers? Type yes or no. ");
    passwordNum = passwordNum.toLocaleLowerCase();
    if (passwordNum === "yes") {
        userChar.push(numberArray);
        return passwordNum = true;
    }

    else if (passwordNum === "no") {
        return passwordNum = false;
    }

    else {
        window.alert("Please enter YES or NO. ")
         getPasswordNum ();
    }
};
// end of number function


// start of special character function
function getPasswordSpecial () {
    passwordSpecial = window.prompt("Would you like to include special characters? Type yes or no. ");
    passwordSpecial = passwordSpecial.toLocaleLowerCase();
    if (passwordSpecial === "yes") {
        userChar.push(specialCharactersArray)
        return passwordSpecial = true;
    }

    else if (passwordSpecial === "no") {
        return passwordSpecial = false;
    }

    else {
        window.alert("Please enter YES or NO. ")
         getPasswordSpecial ();
    }

};

// start for loop get password function
function getThePassword () {
    userChar = userChar.flat();
 
    for (var i = 0; i < passwordLength; i++) {
      
        thePassword += (userChar[Math.floor(Math.random() * userChar.length)]);
       

    }
    
   passwordLength = 0;
  
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  window.alert("Your secure password is: " + thePassword)
    thePassword = "";
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

