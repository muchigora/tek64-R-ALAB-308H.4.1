/******************************************************************************
 * Copyright 2023 by Muchi-Gora Perscholas Bootcamp Project 
 * Powered by TEKSystems                                 *
 * R-ALAB 308H.4.1 - JavaScript Conditionals, Loops, Objects, and Arrays
 *****************************************************************************/

/**
 * Question 1
 * ----------------------------------------------------------------
 * Create a variable called fourthItem and assign it the value of the fourth item in the horror array ('Ghostface'). Then console.log fourthItem to see the output.
 */

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky']
const fourthItem = horror[3]
// console.log(fourthItem)


/**
 * Question 2
 * ----------------------------------------------------------------
 * Use a built-in JavaScript method to add another show to the netflixShows array. Then log your updated array to the console.
 */

const netflixShows = ["Orange in the New Balck", "Black Mirror", "Chewing Gum"];
netflixShows.push("New Balck");
// console.log(netflixShows);

/**
 * Question 3
 * ----------------------------------------------------------------
 * Using a for loop, decrement countDown by one each time the loop runs until it equals 0, making use of looping functionality instead of logging each number separately.
 */

let countDown = 10;
for (let i = countDown; i > 0; i--) {
    countDown = countDown - 1;
}
// console.log(countDown);

let count = 10;
for (let i = 0; i < 10; i++) {
    count = count - i;
    if (count === 0) {
        break;
    }
    
}
// console.log(count);

//solution provied
let number = 10;
for(let i=1; i<=10; i++){
    number --;
}
// console.log(number);

/**
 * Question 4
 * const synonyms = ['fantastic', 'wonderful', 'great'];
 * const greetings = [];
 * 
 * 1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format "Have a [synonym]
 * day!" into the greetings array.
 * 
 * 2. Use a second for loop to iterate through the greetings and console.log() each greetings.
 */

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];
for (let i = 0; i < synonyms.length; i++) {
   let greet = greetings.push(`Have a ${synonyms[i]} day!`);
}
// console.log(greetings);

for (let i=0; i<greetings.length; i++){
    // console.log(greetings[i]);
}


/**
 * Question 5
 * ----------------------------------------------------------------
 * const firstNames = ["Jon", "Arya", "Jamie"];
 * const lastNames = ["Snow", "Stark", "Lannister"];
 * const places = ["The Wall", "Winterfell", "Kings Landing"];
 * ----------------------------------------------------------------
 *  Loop through your arrays and store the following strings in the bios array:
 * 'My name is Jon Snow and I am from The Wall'
 * 'My name is Arya Stark and I am from Winterfell'
 * 'My name is Jamie Lannister and I am from Kings Landing'
 * */

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];
const bios = [];
for (let i = 0; i < firstNames.length; i++) {
    bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`);
}
// console.log(bios);


/**
 * Question 6
 * ----------------------------------------------------------------
 * const increaseByTwo = [1, 2, 3, 4, 5, 6, 7];
 * You are given an array of five increaseByTwo called increaseByTwo. Use a for loop to iterate through the array and increase each increaseByTwo by two.
 * */


const increaseByTwo = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < increaseByTwo.length; i++) {
    increaseByTwo[i] = increaseByTwo[i] + 2;
}
console.log(increaseByTwo);
