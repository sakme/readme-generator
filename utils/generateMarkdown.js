const licenseArr = require('./license.js');

const generateMarkdown = data => {
  const {title, description, license, contribution, github, email, installation, usage, test} = data;
  
return `${licenseArr
  .filter(({ licenseName }) => licenseName === license[0])
  .map(({ licenseName, image, badge, link }) => {
return `${badge}
`;}).join('')}

# ${title}


${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation.map(({ installInstruction, confirmAddInstallation }) => { 
return `${installInstruction}
`;}).join('')}

## Usage
${usage.map(({ usageInstruction, confirmAddUsage }) => { 
return `${usageInstruction}
`;}).join('')}

## License
${licenseArr
  .filter(({ licenseName }) => licenseName === license[0])
  .map(({ licenseName, image, badge, link }) => {
return `[Licensed under the ${licenseName}](${link})
`;}).join('')}

## Contribution
${contribution}

## Tests
${test.map(({ testCase, confirmAddTest }) => { 
return `${testCase}
`;}).join('')}

## Questions
[GitHub Profile](https://github.com/${github})
[Email Me](mailto:${email})
[Add an issue](https://github.com/${github}/readme-generator/issues)
`
};

module.exports = generateMarkdown;
