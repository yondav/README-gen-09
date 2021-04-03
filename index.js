// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const licenseFuncs = require('./utils/generateMarkdown.js');
const colors = require('colors');
const shortcutsSupportsAll = 'Supports code-blocks. format: ```code```, -r to return, * for bullet points'
  .magenta;
const shortcutsSupportsLim = '-r to return, * for bullet points'.yellow;
const regexCode = /```/g;
const ticks = '\n\n```\n\n';
const regexReturn = /-r/g;
const responseReturn = '\n  ';
const date = new Date();
const year = date.getFullYear();

console.log(process.argv);

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'project',
    type: 'input',
    message: 'Project Title',
  },
  {
    name: 'deployed',
    type: 'input',
    message: 'Deployed Link',
  },
  {
    name: 'repo',
    type: 'input',
    message: 'Repository Name',
  },
  {
    name: 'repoLink',
    type: 'input',
    message: 'Repository Link',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Project Description -- ' + shortcutsSupportsAll,
  },
  {
    name: 'install',
    type: 'input',
    message: 'Installation Guidelines -- ' + shortcutsSupportsAll,
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Usage Information -- ' + shortcutsSupportsAll,
  },
  {
    name: 'test',
    type: 'input',
    message: 'Test Instructions -- ' + shortcutsSupportsAll,
  },
  {
    name: 'author',
    type: 'input',
    message: 'Author Name',
  },
  {
    name: 'github',
    type: 'input',
    message: 'Github Link',
  },
  {
    name: 'email',
    type: 'input',
    message: 'Email Address',
  },
  {
    name: 'contact',
    type: 'input',
    message: 'Contact Instructions -- ' + shortcutsSupportsLim,
  },
  {
    name: 'contribution',
    type: 'input',
    message: 'Contribution Guidelines -- ' + shortcutsSupportsAll,
  },
  {
    name: 'reportIssues',
    type: 'input',
    message: 'Reporting Issues -- ' + shortcutsSupportsAll,
  },
  {
    name: 'knownIssues',
    type: 'input',
    message: 'Known Issues -- ' + shortcutsSupportsAll,
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
];

const renderMD = ({
  project,
  deployed,
  repo,
  repoLink,
  description,
  install,
  usage,
  test,
  author,
  github,
  email,
  contact,
  contribution,
  reportIssues,
  knownIssues,
  license,
  licenseLinks,
  licenseBadges,
}) => {
  return `
# ${project} / ${repo}

${licenseBadges}

* <a href="${deployed}">${project}</a>
* <a href="${repoLink}">${repo}</a>

## About / Synopsis

${description.replace(regexCode, ticks).replace(regexReturn, responseReturn)}

---

## Table of contents

> * [Title / Repository Name](#title--repository-name)
>   * [About / Synopsis](#about--synopsis)
>   * [Table of contents](#table-of-contents)
>   * [Installation](#installation)
>   * [Usage](#usage)
>   * [Test instructions](#test-instructions)
>   * [Author](#author)
>     * [Contact](#contact)
>   * [Contributing / Issues](#contributing--issues)
>     * [Contributing](#contributing)
>     * [Known Issues](#known-issues)
>     * [Reporting Issues](#reporting-issues)
${license.length === 0 ? '' : '>   * [License](#license)'}

---

## Installation

${install.replace(regexCode, ticks).replace(regexReturn, responseReturn)}

---

## Usage

${usage.replace(regexCode, ticks).replace(regexReturn, responseReturn)}

---

## Test Instructions

${test.replace(regexCode, ticks).replace(regexReturn, responseReturn)}

---

## Author

* ${author}
* <a href="${github}
">Github</a>
* <a href="mailto:${email}">${email}</a>

---

### Contact

${contact.replace(regexReturn, responseReturn)}

---

## Contributing / Issues

---

### Contributing

${contribution.replace(regexCode, ticks).replace(regexReturn, responseReturn)}

---

### Known Issues

${knownIssues.replace(regexCode, ticks).replace(regexReturn, responseReturn)}

---

### Reporting Issues

${reportIssues.replace(regexCode, ticks).replace(regexReturn, responseReturn)}

---

${license.length === 0 ? '' : '## License\n\n' + licenseLinks}

Copyright &copy; ${year}, ${author}
`;
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const dir = path.join(__dirname, responses.project);
    fs.mkdir(dir, { recursive: true }, (err) => {
      err ? console.error(err) : process.chdir(dir);
      responses.licenseBadges = licenseFuncs.renderLicenseBadge(
        responses.license
      );
      responses.licenseLinks = licenseFuncs.renderLicenseLink(
        responses.license
      );
      const MD = renderMD(responses);
      fs.writeFile('README.md', MD, (err) => {
        err ? console.error(err) : console.log('success!');
      });
    });
  });
}

// Function call to initialize app
init();
