INSERT INTO department (name) VALUES
('Engineering'),
('Sales'),
('Human Resources');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 80000, 1),
('Sales Manager', 60000, 2),
('HR Specialist', 50000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, NULL),
('Mike', 'Johnson', 3, 1);