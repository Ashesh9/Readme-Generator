const inquirer = require("inquirer");
const fs = require("fs").promises;

const generateREADME = ({
  Title,
  Description,
  License,
  Github_Username,
  Email,
}) =>
  `#${Title}${License}
##${Description};
##Table_contents
#### Installation
#### Usage
####License
#### Contributions
#### Testing
#### Questions;
##${Installation};
##${Usage};
##${License};
##${Contribution};
##${Tests};
##${Questions_Answers};
    #### My Github Profile : https://github.com/${Github_Username};
    #### Please Reach me at: ${Email} for more queries and information;
`;
inquirer
  .prompt([
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
      name: "License",
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
      message: " Please enter Github Username",
    },
    {
      type: "Email",
      name: "Email",
      message: "Please enter your email address",
    },
    {
      type: "input",
      nmae: "Installation",
      message: "Please enter Installation procedure:",
    },
    {
      type: "input",
      nmae: "Usage",
      message: "Please enter Usage procedure:",
    },
    {
      type: "input",
      name: "Tasting Methods",
      message: "Please enter Testing methods if any:",
    },
  ])
  .then((answers) => {
    const READMEContent = generateREADME(answers);

    fs.writeFile("README.md", generateREADME(answers))
      .then(() => console.log("Successfully Generated README.md"))
      .catch((err) => console.log("Error"));
  });
