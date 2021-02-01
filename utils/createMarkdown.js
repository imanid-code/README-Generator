function createMarkdown(answers){

    return `
    ## Questions 
    # ${answers.gitName}
    ### [For additional questions contact me here.](${answers.email})
    ---
    # ${answers.projectName}
    
    ## Description
    ---
    ${answers.projectDescription}
    
    ## Table of Contents 
     
    ---
    
    *[Installation](#Install)
    *[Usage](#usage)
    *[Need to know](#needtoknow)
    *[Credits](#credit)
    *[License](#License)
    *[Features](#Features)
    
    ---
    ## Installation

    ${answers.Install}

    ---

    ## Usage 

    ${answers.usage}

    ---
    ## Need to know 
    ${answers.needtoknow}

    ---

    ## Credits 

    ${answers.credit}

    ---

    ## License 

    ${answers.License}

    ---

    ## Badges 

    [MadewithMarkdown](https://img.shields.io/badge/MarkDown-50%25-brightgreen)

    [MadewithMarkdown](https://img.shields.io/badge/Node.ja-50%25-yellow)

    ---

    ##Features 

    ${answers.Features}



    `
    
}

module.exports = createMarkdown