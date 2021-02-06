const fs = require("fs");

const inquirer = require("inquirer"); 

const createMarkdown = require("./utils/createMarkdown");

const questions = [

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
        message:"What are the steps required to install your project?",
        name:"Install"
    },
    {
        type:"input",
        message:"Please provide example of how your project could be used.",
        name:"usage"
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
        choices:["MIT License", "GNU GPLv3", "Apache License 2.0", "ISC License", ]
    },
   
  

]



function welcome(){
    console.log("Hello,  I am The Generator of the README! ")
}

function promptUser(){
    //inquirr.prompt auto takes in questions and prompt user -
    return inquirer.prompt(questions)
    
}
//await inside asynch , await for this to be completed before moving to next line 

async function prompt(){

    const answers = await promptUser();
    const readMe = await createMarkdown(answers);
    console.log(readMe);
    const filename = `${answers.projectName.toUpperCase()}.md`;
    fs.writeFile(filename, readMe , 'utf8', err =>{
        if(err) console.log(err);
        else console.log("success!")
    })
}

welcome();
prompt();
