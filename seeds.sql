
USE employee_db;

INSERT INTO department (name)
VALUES ("Accounting"),("Sales"),("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Cashier", 30000, 2),("Accountant", 20000, 1),("Engineer", 10000, 3);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Mario", "Speedwagon", 1, 1 ), ("Gail", "Forcewind", 1, 2)
,("Petey","Cruiser",1 ,3 );



