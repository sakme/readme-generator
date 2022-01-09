const licenseArr = require('./license.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

const insInst = gen => {
return `${gen.map(({ installInstruction, confirmAddInstallation }) => { 
return `${installInstruction}
`;}).join('')}
`;
};

const insUse = gen => {
return `${gen.map(({ usageInstruction, confirmAddUsage }) => { 
return `${usageInstruction}
`;}).join('')}
`;
};

const insTest = gen => {
return `${gen.map(({ testCase, confirmAddTest }) => { 
return `${testCase}
`;}).join('')}
`;
};

// const lookupLicense = (gen, lic) => {
// return `${gen
// .filter(({ licenseName }) => licenseName === lic[0])
// .map(({ licenseName, image, badge, link }) => {
//   console.log(licenseName, link);
//   return `[Licensed under the ${licenseName}](${link})
//   `;
// }).join('')}
// `;
// };

const generateMarkdown = data => {
  console.log(data);
  const {title, description, license, contribution, github, email, installation, usage, test} = data;
  
return `# ${title}

${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contribute](#contribution)
* [Tests](#tests)
* [Questions?](#questions?)

## Installation
${insInst(installation)}

## Usage
${insUse(usage)}

## License
${licenseArr
  .filter(({ licenseName }) => licenseName === license[0])
  .map(({ licenseName, image, badge, link }) => {
    console.log(licenseName, link);
    return `[Licensed under the ${licenseName}](${link})
    `;
  }).join('')}

## Contribution
${contribution}

## Tests
${insTest(test)}

## Questions
[GitHub Profile](https://github.com/${github})
[Email Me](mailto:${email})
[Add an issue](https://github.com/${github}/readme-generator/issues)
`
};

module.exports = generateMarkdown;
