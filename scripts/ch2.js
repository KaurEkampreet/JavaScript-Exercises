/*
 * Ekampreet Kaur
 * 01/15/2020
 * javascript-assignment.js
 * This program prints a number between 1 to 100
 * is either divisible by 3 or 5 and return a number or a statement.
 */

var i;
for(i = 1; i <= 100; i++) {
    if(i % 3 == 0) {

        console.log("Hee!")

    } else if(i % 5 == 0) {

        console.log("Haw!")

    } else if(i % 3 === 0 && i % 5 === 0) {

        console.log("Hee Haw!");

    } else {

        console.log(i);
    }
}
