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
      type: "list",
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
    {
      type: "input",
      name: "Github_Username",
      message: " Please Github Username",
    },
    {
      type: "Email",
      name: "Email",
      message: "Please enter your email address",
    },
    {},
  ]);
};
const generateREADME = ({}) =>
  `#${Title}${license}
##${Description};
##${Table_contents};
##${Installation};
##${Usage};
##${License};
##${Contribution};
##${Tests};
##${Questions_Answers};
    #### My Github Profile : https://github.com/${Github_Username};
    #### Please Reach me at: ${Email} for more queries and information;
`;
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
init = () => {
  question()
    .then((answers) => writeFile("README.md", generateREADME(answers)))
    .then(() => console.log("Successfully Generated README.md"))
    .catch((err) => console.log("Error"));
};

// Function call to initialize app
init();
