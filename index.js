const fs = require('fs'); 
const inquirer = require('inquirer');
const path = require("path");
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = []; 

// Manager data - name, id, email, officeNumber
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter manager's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter the manager's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Enter an email.')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Enter an office number.')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};
// Employee data - role, name, id, email, GitHub username, school
const addEmployee = () => {
    console.log('Add team employees');

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose the employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the employee's name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter employee's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter the employee's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Enter an email.')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Enter employee's github username.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter intern's school.")
                }
            }
        },
