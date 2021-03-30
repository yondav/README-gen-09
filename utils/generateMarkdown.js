// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.includes('Apache 2.0 License')) {
    licenseBadges +=
      '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license.includes('BSD 3-Clause License')) {
    licenseBadges +=
      '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
  if (license.includes('BSD 2-Clause License')) {
    licenseBadges +=
      '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  }
  if (license.includes('Eclipse Public License 1.0')) {
    licenseBadges +=
      '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }
  if (license.includes('GNU GPL v3')) {
    licenseBadges +=
      '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license.includes('GNU GPL v2')) {
    licenseBadges +=
      '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
  }
  if (license.includes('GNU AGPL v3')) {
    licenseBadges +=
      '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)';
  }
  if (license.includes('GNU LGPL v3')) {
    licenseBadges +=
      '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)';
  }
  if (license.includes('GNU FDL v1.3')) {
    licenseBadges +=
      '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)';
  }
  if (license.includes('IBM')) {
    licenseBadges +=
      '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  }
  if (license.includes('MIT')) {
    licenseBadges +=
      '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license.includes('Mozilla')) {
    licenseBadges +=
      '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  if (license.includes('The zlib/libpng License')) {
    licenseBadges +=
      '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
  }

  if (license === []) {
    return '';
  } else {
    return licenseBadges;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown() {
  // return `# ${data.title}
  // `;
}

// module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
