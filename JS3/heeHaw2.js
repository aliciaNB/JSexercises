/* This file contains the console program for chapter 3 reading review exercise -
   Function prints the numbers 1 to the number provided by the user to the console unless:
        The number is divisible by 3 -Then "Hee!" is printed to the console,
        The number is divisible by 5 -Then "Haw!" is printed to the console,
        The number is divisible by both 3 and 5 -Then "Hee Haw!" is printed to the console,
        Otherwise, the current number is printed.

   If an invalid value is passed to the function an error is printed to the console instead.
 */
function heeHaw(number) {
    //check if number is greater than 1 and actually a number
    if (number > 1 && !isNaN(number)) {
        for (let i = 1; i <= number; i++) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                console.log("Hee Haw!");
            } else if (i % 3 === 0) {
                console.log("Hee!");
            } else if (i % 5 === 0) {
                console.log("Haw!");
            } else {
                console.log(i);
            }
        }
    } else { //otherwise, print an error to the console
        console.log("Error: Please enter a numeric value greater than one.");
    }
}

//test the function
console.log("Pass in a numeric number 25:");
heeHaw(25);

console.log("Pass in a numeric number -10:");
heeHaw(-10);

console.log("Pass in a string number 15:");
heeHaw("15");

console.log("Pass in a String word:");

heeHaw("word");



