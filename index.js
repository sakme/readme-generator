const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
var dataArr = {};

const baseQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your README.md file?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license for your project',
            choices: [
                        'Apache 2.0 License',
                        'Boost Software License 1.0',
                        'BSD 3-Clause License',
                        'BSD 2-Clause License',
                        'Creative Commons CC0',
                        'Creative Commons Attribution 4.0 International',
                        'Creative Commons Attribution-ShareAlike 4.0 International',
                        'Creative Commons Attribution-NonCommercial 4.0 International',
                        'Creative Commons Attribution-NoDerivates 4.0 International',
                        'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International',
                        'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International',
                        'Eclipse Public License 1.0',
                        'GNU GPL v3',
                        'GNU GPL v2',
                        'GNU AGPL v3',
                        'GNU LGPL v3',
                        'GNU FDL v1.3',
                        'Hippocratic License 2.1',
                        'Hippocratic License 3.0',
                        'IBM Public License Version 1.0',
                        'ISC License',
                        'MIT License',
                        'Mozilla Public License 2.0',
                        'Open Data Commons Attribution License',
                        'Open Data Commons Open Database License',
                        'Open Data Commons Public Domain Dedication and License',
                        'Perl License',
                        'Perl Artistic License 2.0',
                        'SIL Open Font License 1.1',
                        'The Unlicense',
                        'WTFPL',
                        'zlib/libpng License'
                    ],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please add licensing information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter info about contributing to the project',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please add contribution information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Add GitHub username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please add your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Add email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please add your email address!');
                    return false;
                }
            }
        }
    ])
};

const addInstallation = dataArr => {
    if (!dataArr.installation) {
        dataArr.installation = [];
    }

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'installInstruction',
            message: 'Add an installation step',
            validate: installInstructionInput => {
                if (installInstructionInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddInstallation',
            message: 'Would you like to add another instruction?',
            default: false
        }
    ])
    .then(data => {
        dataArr.installation.push(data);
        if (data.confirmAddInstallation) {
            return addInstallation(dataArr);
        } else {
            return dataArr;
        }
    })
};

const addUsage = dataArr => {
    if (!dataArr.usage) {
        dataArr.usage = [];
    }

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'usageInstruction',
            message: 'Add a usage example',
            validate: usageInstructionInput => {
                if (usageInstructionInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddUsage',
            message: 'Would you like to add another usage example?',
            default: false
        }
    ])
    .then(data => {
        dataArr.usage.push(data);
        if (data.confirmAddUsage) {
            return addUsage(dataArr);
        } else {
            return dataArr;
        }
    })
};

const addTest = dataArr => {
    if (!dataArr.test) {
        dataArr.test = [];
    }

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'testCase',
            message: 'Add a test example.',
            validate: testCaseInput => {
                if (testCaseInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddTest',
            message: 'Would you like to add another test example?',
            default: false
        }
    ])
    .then(data => {
        dataArr.test.push(data);
        if (data.confirmAddTest) {
            return addTest(dataArr);
        } else {
            return dataArr;
        }
    })
};

writeToFile = markdown => {
    fs.writeFile('./dist/README.md', markdown, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })
}; 

baseQuestions()
    .then(addInstallation)
    .then(addUsage)
    .then(addTest)
    .then(data => {
        return generateMarkdown(data);
    })
    .then(writeToFile);
