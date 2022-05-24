DROP DATABASE IF EXISTS employeeTracer_db;

CREATE DATABASE employeeTracer_db;

USE employeeTracer_db;

-- Each table with Data

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) UNIQUE NOT NULL
);

-- Each table with Data

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    jobs_title VARCHAR(30),
    salary INT NOT NULL,
    department_id INT,
    PRIMARY KEY (id) -- FOREIGN KEY (viewDepartement_id) REFERENCES viewDepartements(id) ON DELETE
    -- SET
    -- 	NULL
);

-- Each table with Data

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

-- salary INT NOT NULL,

-- manager_report VARCHAR(30),

-- FOREIGN KEY (viewDepartement_id) REFERENCES viewDepartements(id) ON DELETE

-- SET

-- 	NULL FOREIGN KEY (role_id) REFERENCES roles(role_id) ON DELETE

-- SET

-- 	NULL FOREIGN KEY (salary_id) REFERENCES roles(salary) ON DELETE

-- SET

-- 	NULL