// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `![Github License](https://img.shields.io/badge/license-${license}-red.svg)`
  } else {
    return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ### ${data.Title} ${renderLicenseBadge(data.License)}
  ### https://github.com/${data.Username}
  ## Description
  ${data.Description}
  ##  Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#License)
  * [Contributing](#contributing)
  * [Tests](#Tests)
  * [Questions](#questions)
  ## Installation
  The dependencies are necessary to be installed to be able to run the application.
  ## Usage
  In order to run this application, ${data.Usage}
  ![alt text](assets/images/screenshot.png)
  # License
  This project is  licensed ${data.License} license.
  ${renderLicenseBadge(data.License)}
  ## Contributing
  Contributors: ${data.Contributing}
  ## Test
  The following is needed to run the test: ${data.Tests}
  ## Questions
  If you have any questions regarding about the application, please contact me ${data.Username}
`;
}

module.exports = generateMarkdown;

















