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
// console.log(increaseByTwo);

/**
 * Question 7
 * ----------------------------------------------------------------
 * Use a while loop to increment count by 2 on each repetition of the block of code. 
 * Run the code block of your while loop until count is 8.
 *
 * */

let count2 = 2;
while(count2 < 8){
    count2 = count2 + 2;
    // console.log(count2);
}

/**
 * Question 8
 * ----------------------------------------------------------------
 * Initialize a variable addThis to 0 and a variable sum to 0. 
 * Use a while loop to repeat a code block as long as addThis is less than 10. 
 * In the code block, add the value of addThis to sum, then increment addThis by 1. 
 * After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.
 */

let addThis = 0;
let sum = 0;
while(addThis < 10){
    sum = sum + addThis;
    // console.log(`While addThis is: ${addThis}, sum is ${sum}`);
    addThis++;    
}

/**
 * Question 9
 * ----------------------------------------------------------------
 * Use an if statement to check if num is greater than 100. 
 * If num is greater than 100, reassign the value of final to null. 
 * Otherwise, set final to be two times the value of num.
 * */
let num = 20;
if(num > 100){
    final = null;
}else{
    final = num * 2;
}
// console.log(final);

/**
 * Question 10
 * ----------------------------------------------------------------
 * Use a loop to iterate through the numbers 1 through 16. 
 * Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, 
 * "buzz" in place of numbers divisible by 5, 
 * and "fizzbuzz" in place of numbers divisible by both 3 and 5.
 * Log fb to the console to see the output.
 */

let fb = [];
for(let i = 1; i <= 16; i++){
    if(i % 3 === 0 && i % 5 === 0){
        fb.push("fizzbuzz");
    }else if(i % 3 === 0){
        fb.push("fizz");
    }else if(i % 5 === 0){
        fb.push("buzz");
    }else{
        fb.push(i);
    }
}
// console.log(fb)


/**
 * Question 11
 * ----------------------------------------------------------------
 * const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
 * Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.
 * */

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
for (let i = 0; i < timesTenIfOverFive.length; i++) {
    if(timesTenIfOverFive[i] >= 5){
        timesTenIfOverFive[i] = timesTenIfOverFive[i] * 10;
    }else{
        timesTenIfOverFive[i]
    }
}
// console.log(timesTenIfOverFive);

/**
 * Question 12
 * ----------------------------------------------------------------
 * const checkObj = {
 * oddNum: 1,
 *   evenNum: 2,
 *   foundNum: 5,
 *   randomNum: 18
 * }
 * 
 * You are provided with an object called checkObj. 
 * Using a for... in loop, determine if the object contains the property foundNum. 
 * If it exists, reassign the value of found to 1.
 * */

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
}
// console.log(checkObj);

// for (let key in checkObj) {
//     if(checkObj.hasOwnProperty(key)){
//         if(checkObj[key] === checkObj.foundNum){
//             checkObj.found = 1;
//         }
//     }
// }
let found = 0;
for(key in checkObj) {
    if(key === "foundNum"){
        checkObj.found = 1;
    }
}
// console.log(checkObj);

/**
 * Question 13
 * ----------------------------------------------------------------
 *You are provided with an empty array called objToArray. Using a for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2.
 * */

// const objToArray = [];
// for (let key in checkObj) {
//     if(checkObj[key] >= 2){
//         objToArray.push(checkObj[key]);
//     }    
// }
// console.log(objToArray);

/**
 * Question 14
 * ----------------------------------------------------------------
 * This time, use the Object.values() method to return an array of checkObj's values, 
 * and assign this array to a constant called objToArray. 
 * Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. 
 * If so, reassign the value of divBy6 to true. * 
 * */

const objToArray = Object.values(checkObj);
for (let i = 0; i < objToArray.length; i++) {
    if(objToArray[i] % 6 === 0){
        objToArray[i] = true;
    }
}
// console.log(objToArray);

/**
 * Question 15
 * ----------------------------------------------------------------
 *You are provided with an empty array called nestedArr. 
 Using a for loop starting at index 0, add 5 subarrays to nestedArr, 
 with each nested array containing the string 'loop' concatenated with the corresponding index in nestedArr as its first element, and the index as its second element.

Example of a subarray: ['loop3', 3].
 * */

const nestedArr = [];
for (let i = 0; i < 5; i++) {
    nestedArr.push(['loop' + i, i]);
}
// console.log(nestedArr);

/**
 * Question 16
 * ----------------------------------------------------------------
 * Given: const possibleIterable = [4, 3, 9, 6, 23];
 * You are provided with an array, possibleIterable. 
 * Using a for loop, build out the object divByThree so that each key is an element of possibleIterable that is divisible by three. 
 * The value of each key should be the array index at which that key can be found in possibleIterable.
 * */

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
for (let i = 0; i < possibleIterable.length; i++) {
    if(possibleIterable[i] % 3 === 0){
        divByThree[possibleIterable[i]] = i;
    }
}
console.log(divByThree);

/**
 * Question 17
 * ----------------------------------------------------------------
 * const sumMe = {
 *   hello: 'there',
 *   you: 8,
 *   are: 7,
 *   almost: '10',
 *   done: '!'
 * };
 * let total = 0;
 * // ADD CODE HERE
 * 
 * You are given an object called sumMe containing several key/value pairs and a variable called total whose initial value is 0. 
 * Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total.
 * */

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
}

let total = 0;

for (let key in sumMe) {
    if(typeof sumMe[key] === 'number'){
        total = total + sumMe[key];
    }
}
console.log(total);

