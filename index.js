// TODO: Create an array of questions for user input
const inquirer = require("inquirer");
const fs = require("fs");
const { of } = require("rxjs");

const questions= ()=>{
    return inquirer.prompt([
        {
        type: 'input ',
        name : 'Title',
        message: 'Please enter your Project Title :, 
        }
        {
        type: 'input',
         name :'Description',
         message:'Please enter your Project Description:'       
        }

    ])
};
const generateREADME=({})=>


`#${Title}
##${Description}
##${Table of contents}
##${Installation}
##${Usage}
##${License }
##${Contributing}
##${Tests}
##${Questions and Answers}
`
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init=()=> {
    question()
    .then(
        (answers)=>writeFile("README.md",generateREADME (answers)))
    .then(()=>console.log("Successfully Generated README.md"))
    .catch((err)=>console.log("Error");    
    )
};

// Function call to initialize app
init();
