# README Generator/ README-gen-09

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- <a href="https://github.com/yondav/README-gen-09">Repo</a>

## About / Synopsis

When creating an open source project, a detailed README file makes all the difference in a developers repository. The README file will offer other developers all of the information and tools they need to install and run the application and give descriptive guidelines for addressing issues and making contributions.

README Generator offers a template md file for developers to fill out from the command line, allowing them to spend more time developing and less time thinking about formatting their README file.

---

## Table of contents

> - [Title / Repository Name](#title--repository-name)
>   - [About / Synopsis](#about--synopsis)
>   - [Table of contents](#table-of-contents)
>   - [Installation](#installation)
>   - [Usage](#usage)
>     - [File Path](#file-path)
>     - [Supported Commands](#supported-commands)
>     - [Syntax Highlighting](#syntax-highlighting)
>     - [Live Demo](#live-demo)
>     - [Returns](#returns)
>   - [Test instructions](#test-instructions)
>   - [Author](#author)
>     - [Contact](#contact)
>   - [Contributing / Issues](#contributing--issues)
>     - [Contributing](#contributing)
>     - [Known Issues](#known-issues)
>     - [Reporting Issues](#reporting-issues)
>   - [License](#license)

---

## Installation

- Clone repo
- Open integrated terminal on the root directory
- Install dependencies

```
npm i
```

---

## Usage

> ### File Path
>
> - The app will generate a new directory in the root directory named for the title of the user's project
> - root directory
>   - node_modules
>   - utils
>     - generateMarkdown.js
>   - .gitignore
>   - index.js
>   - package-lock.json
>   - package.json
>   - README.md
>   - **NEW DIRECTORY**
>     - README.MD

---

### Supported Commands

This is a command line app. The user will be able to input their responses in a single line format when prompted and use the return key to submit.

For checkbox prompts, the user will be able to navigate the options using the arrow keys, select using the space bar and submit using the return key.

---

### Syntax Highlighting

User can use back-ticks **without using the return key** to enable code blocks

````
```code block here```
````

---

### Returns

User can also format text with returns by typing designated command in-line

```
-r
```

---

### <a href="https://drive.google.com/file/d/1UZbQUECa74zvYHTU29h2GgD6EaOuypZP/view?usp=sharing">Live Demo

![demo](./images/demo.gif)</a>

> **App has been updated since the demo was recorded to color code prompts based on the shortcut permissions**

- All shortcuts permitted <span style="color: #b486d4">-magenta</span>
- Limited shortcuts permitted <span style="color: #d4aa5f">-yellow</span>

---

## Test Instructions

As of now, README Generator is a simple prototype for what could become a more robust command line application. There are no immediate concerns regarding bugs but I encourage all users to test as they desire.

For information regarding contributions and reporting issues, see <a href="#contributing--issues">Contributing / Issues</a>

---

## Author

- <a href="https://yondav.us/">Yoni David</a>
- <a href="https://github.com/yondav">Github</a>

---

### Contact

Send emails to <a href="mailto:yoni@yondav.us">yoni@yondav.us</a>

## Contributing / Issues

---

### Contributing

- Fork repo
- Make additions and changes on new, personalized branch
- Pull request and ask for review

---

### Known Issues

Currently no known issues.

---

### Reporting Issues

Report issues by selecting the <a href="https://github.com/yondav/README-gen-09/issues">issues</a> tab and creating a new issue

---

## Licenses

- <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a>

- <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>

Copyright &copy; 2021, Yoni David
