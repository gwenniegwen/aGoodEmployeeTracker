const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table")

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "@LightWork1",
    database: "employee_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "userChoice",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Employees",
                "View Department",
                "View Role",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",

                "EXIT",
            ]
        })
        .then(function (answer) {
            switch (answer.userChoice) {

                case "View Employees":
                    viewAll();
                    break;

                case "View Department":
                    viewDepartment();
                    break;

                case "View Role":
                    viewRole();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Update Employee Role":
                    updateEmployee();
                    break;

                case "Exit":
                    connection.end();
                    process.exit();
            }
        });
}
// function viewAll() {
//     const query = "SELECT * FROM employee"
//     connection.query(query, function (err, res) {
//         if (err)
//             throw err


//         })
//         .then(function (answer) {

//             console.log(answer)

//         })
//     }
const viewAll = () => {
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id AS manager FROM employee_db.employee LEFT JOIN employee_db.role On employee.role_id = role.id LEFT JOIN employee_db.department ON role.department_id = department.id",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            start();
        });
}


function viewDepartment() {
    const query = "SELECT * FROM department"
    connection.query(query, function (err, res) {
        if (err)
            throw err

        // console.table(res);
        const choices = res.map(row => row.name)
        inquirer
            .prompt({
                name: "userSelection",
                type: "checkbox",
                message: "Select the Department you wish to view",
                choices: choices,
            })
            .then(function (answer) {
                const displayData = res.filter(row => answer.userSelection.includes(row.name))
                console.table(displayData)
                // connection.query(query, function (err, res) {
                //     if (err)
                //         throw err

                //     console.table(res);
                //     start()
                // })
            })
    })
}
const viewRole = () => {

    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);

        start();
    });
}


function addEmployee() {
    const query = "SELECT * FROM role"
    connection.query(query, function (err, res) {
        if (err)
            throw err

        // console.table(res);
        const choices = res.map(row => row.title)
        inquirer
            .prompt([{
                name: "firstName",
                type: "input",
                message: "What is the first name of the employee you wish to add"
            },

                {
                    name: "lastName",
                    type: "input",
                    message: "What is the last name of the employee you wish to add"
                },

                {
                    name: "employeeRole",
                    type: "list",
                    message: "What is the role of the employee you wish to add",
                    choices: choices
                }
            ]).then(function (answer) {
              console.table(answer)
              const query = "INSERT * INTO role"
              connection.query(query, function (err, res) {
                  if (err)
                      throw err
            })
            

    })
    }

// function addDepartment() { }
// function addRole() { }
// function updateEmployee() { }

//create a question spefic to managers
//.then would return a conditional (if/else)
//what is the role of the employee you wish to add?