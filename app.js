const mysql = require("mysql");
const inquirer = require("inquirer");



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hello1234',
    database: 'employeetracker_db'
});

connection.connect (function (err) {
    if (err) throw err;
    console.log("connected");
    
})

let mainMenu = () => {
     inquirer.prompt([{
        type: "list",
        message: "What would you like to do?",
        name: "menuOptions",      
        choices: [
            "View all Employees",
            "View all Employees by Department",
            "View all Employees by Manager",
            "Add an Employee",
            "Remove an Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View all Roles"
        ],       
    }
]).then(answers => {
    console.log(answers.menuOptions)
    if(answers.menuOptions === "View all Employees") {
        viewEmployees();
    } else if (answers.menuOptions === "View all Employees by Department"){
        viewByDepartment();
    } else if (answers.menuOptions === "View all Employees by Manager"){
        viewByManager();
    }  else if (answers.menuOptions === "Add an Employee"){
        addEmployee();
    } else if (answers.menuOptions === "Remove an Employee"){
        removeEmployee();
    } else if (answers.menuOptions === "Update Employee Role"){
        updateRole();
    } else if (answers.menuOptions === "Update Employee Manager"){
        updateManager();
    } else if (answers.menuOptions === "View all Roles"){
        viewRoles();
    }
    
})
};

let viewEmployees = () => {
   return  connection.query("SELECT employees.id, employees.first_name, employees.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN role on employees.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employees manager on manager.id = employees.manager_id;", function (err,res) {
        if (err) throw err;
        const choices = nameList(res);
        console.table(res);
        inquirer.prompt([{
            name: "choice", 
            type: "list",
            choices : choices,
               
             message: "Which employee would you like to choose?"
        }])
    })
}

let viewByDepartment = () => {
     return connection.query("SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employees LEFT JOIN role on employees.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name", function(err, res) {
        if (err) throw err;
        const choices = departmentList(res);
        console.table(res);
        inquirer.prompt([{
            name: "choice",
            type: "list",
            choices : choices,
            message: "Which department would you like to choose?"
        }])
    })
}

let viewByManager = () => {
    connection.query("SELECT employees.id, employees.first_name, employees.last_name, department.name AS department, role.title FROM employees LEFT JOIN role on role.id = employees.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id", function(err, res) {
        if (err) throw err;
        const choices = managerList(res);
        console.table(res);
        inquirer.prompt([{
            name: "choice",
            type: "list",
            choices : choices,
            message: "Which Manager ID would you like to choose?"
        }])
    })
}

let addEmployee = () => {
    
    const employee =  prompt([
        {
            name: "first_name",
            message: "What is your employee's first name?"
        },
        {
            name: "last_name",
            message: "What is your employee's last name?"
        }
    ]);

    
    
}
mainMenu();
const nameList = (results) => {
    var choiceArray = results.map(result => result.first_name); 
     return choiceArray;
 }
    
const departmentList = (results) => {
    var choiceArray = results.map(result => result.first_name); 
        return choiceArray;
}

const managerList = (results) => {
    var choiceArray = results.map(result => result.id);
    return choiceArray;
}