INSERT INTO
    department (department_name)
VALUES
    ("Human resources"),
    ("Technicien"),
    ("Admin"),
    ("Management");

INSERT INTO
    role (jobs_title, salary, department_id)
VALUES
    ("Director", 150000, 1),
    ("Office Chef", 95000, 2),
    ("Engineer", 90000, 3),
    ("Intern", 80000, 4);

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Bak", "Syl", 1, NULL),
    ("Lora", "Maken", 2, 1),
    ("Joel", "Park", 3, 2),
    ("Sarah", "Delo", 4, 3);