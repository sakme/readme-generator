// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generatePage = require('./README.MD');
const generateMarkdown = require('./utils/generateMarkdown.js');
const licenses = require('./utils/license.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
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
                    ]
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles'
        },
        {
            type: 'confirm',
            name: 'contribution',
            message: 'Do you want to add a Contributor Covenant'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Add test cases here'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Add questions here'
        },
        {
            type: 'confirm',
            name: 'toc',
            message: 'Would you like to add a table of contents?'
        }
    ])
};

// TODO: Create a function to write README file
writeToFile = markdown => {
    fs.writeFile('./README.md', markdown, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })
};

// TODO: Create a function to initialize app
// function init() {
//     questions();
// }

// Function call to initialize app
questions()
    // .then(test => console.log(test));
    .then(generateMarkdown)
    .then(writeToFile);
