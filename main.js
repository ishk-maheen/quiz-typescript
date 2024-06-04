#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("");
console.log(chalk.bgYellowBright("-----------------------------------------------------------------------------------------------------------"));
console.log(chalk.bgBlueBright.bold("********************************************* OPERATORS QUIZ **********************************************"));
console.log(chalk.bgYellowBright("-----------------------------------------------------------------------------------------------------------"));
console.log("");
let correctCount = 0;
let incorrectCount = 0;
let question1 = await inquirer.prompt([
    {
        type: "list",
        name: "q1",
        message: "1) What are the three main 'simple types' in TypeScript?",
        choices: ["A. Object, Array, Bolean", "B. Bolean, Number, String", "C. Object, String, Number"]
    }
]);
if (question1.q1 === "B. Bolean, Number, String") {
    console.log(chalk.green.italic.underline("Your answer is correct."));
    correctCount++;
}
else {
    console.log(chalk.redBright.italic.underline("Your answer is incorrect, the correct answer is option B."));
    incorrectCount++;
}
console.log("");
let question2 = await inquirer.prompt([
    {
        type: "list",
        name: "q2",
        message: "2) Which operator is used to concatenate strings in TypeScript?",
        choices: ["A. + ", "B. * ", "C. - "]
    }
]);
if (question2.q2 === "A. + ") {
    console.log(chalk.green.italic.underline("Your answer is correct."));
    correctCount++;
}
else {
    console.log(chalk.redBright.italic.underline("Your answer is incorrect, the correct answer is option A."));
    incorrectCount++;
}
console.log("");
let question3 = await inquirer.prompt([
    {
        type: "list",
        name: "q3",
        message: "3) What is the purpose of an assignment operator in TypeScript?",
        choices: ["A. To perform mathematical calculations ", "B. To compare two values ", "C. To assign a value to a variable"]
    }
]);
if (question3.q3 === "C. To assign a value to a variable") {
    console.log(chalk.green.italic.underline("Your answer is correct."));
    correctCount++;
}
else {
    console.log(chalk.redBright.italic.underline("Your answer is incorrect, the correct answer is option C."));
    incorrectCount++;
}
console.log("");
let question4 = await inquirer.prompt([
    {
        type: "list",
        name: "q4",
        message: "4) Which operator in TypeScript is used for incrementing a value by 1?",
        choices: ["A. --", "B. +=", "C. ++"]
    }
]);
if (question4.q4 === "C. ++") {
    console.log(chalk.green.italic.underline("Your answer is correct."));
    correctCount++;
}
else {
    console.log(chalk.redBright.italic.underline("Your answer is incorrect, the correct answer is option C."));
    incorrectCount++;
}
console.log("");
let question5 = await inquirer.prompt([
    {
        type: "list",
        name: "q5",
        message: "5) What do logical operators do in TypeScript?",
        choices: ["A. Concatenate strings", "B. Manipulate boolean values", "C. Perform mathematical operations"]
    }
]);
if (question5.q5 === "B. Manipulate boolean values") {
    console.log(chalk.green.italic.underline("Your answer is correct."));
    correctCount++;
}
else {
    console.log(chalk.redBright.italic.underline("Your answer is incorrect, the correct answer is option B."));
    incorrectCount++;
}
console.log("");
let question6 = await inquirer.prompt([
    {
        type: "list",
        name: "q6",
        message: "6) What does the following TypeScript expression evaluate to: 10 <= 5?",
        choices: ["A. false", "B. true", "C. NaN"]
    }
]);
if (question6.q6 === "A. false") {
    console.log(chalk.green.italic.underline("Your answer is correct."));
    correctCount++;
}
else {
    console.log(chalk.redBright.italic.underline("Your answer is incorrect, the correct answer is option A."));
    incorrectCount++;
}
console.log("");
let question7 = await inquirer.prompt([
    {
        type: "list",
        name: "q7",
        message: "7) What is the result of the following TypeScript expression: 10 + 5 * 2?",
        choices: ["A. 25", "B. 30", "C. 20"]
    }
]);
if (question7.q7 === "C. 20") {
    console.log(chalk.green.italic.underline("Your answer is correct."));
    correctCount++;
}
else {
    console.log(chalk.redBright.italic.underline("Your answer is incorrect, the correct answer is option C."));
    incorrectCount++;
}
console.log("");
let question8 = await inquirer.prompt([
    {
        type: "list",
        name: "q8",
        message: "8) What is the result of the following TypeScript expression: 2 ** 3?",
        choices: ["A. 8", "B. 16", "C. 20"]
    }
]);
if (question8.q8 === "A. 8") {
    console.log(chalk.green.italic.underline("Your answer is correct."));
    correctCount++;
}
else {
    console.log(chalk.redBright.italic.underline("Your answer is incorrect, the correct answer is option A."));
    incorrectCount++;
}
console.log("");
let question9 = await inquirer.prompt([
    {
        type: "list",
        name: "q9",
        message: "9) What does the NOT operator (!) do in TypeScript?",
        choices: ["A. It concatenates strings", "B. It negates a boolean value", "C. It performs bitwise operations"]
    }
]);
if (question9.q9 === "B. It negates a boolean value") {
    console.log(chalk.green.italic.underline("Your answer is correct."));
    correctCount++;
}
else {
    console.log(chalk.redBright.italic.underline("Your answer is incorrect, the correct answer is option B."));
    incorrectCount++;
}
console.log("");
let question10 = await inquirer.prompt([
    {
        type: "list",
        name: "q10",
        message: "10) What is the result of the expression:(5 > 3 && 10 > 20)?",
        choices: ["A. True", "B. Error", "C. False"]
    }
]);
if (question10.q10 === "C. False") {
    console.log(chalk.green.italic.underline("Your answer is correct."));
    correctCount++;
}
else {
    console.log(chalk.redBright.italic.underline("Your answer is incorrect, the correct answer is option c."));
    incorrectCount++;
}
console.log("");
console.log(chalk.bold("Quiz Summary:"));
console.log(chalk.green.bold(`Correct Answers: ${correctCount}`));
console.log(chalk.red.bold(`Incorrect Answers: ${incorrectCount}`));
console.log("");
