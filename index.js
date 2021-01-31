const fs = require("fs");

const inquirer = require("inquirer"); 

inquirer.prompt([

    {
        type:"input",
        message:"What is your GitHub username?",
        name:"gitName"
    },
    {
        type:"input",
        message:"What is your email address?",
        name:"email" 
    },
    {
        type:"input",
        message:"What is your project name?",
        name:"projectName"
    },
    {
        type:"input",
        message:"Please write a short description of your project.",
        name:"projectDescription"
    },
    {
        type:"input",
        message:"Please provide example of how your project could be used.",
        name:"usage"
    },
    {
        type:"input",
        message:"What are the steps required to install your project?",
        name:"Install"
    },
    {
        type: "input",
        message:"What do users need to know about your repo? ",
        name:"needtoknow"
    },
    {
        type:"input",
        message:"List your collaborators , if any with links to their GitHub profiles.",
        name:"credit"
    },
    {
        type:"list",
        message:"What kind of license would you like your project to have?",
        name:"License",
        choices:["MIT License", "GNU GPLv3", "Apache License 2.0", "Boost Software License 1.0", "Mozilla Public License 2.0", ]
    },
    {
        type:"input",
        message:"Does your project have a lot of features ? If so list them here:  ",
        name:"Features "
    },
    
  

])
