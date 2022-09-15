// Require modules
const inquirer = require('inquirer');
const generatePage = require('./src/generatePage');
const renderPage = require('./src/renderHTML');
const employeeRoles = require('./lib/roles');

// use inquirer to prompt user input and log prompt questions from ./libs
const getEmployeeDataAsync = async () => {
    const employeeList = [];

    while (true) {
        // prompts user for selection of role
        const response = await inquirer.prompt({
            type: 'list',
            name: 'role', 
            message: 'Please select role to add:',
            choices: ['Engineer', 'Manager', 'Intern', 'Exit']
        });

        // gets employee role and will exit loop if 'Exit' selected
        const employeeRole = response.role;
        if (employeeRole === 'Exit') break;

        // get questions from ./lib based on role selected
        const employeeConstructor = employeeRoles[employeeRole];
        const employeeData = await inquirer.prompt((new employeeConstructor).getPromptQuestions());

        console.log(`\nNew ${employeeRole} profile created for ${employeeData.name}.\n`);

        employeeList.push({
            role: employeeRole,
            ...employeeData
        });
    }

    return employeeList;
}

// init functions
getEmployeeDataAsync()
    .then(generatePage)
    .then(renderPage);