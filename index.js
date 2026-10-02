const readlineSync = require('readline-sync');

let isValidCharacterCount = false;
let isValidUpperCaseCharacterCount = false;
let isValidNumberCount = false;

while (!(isValidCharacterCount && isValidUpperCaseCharacterCount && isValidNumberCount)) {
    console.log("Please create a password that contains:");
    console.log("- at least 8 characters");
    console.log("- at least one uppercase letter");
    console.log("- at least one number");
    let input = readlineSync.question("Password: ");
    
    // Logic for Length of Password:
    let characterCount = input.length;
    isValidCharacterCount = characterCount >= 8;
    
    // Logic for Upper Case Letter Inclusion:
    let upperCaseCharacterCount = 0;
    for (const char of input) {
        if (char === char.toUpperCase()) {
            upperCaseCharacterCount = upperCaseCharacterCount + 1; 
        }
    }
    
    isValidUpperCaseCharacterCount = upperCaseCharacterCount >= 1;
    
    // Logic for Number Count Requirement:
    let numberCount = 0;
    for (const char of input) {
        if (Number.isInteger(Number(char))) {
            numberCount = numberCount + 1;
        }
    }

    isValidNumberCount = numberCount >= 1; 

    if ((isValidCharacterCount && isValidUpperCaseCharacterCount && isValidNumberCount) === false) {
        console.log("Sorry, this password does not meet the requirements.");
    }
        

}

