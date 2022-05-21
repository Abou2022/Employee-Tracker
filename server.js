const mysql = require("mysql");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
// const PORT = process.env.PORT || 3001;

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
    .prompt(
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
    )
    .then((answer) => {
      if (answer.menu === "view all departments") {
        viewAllDepartement();
      } else if (answer.menu === "view all roles") {
        viewAllRolest();
      } else if (answer.menu === "view all employees") {
        viewAllEmployee();
      } else if (answer.menu === "add department") {
        addDepartement();
      } else if (answer.menu === "add roles") {
        addRoles();
      } else if (answer.menu === "add employee") {
        addEmployee();
      } else if (answer.menu === "update an employee role") {
        updateEmployeeRole();
      } else {
        process.exit();
       
      }
    });
}

const viewAllDepartement = () => {
  db.query("SELECT * FROM department", function (err, answers) {
    if (err) {
      console.log(err)
    }
    console.table(answers);
    menu();
  });
};
const viewAllRolest = () => {
  db.query("SELECT role.id AS id, role.jobs_title AS jobs_title, department.department_name AS department_name, role.salary AS salary FROM role LEFT JOIN department ON role.department_id = department.id;", 
  function (err, answers) {
    if (err) {
      console.log(err)
    }
    console.table(answers);
    menu();
  });
};
 
const viewAllEmployee = () => {
  db.query( `SELECT
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
  LEFT JOIN employee manager ON manager.id = employee.manager_id`, function (err, answers) {
    if (err) {
      console.log(err)
    }
    console.table(answers);
    menu();
  });
};

const addDepartement = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "add the new department name: ",
        name: "department_name",
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO department (department_name) VALUES (?)`,
        [answers.department_name],
      function  (err, data) {
        console.log("Added departmnet")
        if (err) {
          console.log(err)
        }
        // console.log(`${answers.department_name} add to DATABASE`);
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
        message: " add the jobs_title: ",
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
        name: "department_id",
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO role (jobs_title, salary, department_id) VALUES (?,?,?)`,
        [answers.jobs_title, answers.salary, answers.department_id],
        (err, data) => {

          console.log("role")
          // if(err){
          //   console.log(err)
          // }
          // console.log(`Add role ${answers.jobs_title}`);
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

const updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Choose the employee ID you want to update",
        name: "employee_id",
      },
      {
        type: "input",
        message: "update role_id",
        name: "role_id",
      },
    ])
    .then((answers) => {
      db.query(
        `UPDATE employee SET role_id ? WHERE id = ?`, [answers.jobs_title , answers.employee_id],
        (err, data) => {
          console.ta("update employee");
          menu();
        }
      );
    });
};



