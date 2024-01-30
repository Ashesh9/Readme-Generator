// TODO: Create an array of questions for user input
const inquirer = require("inquirer");
const fs = require("fs");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input ",
      name: "Title",
      message: "Please enter your Project Title :",
    },
    {
      type: "input",
      name: "Description",
      message: "Please enter your Project Description:",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select applicable license:",
      choices: [
        "MIT License",
        "GNU General Public License (GPL)",
        "Apache License 2.0",
        "BSD 2-Clause License",
        "BSD 3-Clause License",
        "GNU Lesser General Public License (LGPL)",
        "Mozilla Public License 2.0",
        "Creative Commons",
        "Unlicense",
      ],
    },
  ]);
};
const generateREADME = ({}) =>
  `#${Title}${license}
##${Description}
##${Table - contents}
##${Installation}
##${Usage}
##${License}
##${Contributing}
##${Tests}
##${Questions_Answers}
`;
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  question()
    .then((answers) => writeFile("README.md", generateREADME(answers)))
    .then(() => console.log("Successfully Generated README.md"))
    .catch((err) => console.log("Error"));
};

// Function call to initialize app
init();
