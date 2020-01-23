/*
Ekampreet Kaur
Jan 22, 2020
This is recursive function contains Heehaw takes a number as input,
and print the number 1 from that number with same rules as ch 2.
 */

function heeHaw(num) {
    if(isNaN(num) || num < 1) {
        console.log("Invalid Input");
    } else {
        heeHawRecursive(1, num);
    }
}

// recursive function
function heeHawRecursive(startingNum, endNum) {
    if(startingNum <= endNum) {
        if(startingNum % 3 === 0 && startingNum % 5 !== 0) {
            console.log("Hee!");
        } else if(startingNum % 3 !== 0 && startingNum % 5 === 0) {
            console.log("Haw!");
        } else if(startingNum % 3 === 0 && startingNum % 5 === 0) {
            console.log("Hee Haw!");
        } else {
            console.log(startingNum);
        }
        return heeHawRecursive(++startingNum, endNum);
    } return;
}

// test input
console.log("Test Input: 20");
heeHaw(20);
console.log("-----------------------------");
console.log("Test Input: 200");
heeHaw(200);
console.log("-----------------------------");
console.log("Test Input: -5");
heeHaw(-5);
console.log("-----------------------------");
console.log("Test Input: 1");
heeHaw(1);
console.log("-----------------------------");
console.log("Test Input: Don");
heeHaw("Don");
console.log("-----------------------------");