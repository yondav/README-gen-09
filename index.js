// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

console.log(process.argv);

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'project',
    type: 'input',
    message: 'Project Title',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Project Description',
  },
  {
    name: 'install',
    type: 'input',
    message: 'Installation Guidelines',
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Usage Information',
  },
  {
    name: 'contribution',
    type: 'input',
    message: 'Contribution Guidelines',
  },
  {
    name: 'test',
    type: 'input',
    message: 'Test Instructions',
  },
  {
    name: 'license',
    type: 'list',
    message: 'Select a Lisence',
    choices: ['MIT', 'Eclipse', 'IBM', 'Mozilla'],
  },
  {
    name: 'github',
    type: 'input',
    message: 'Github Username',
  },
  {
    name: 'email',
    type: 'input',
    message: 'Email Address',
  },
  {
    name: 'contact',
    type: 'input',
    message: 'Contact Instructions',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, responses) {
  console.log(fileName);
  console.log(responses);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
  });
}

// Function call to initialize app
init();
