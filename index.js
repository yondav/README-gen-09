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

const renderMD = ({
  project,
  description,
  install,
  usage,
  contribution,
  test,
  license,
  github,
  email,
  contact,
}) =>
  `${project}${description}${install}${usage}${contribution}${test}${license}${github}${email}${contact}`;

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const dir = `/Users/yondav/bcs/homeworks/09-README-gen/README-gen-09/${responses.project}`;
    fs.mkdir(dir, { recursive: true }, (err) => {
      err ? console.error(err) : process.chdir(dir);
      const MD = renderMD(responses);
      fs.writeFile('README.md', MD, (err) => {
        err ? console.error(err) : console.log('success!');
      });
    });
  });
}

// Function call to initialize app
init();
