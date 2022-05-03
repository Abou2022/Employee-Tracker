INSERT INTO
	viewDepartments (department_name)
VALUES
	("Human resources"),
	("Technicien"),
	("Admin"),
	("Management"),
INSERT INTO
	viewRoles (jobs_title, salary, viewDepartments_id)
VALUES
	("Director", 150000, 1),
	("Office Chef", 95000, 2),
	("Engineer", 90000, 3),
	("Intern", 80000, 4),
INSERT INTO
	viewEmployees (first_name, last_name, viewRole_id, manager_id)
VALUES
	("Bak", "Syl", "Director", NULL),
	("Lora", "Maken", "Office Chef", 1),
	("Joel", "Park", "Engineer", 2),
	("Sarah", "Delo", "Intern", 3),