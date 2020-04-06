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
    database: "employee_DB"
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

                case "View All Employees":
                    viewAll();
                    break;

                case "View All Employees By Department":
                    viewDepartment();
                    break;

                case "View Employees By Role":
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
function viewAll() {

}
function viewDepartment() {

    inquirer
        .prompt({
            name: "userSelection",
            type: "input",
            message: "Select the Department you wish to view"
        })
        .then(function (answer) {
            let query = "SELECT "
            connection.query(query, function (err, res) {
                if (err) 
                throw err
                
                console.table(res);
                start()
            })
        })
}
function viewRole() { }
function addEmployee(); { }
function addDepartment() { }
function addRole() { }
function updateEmployee() { }

