/* This file contains the console program for chapter 2 reading review exercise -
    Prints the numbers 1-100 to the console unless:
        The number is divisible by 3 -Then "Hee!" is printed to the console,
        The number is divisible by 5 -Then "Haw!" is printed to the console,
        The number is divisible by both 3 and 5 -Then "Hee Haw!" is printed to the console,
        Otherwise, the current number is printed.
 */
for (let i = 1; i <= 100; i++) {
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
