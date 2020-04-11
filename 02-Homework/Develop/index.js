const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

function promptUser(){
    return inquirer.prompt(questions)
}
const questions = [
{
    type: "input",
    name: "github",
    message: "Enter your GitHub Username"
},
{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "email",
    message: "What is your Email?"
},
{
    type: "input",
    name: "description",
    message: "Please enter a description of your project"
},
{
    type: "input",
    name: "contents",
    message: "Enter your table of contents"
},
{
    type: "input",
    name: "instillation",
    message: "Enter Instillation guide"
},
{
    type: "input",
    name: "usage",
    message: "Enter Usage"
},
{
    type: "input",
    name: "liscense",
    message: "Enter liscense"
},
{
    type: "input",
    name: "contributors",
    message: "Enter Contributors"
},
{
    type: "input",
    name: "test",
    message: "Enter Test"
},
{
    type: "input",
    name: "questions",
    message: "Enter questions"
},

];



function init() {
    promptUser()
    .then(function(questions) {
        const queryUrl = `https://api.github.com/users/${questions.github}`;
        axios
            .get(queryUrl)
            .then(function(response){
            console.log(queryUrl);
            console.log(response.data.url);
            fs.writeFile("readme.md", JSON.stringify(questions, null, '\t'), function(err) {

                if (err) {
                  return console.log(err);
                }
            
            
                });
                fs.appendFile("readme.md"), ()
    
            })
}
    )};
init();


