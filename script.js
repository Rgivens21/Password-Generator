//This generator should provide a password with 8-128 characters based on user specifications upon being prompted

// Assignment Code and added eventlistener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);




var randomNumber = ["0", "1", "2", "3", "4", "5", "6", ,"7", "8", "9"];
var randomSpecialChar = ["!", "#", "$","*", "+", "-", "&", "%", ">", "<", "/"];
var randomLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



var passwordLength = "";
var confirmSpecial;
var confirmLower;
var confirmUpper;
var chosenNumber;
var chosenCharacters;



function generatePassword() {
passwordLength = prompt("How many characters would you like there to be in your password?");

if (passwordLength < 8 || passwordLength > 128) {
  alert("Your password must contain between 8 and 128 characters. Please try again!");
  generatePassword();
} else if (passwordLength >= 8 || passwordLength <= 128) {
  alert("Your password will contain " + passwordLength + " characters.");
  var confirmNumber;

} else if (passwordLength === NaN) {
   passwordLength = prompt("How many characters would you like there to be in your password?");
}

confirmNumber = confirm("Click OK if you would like to include numbers in your password.");
  if (confirmNumber) {
    alert ("Your password will contain numbers!");
    var confirmSpecial;
  } else { 
    var confirmSpecial;
    alert("Your password will not contain numbers.");
  }

  confirmSpecial = confirm("Click OK if you would like to include special characters in your password.")
  if (confirmSpecial) {
    alert("Your password will contain special characters!");
    var confirmLower;
  }  else {
    alert("Your password will not contain special characters");
    var confirmLower;
  }

  confirmLower = confirm("Click OK if you would like to include lower case letters in your password.")
  if (confirmLower) {
    alert("Your password will contain lower case letters!");
    var confirmUpper;
  } else {
    alert("Your password will not contain lower case letters.");
    var confirmUpper;
  }

  confirmUpper = confirm("Click OK if you would like to include upper case letters in your password.")
  if (confirmUpper) {
    alert("Your password will contain upper case letters!");
  } else {
    alert("Your password will not include upper case letters.");
  }

 



var selectedChar = []
      
function passwordGen() {if(confirmSpecialChar == true) {
  selectedChar = selectedChar.concat(number)
}
}
function passwordGen2() {if(confirmNumericCharacter == true) {
  selectedChar = selectedChar.concat(specialChar)
}
} 
function passwordGen3() {if (confirmLowerCase == true) {
  selectedChar = selectedChar.concat(lowerCase)
}
}
function passwordGen4() {if (confirmUpperCase == true) {
  selectedChar = selectedChar.concat(upperCase)
}
}
console.log(selectedChar)


var newPassword = ""

for (var i = 0; i < passwordLength.length; i++) {
  newPassword = newPassword + selectedChar[Math.floor(Math.random() * selectedChar.length)];
    console.log(newPassword);
}
return newPassword;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


















