#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Declare constant "answewr" to assign it to the result of inquirer function 

const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Enter your sentence to count the word:",
  },
]);

let words = answers.Sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//Declare a const 'count' and assign it to the length of the array
const count = words.length;
//Print the count to the console
console.log(chalk.green(`The Number Of Words In Your Sentence Is : ${count}`));
