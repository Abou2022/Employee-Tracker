const mysql = require("mysql");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const PORT = process.env.PORT || 3001;

//Connect to datebase
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employeeTracer_db",
  },
  console.log(`Connected to the datebase`)
);
menu();
function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add department",
          "add roles",
          "add employee",
          "update an employee role",
        ],
      },
    ])
    .then((answer) => {
      if (answer.menu == "view all department") {
        viewAllDepartement();
      } else if (answer.menu == "view all roles") {
        viewAllRolest();
      } else if (answer.menu == "view all employees") {
        viewAllEmployee();
      } else if (answer.menu == "add department") {
        addDepartement();
      } else if (answer.menu == "add roles") {
        addRoles();
      } else if (answer.menu == "add employee") {
        addEmployee();
      } else if (answer.menu == "update employee role") {
        updateEmployeeRole();
      } else {
        process.exit();
      }
    });
}

const viewAllDepartement = () => {
  db.query("SELECT * FROM viewDepartments", function (err, answers) {
    console.log(answers);
    menu();
  });
};
const viewAllRolest = () => {
  db.query("SELECT * FROM viewRoles", function (err, answers) {
    console.log(answers);
    menu();
  });
};
const viewAllEmployee = () => {
  db.query("SELECT * FROM viewEmployees", function (err, answers) {
    console.log(answers);
    menu();
  });
};
const addDepartement = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "add department",
        name: "department_name",
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO department (department_name) VALUES (?)`,
        [answers.department_name],
        (err, data) => {
          console.log("Add department");
          menu();
        }
      );
    });
};

const addRoles = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "add job",
        name: "jobs_title",
      },
      {
        type: "input",
        message: "add salary",
        name: "salary",
      },
      {
        type: "input",
        message: "add departments_id",
        name: "departments_id",
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO role (jobs_title, salary, department_id) VALUES (?)`,
        [answers.jobs_title, answers.salary, answers.department_id],
        (err, data) => {
          console.log("Add role");
          menu();
        }
      );
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "add first_name",
        name: "first_name",
      },
      {
        type: "input",
        message: "add last_name",
        name: "last_name",
      },
      {
        type: "input",
        message: "add role_id",
        name: "role_id",
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?)`,
        [answers.first_name, answers.last_name, answers.role_id],
        (err, data) => {
          console.log("Add employee");
          menu();
        }
      );
    });
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
