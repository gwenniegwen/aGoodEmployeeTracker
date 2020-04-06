CREATE DATABASE employee_db;

USE employee_DB;

CREATE TABLE department(
id INTEGER AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary INT NOT NULL,
department_id INTEGER NOT NULL,
 
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,
manager_id INTEGER DEFAULT NULL, 
role_id INTEGER NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES role (id),
FOREIGN KEY (manager_id) REFERENCES role (id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;