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
    connection.query(`SELECT * FROM employees`, function (err,res) {
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
    connection.query(`SELECT * FROM department`, function(err, res) {
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
    connection.query(`SELECT * FROM employees`, function(err, res) {
        if (err) throw err;
        const choices = departmentList(res);
        console.table(res);
        inquirer.prompt([{
            name: "choice",
            type: "list",
            choices : choices,
            message: "Which Manager ID would you like to choose?"
        }])
    })
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
    var choiceArray = results.map(result => result.role);
    return choiceArray;
}