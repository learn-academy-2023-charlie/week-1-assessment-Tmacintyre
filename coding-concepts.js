// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: Provided by instructor in class.
// b) Verify and explain: Provided by instructor in class. 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: So the log command is asking for the length of the string "cohort" which contains 9 indexes. The length is equal to the ammount of indexes + 1.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: The command is looking to log whatever data is located in the variables index[4]. Since index starts at zero in the fourth index would be the fifth letter in "Hello World!"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Because the variable index is equal to the number 1, the command is equal to console.log(languages[1]). That being said, the command is providing the information located withing the 1st index of the Array "languages".

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: I believe my answer is wrong as you would first have to convert the array into a string which would allow you to then use the .toUpperCase method, then convert back to an array.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The reason the data type comes back as a number is because the length of the array is 4 which is the datatype of a number.
