SELECT
    employee.id,
    employee.first_name,
    employee.last_name,
    department.department_name AS department_name,
    role.salary AS salary,
    role.jobs_title AS jobs_title,
    CONCAT(manager.first_name, " ", manager.last_name) AS manager
FROM
    employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON manager.id = employee.manager_id