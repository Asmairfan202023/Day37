// Question111:Use an if-else-if chain to categorize a person's age group (child, teenage, adult).
import promptSync from 'prompt-sync';
let prompt = require('prompt-sync')();
let age = prompt("Please enter your age:");
if (age <= 0) {
console.log("Invalid input");
} else if (age >= 1 && age <= 5) {
  console.log("Infant");
} else if (age >= 6 && age <= 10) {
    console.log("Child");
} else {
      console.log("Adult");
 }