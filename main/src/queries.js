import {db} from './database.js';

export const viewDepartments = async () => {
    const result = await db.query('SELECT * FROM department');
    return result.rows;
};

export const viewRoles = async () => {
    const query = `
        SELECT role.id, role.title, role.salary, department.name AS department
        FROM role
        JOIN department ON role.department_id = department.id;
    `;
    const result = await db.query(query);
    return result.rows;
};

export const viewEmployees = async () => {
    const query = `
        SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department,
               r.salary, m.first_name AS manager_first_name, m.last_name AS manager_last_name
        FROM employee e
        JOIN role r ON e.role_id = r.id
        JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id;
    `;
    const result = await db.query(query);
    return result.rows;
};