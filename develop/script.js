// Assignment code here
//array of possible letters
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
//array of possible numbers 
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//upper case letters
var upperLetters = lowerLetters.join().toUpperCase().split(',');
//array of special characters
var specialCharacters = ['!','#','$','%','&','(',')','*','+', '-', '.','/',':',';','<','=','>','?','@'];
//how long should the password length be
var passLength;

var makeRandom = function(a) {
    var possibleNumbers = Math.floor(Math.random() * a.length);
   return a[possibleNumbers];

}

var UserPrompt = function() {
    passLength = parseInt(prompt("How long would you like your password to be? Choose a number between 8 and 128."));
       //if the input is NOT between 8 and 128 then return error message and return to 
        if (passLength > 128 || passLength < 8) {
            alert("Your input is invalid. Please input a number between 8 and 128");
            return UserPrompt();
        }
        // if input is null or NaN alert input is incorrect
        if(isNaN(passLength) === true) {
            alert("Your input is invalid. Please input a number between 8 and 128");
          return UserPrompt();
        } 
        var special = confirm("Would you like to have special characters in your passwords?");
        var upper = confirm("Would you like to have upper case letters in your password?");
        var lower = confirm("Would you like to have lower case letters in your password?");
        var numbers = confirm("Would you like to have numbers in your password?");

        //if the input is between 8 and 128 then store input in userResponse
        var userResponse = {
            passLength: passLength,
            special: special,
            upper: upper,
            lower: lower,
            numbers: numbers
        }
        return userResponse;
    };

    var generatePassword = function() {
        //get answers from userprompt function
        var userOption = UserPrompt();
        var possibleOptionsArr = [];
        var newPassword = [];
        //if prompt is true add special to possible options array
        if (userOption.special) {
            possibleOptionsArr = possibleOptionsArr.concat(specialCharacters);
        }
        //if prompt is true add uppers array to possible options array
        if (userOption.upper) {
            possibleOptionsArr = possibleOptionsArr.concat(upperLetters);
        }
        //if prompt is true add lower to possible options array
        if (userOption.lower) {
            possibleOptionsArr = possibleOptionsArr.concat(lowerLetters);
        }
        //if prompt is true add numbers to possible options array
        if (userOption.numbers) {
            possibleOptionsArr = possibleOptionsArr.concat(numbersArr);
        }
        //depending on input length then get x amount of elements from possible options array and store in newpassword array
        for (var i=0; i < userOption.passLength; i++) {
            var actualReturnValue = makeRandom(possibleOptionsArr);
            newPassword.push(actualReturnValue);
        }
        var joinedPassword = newPassword.join('');
        console.log(joinedPassword);
        return joinedPassword;
        
    };
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);