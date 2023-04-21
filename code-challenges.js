// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// Input: Two strings 
// Output: Shows which of the two strings has more characters than the other
// Create a function that takes in the two strings
// Use conditional statements as well as built in method (.length) to determine if string one or string two has more characters
// Create returns that provide the input with more characters
// Utilize function call

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const moreChars = (string1,string2) => { 

    if(string1.length > string2.length){
        return string1
    } else if(string1.length < string2.length) {
        return string2
    } else{
        return "Lengths are equal"
    }
}

console.log(moreChars(fruit1, fruit2))
//output: banana
console.log(moreChars(fruit3, fruit4))
//output: cherry


// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:


const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

const boilPoint = (theTemp) => {

    if(theTemp > 212){
        return `${theTemp} is above boiling point`
    } else if (theTemp < 212){
        return `${theTemp} is below boiling point`
    } else{
        return `${theTemp} is at boiling point`
    }
}
console.log(boilPoint(temperature1))
// Output: 42 is below boiling point
console.log(boilPoint(temperature2))
// Output: 350 is above boiling point
console.log(boilPoint(temperature3))
// Output: 212 is at boiling point



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

let combArray = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))

console.log(combArray.length)
// Output: 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"

const revString = (theString) =>{

    return theString.split("").reverse().join("")
}

console.log(revString(currentCohort))
// Output: 3202 eilrahC



// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const lastIndexNum = (intValue) =>{
    
    return numberOfConnections.lastIndexOf(intValue)

}

console.log(lastIndexNum(givenValue1))
// Output: 7
console.log(lastIndexNum(givenValue2))
// Output: 8



// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const largeToSmall = (arrName) => {

    return arrName.sort().reverse()

}


console.log(largeToSmall(sanDiegoSummerTemperatures))
// Output: [82, 80, 79, 77, 76, 73, 72]
console.log(largeToSmall(sanDiegoWinterTemperatures))
// Output: [68, 67, 66, 66, 62, 59, 59]