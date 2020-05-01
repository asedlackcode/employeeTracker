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
            "View all Employee's",
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
    if(answers.menuOptions === "View all Employee's") {
        viewEmployees();
    } else  {
        console.log("err");
    }
    
})
};

let viewEmployees = () => {
    connection.query(`SELECT * FROM employees`, function (err,res) {
        if (err) throw err;
        console.table(res);
        inquirer.prompt([{
            name: "choice", 
            type: "list",
            choices : function() {
                var choiceArray = [];
                for (var i =0; i < res.length; i++) {
                    choiceArray.push(res[i].first_name);
                    {
                        return choiceArray;
                    }
                }
               
            }, message: "Which employee would you like to edit?"
        }])
    })
}
/*function viewEmployees() {
    inquirer.prompt[({
        type: "list",
        message: "Choose an Employee",
        name: "allEmployeeChoice",
        choices: `SELECT first_name last_name FROM employees`
    })]
}*/
viewEmployees();