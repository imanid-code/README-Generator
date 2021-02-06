const renderLicense = license => {
    // Generates badge for license
    switch (license) {
      case 'Apache License 2.0':
        return '![License: Apache License 2.0](https://img.shields.io/badge/License-Apache-brightgreen.svg)';
      case 'ISC License':
        return '![License: ISC License](https://img.shields.io/badge/License-ISC-blueviolet.svg)';
      case 'MIT License':
        return '![License: MIT License](https://img.shields.io/badge/License-MIT-blue.svg)';
      case 'GNU GPLv3':
        return '![License: GNU GPLv3](https://img.shields.io/badge/License-GNU-ff69b4.svg)';
      default:
        console.log('No license found');
        return '';
    }
  };

function createMarkdown(answers){

    return `

# ${answers.projectName}
    
## Description

   
---
${answers.projectDescription}
    
## Table of Contents 
     
---
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)
* [Badges](#Badges)
* [Questions](#Questions|Comments|Concerns)
    
---
## Installation

${answers.Install}

---

## Usage 

${answers.usage}

---


## Credits 

${answers.credit}

---



## License

${renderLicense(answers.License)}


---

## Badges 

![MadewithMarkdown](https://img.shields.io/badge/MarkDown-50%25-brightgreen)

![MadewithNode](https://img.shields.io/badge/Node.ja-50%25-yellow)

---

## Questions|Comments|Concerns

https://github.com/${answers.gitName}

${answers.email}
---
`
    
}

module.exports = createMarkdown