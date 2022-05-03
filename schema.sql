DROP DATABASE IF EXISTS employeeTracer_db;

CREATE DATABASE employeeTracer_db;

USE employeeTracer_db;

CREATE TABLE viewDepartments (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE viewRoles (
	id INT NOT NULL AUTO_INCREMENT,
	jobs_title VARCHAR(30),
	salary INT NOT NULL,
	viewDepartments_id INT,
	PRIMARY KEY (id) -- FOREIGN KEY (viewDepartement_id) REFERENCES viewDepartements(id) ON DELETE
	-- SET
	-- 	NULL
);

CREATE TABLE viewEmployees (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	viewRole_id VARCHAR (30),
	manager_id INT,
	PRIMARY KEY (id)
);

-- salary INT NOT NULL,

-- manager_report VARCHAR(30),

-- FOREIGN KEY (viewDepartement_id) REFERENCES viewDepartements(id) ON DELETE

-- SET

-- 	NULL FOREIGN KEY (role_id) REFERENCES viewRoles(role_id) ON DELETE

-- SET

-- 	NULL FOREIGN KEY (salary_id) REFERENCES viewRoles(salary) ON DELETE

-- SET

-- 	NULL