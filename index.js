let readmeGenerator = require("./createReadme")
const inquirer = require('inquirer');
const fs = require("fs")
/* 
 Title: Questions and Info
 Image: Football Star
 How to use: X
 License:
 How to contribute: 
 
*/
let questions = [{
    name: "title",
    type: "input",
    message: "What is the title of your project?",
    default: "my-project"
},
{
    name: "image",
    type: "input",
    message: "If you have an image, insert the link here.",
    default: "https://via.placeholder.com/350x150"
},
{
    name: "howtouse",
    type: "input",
    message: "How is your project intended to be used?",
    default: ""
},
{
    name: "license",
    type: "list",
    message: "What license would you like?",
    choices: ["None", "mit", "wtfpl", "apache"]
},
{
    name: "contribute",
    type: "input",
    message: "How can someone contribute to your project?",
    default: "contributorv2.0"
},
{
    name: "github",
    type: "input",
    message: "What is your GitHub username?",
    default: "",
},
{
    name: "repo",
    type: "input",
    message: "What is the name of your repository?",
    default: "",
}
]


async function askQuestions() {
    var response = await inquirer.prompt(questions)
    console.log(response)
    let markdownString = readmeGenerator(response)
    writeReadme(markdownString)
}
askQuestions()


function writeReadme(markdownString) {
    fs.writeFile("README.md", markdownString, (error) => {
        console.log("Data has been sent to 'README.md'")
    });
}

