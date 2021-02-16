// Assignment code here
//array of possible letters
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
//array of possible numbers 
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//upper case letters
var upperLetters = lowerLetters.join().toUpperCase().split(',');
//array of special characters
var specialCharacters = ['!','#','$','%','&','(',')','*','+', '-', '.','/',':',';','<','=','>','?','@'];
//how long should the password length be
var passLength;

     //create a prompt to get user input on character types they would like
// window.confirm("Would you like to have lower case letters in your password?");
// window.confirm("Would you like to have upper case letters in your password?");
// window.confirm("Would you like to have numbers in your password?");
// window.confirm("Would you like to have special characters in your passwords?");

var generatePassword = function() {
    passLength = parseInt(window.prompt("How long would you like your password to be? Choose a number between 8 and 128."));
        if (passLength > 128 || passLength < 8) {
            alert("Your input is invalid. Please input a number between 8 and 128");
            console.log(passLength);
        };
};

generatePassword();

//if they say no to function on adding charecters then call function again

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