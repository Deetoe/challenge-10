import { mainMenuPrompt } from './src/prompts.js';
import {viewDepartments, viewRoles, viewEmployees} from './src/queries.js';
import ctable from 'console.table';

const startApp = async () => {
    let exit = false;
    while (!exit) {
        const action = await mainMenuPrompt();

        switch (action) {
            case 'View all departments':
                const departments = await viewDepartments();
                console.table(departments);
                break;

            case 'View all roles':
                const roles = await viewRoles();
                console.table(roles);
                break;

            case 'View all employees':
                const employees = await viewEmployees();
                console.table(employees);
                break;

            case 'Add a department':
                // Add logic for adding a department
                break;

            case 'Add a role':
                // Add logic for adding a role
                break;

            case 'Add an employee':
                // Add logic for adding an employee
                break;

            case 'Update an employee role':
                // Add logic for updating an employee role
                break;

            case 'Exit':
                exit = true;
                break;

            default:
                console.log('Invalid option');
        }
    }
};

startApp();