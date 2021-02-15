
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [{

    type: 'input',
    name: 'Title',
    message: 'What is the title of the project?'
    
},
{
    type: 'input',
    name: 'Description',
    message: 'Please describe your project in more details'
},
{
    type: 'input',
    name: 'Table of Contents',
    message: 'Please enter your table of contents!'
},
{
    type: 'input',
    name: 'Installation',
    message: 'What is require to run this application?'

},
{
    type: 'input',
    name: 'Usage',
    message: 'How is the app used? Please explained',
    
},
{
    type: 'list',
    name: 'License',
    message: 'What type of license is being used?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    
},
{
    type: 'confirm',
    name: 'confirmContribution',
    message: 'Would you like to enter any collaborators with their github profile links?',
    default: true
},
{
    type: 'input',
    name: 'Contributing',
    message: 'Please enter any collaborators with their Github Username!',
    when: ({ confirmContribution }) => confirmContribution
},
{
    type: 'input',
    name: 'Tests',
    message: 'What commands are needed to run this app?',
},
{
  type: 'input',
  name: 'Questions',
  message: 'For more information, contact me for inquiries.'  
},

{
   type: 'input',
   name: 'Username',
   message: 'Please enter your Github username'
},
{
   type: 'input',
   name: 'Email',
   message: 'Please enter your email address?'
}
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            console.log('README.md Created!')
            writeToFile('DEMO-README.md', generateMarkdown(data));
            
        });

};

// Function call to initialize app
init();


















