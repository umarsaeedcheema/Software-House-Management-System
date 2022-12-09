const dotenv = require("dotenv");
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
dotenv.config({ path: ".env" });
const { promisify } = require("util");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

/*
//DO NOT MODIFY ANY PART OF THIS CODE USELESS TOLD TO DO SO.
*/
/*Add you connestion details to the env file*/

var connectionString = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
});
function createTable(CreateQuerry) {
  console.log(CreateQuerry);
  /*
    The function is responsible for creating tables in your database. Do not modify it.

    */
  return new Promise((resolve, reject) => {
    connectionString.query(CreateQuerry, (err, result) => {
      if (err) {
        console.log("Table creation failed");
        reject(err);
      } else {
        console.log("Table created");
        resolve();
        //console.log(result);
      }
    });
  });
}

const createTablePromised = promisify(createTable);

/*
    Here you will be writing your create table queries and storing them in a const variable.

*/
const createUsersTable = `CREATE TABLE IF NOT EXISTS soft_management.users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`;

const createPrivilegeTable = `CREATE TABLE IF NOT EXISTS soft_management.privilege_level (
        id INT NOT NULL AUTO_INCREMENT,
        employee_id INT(10) NOT NULL,
        level INT(10) NOT NULL,
        PRIMARY KEY (id)
)`;

const createEmployeeReviewsTable = `CREATE TABLE IF NOT EXISTS soft_management.employee_reviews (
        id INT NOT NULL AUTO_INCREMENT,
        content VARCHAR(500) NOT NULL,
        created_at DATETIME NOT NULL,
        reviewed_by INT(10) NOT NULL,
        PRIMARY KEY (id, created_at)
)`;

// employee table
// added salary in this
const createEmployeeTable = `CREATE TABLE IF NOT EXISTS soft_management.employees (

    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    salary INT(10) NOT NULL,
    hired_on DATE NOT NULL,
    PRIMARY KEY (id)
)`;

const queries = [
"CREATE TABLE IF NOT EXISTS soft_management.employees (id int PRIMARY KEY, first_name varchar(255), last_name varchar(255), designation varchar(63), hired_on date)",
"CREATE TABLE IF NOT EXISTS soft_management.account_info (employee_id int, email_address varchar(255) PRIMARY KEY, password varchar(511), FOREIGN KEY (employee_id) REFERENCES employees(id))",
"CREATE TABLE IF NOT EXISTS soft_management.projects (id int NOT NULL AUTO_INCREMENT, name varchar(200), start_time DATE, end_time DATE, revenue int, client_id int, assigned_to_pm int, status varchar (200), PRIMARY KEY (id))",
"CREATE TABLE IF NOT EXISTS soft_management.tasks (id int PRIMARY KEY, task varchar(255), due_date timestamp, assigned_to int, project_id int, status varchar(255), FOREIGN KEY (assigned_to) REFERENCES employees(id), FOREIGN KEY (project_id) REFERENCES projects(id))",
"CREATE TABLE IF NOT EXISTS soft_management.assigned_swes (project_id int, employee_id int, FOREIGN KEY (project_id) REFERENCES projects(id), FOREIGN KEY (employee_id) REFERENCES employees(id))",
"CREATE TABLE IF NOT EXISTS soft_management.client_reviews (client_id int, project_id int, content varchar(250), submitted_by int, PRIMARY KEY(client_id, project_id, submitted_by))",
"CREATE TABLE IF NOT EXISTS soft_management.clients (client_id int NOT NULL AUTO_INCREMENT, name varchar(250), PRIMARY KEY (client_id))",
];

connectionString.connect((error) => {
  if (!error) {
    console.log("Connection has been established");
    connectionString.query(
      `CREATE DATABASE IF NOT EXISTS ${process.env.database}`,
      async (err2, result) => {
        if (err2) {
          console.log(err2);
        } else {
          console.log("Database Created");
          try {
            for (let i = 0; i < queries.length; i++) {
              CreateQuerry = queries[i];
              await createTable(CreateQuerry);
            }
            //call create table here using await like done below here.
          } catch (err) {
            console.log(err);
          }

          /*
                Here you will be calling the createTable function to create each table passing the above created 
                variable as a paramter to the function.
                */
          createTable(createUsersTable); //creates users table
          createTable(createPrivilegeTable); //creates privileges table
          createTable(createEmployeeReviewsTable); // creates employee reviews table
          createTable(createEmployeeTable); // creates employee table
          connectionString.end();
        }
      }
    );
  } else {
    console.log("Connection failed");
    console.log(error);
  }
});
