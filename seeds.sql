USE employeetracker_db;

INSERT INTO department (name)
VALUES ("Production");
INSERT INTO department (name)
VALUES ("Research and Development"); 
INSERT INTO department (name)
VALUES ("Purchasing"); 
INSERT INTO department (name)
VALUES ("Marketing"); 
INSERT INTO department (name)
VALUES ("HR");
INSERT INTO department (name)
VALUES ("Accounting and Finance");  

USE employeetracker_db;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Austin", "Sedlack", "7", null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Krystalyn", "Sedlack", "3", "1");
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Beccerra", "4", null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Vasquez", "5", "1");
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Cam", "Sedlack", "2", "1");
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Dyno", "Sedlack", "1", "1");
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Sedlack", "3", "1");
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Abby", "Beccerra", "4", "3");

USE employeetracker_db;

INSERT INTO role (title,salary,department_id)
VALUES ("Big Boss", "99999", "7");
INSERT INTO role (title,salary,department_id)
VALUES ("Intern", "20000", "2");
INSERT INTO role (title,salary,department_id)
VALUES ("Team Leader", "35000", "4");
INSERT INTO role (title,salary,department_id)
VALUES ("Assistant", "65999", "1");