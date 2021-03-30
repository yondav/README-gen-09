// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const renderLicenseBadge = require('./utils/generateMarkdown.js');
const regexCode = /```/g;
const ticks = '\n\n```\n\n';
const regexReturn = /-r/g;
const responseReturn = '\n  ';

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
    type: 'checkbox',
    message: 'Select a Lisence',
    choices: [
      'Apache 2.0 License',
      'BSD 3-Clause License',
      'BSD 2-Clause License',
      'Eclipse Public License 1.0',
      'GNU GPL v3',
      'GNU GPL v2',
      'GNU AGPL v3',
      'GNU LGPL v3',
      'GNU FDL v1.3',
      'IBM',
      'MIT',
      'Mozilla',
      'The zlib/libpng License',
    ],
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
}) => {
  renderLicenseBadge(license);
  return `${project}
  ${licenseBadges}
  ${description.replace(regexCode, ticks).replace(regexReturn, responseReturn)}
  ${install.replace(regexCode, ticks).replace(regexReturn, responseReturn)}
  ${usage.replace(regexCode, ticks).replace(regexReturn, responseReturn)}
  ${contribution.replace(regexCode, ticks).replace(regexReturn, responseReturn)}
  ${test.replace(regexCode, ticks).replace(regexReturn, responseReturn)}
  ${license}
  ${github.replace(regexReturn, responseReturn)}
  ${email.replace(regexReturn, responseReturn)}
  ${contact.replace(regexReturn, responseReturn)}`;
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const dir = `/Users/yondav/bcs/homeworks/09-README-gen/README-gen-09/${responses.project}`;
    fs.mkdir(dir, { recursive: true }, (err) => {
      err ? console.error(err) : process.chdir(dir);
      const MD = renderMD(responses);
      // MD.replace('```', 'COMEON');
      fs.writeFile('README.md', MD, (err) => {
        err ? console.error(err) : console.log('success!');
        console.log(MD);
      });
    });
  });
}

// Function call to initialize app
init();
