const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const dotenv = require("dotenv");
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
dotenv.config({ path: ".env" });
const { promisify } = require("util");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// module.exports = {
//   foo: function () {
//     // whatever
//   },
//   bar: function () {
//     // whatever
//   }
// };

var connectionString = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
  });


function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function SeedUsers(amount) {
	for (let index = 0; index < amount; index++) {
		// const username = uniqueNamesGenerator({ dictionaries: [ adjectives, colors, animals ] });
		const employee_id = getRandomArbitrary(1, 100000);
		const password = getRandomArbitrary(10000, 100000000);
		const email = uniqueNamesGenerator({ dictionaries: [ adjectives, colors, animals ] }) + '@site.com';

		connectionString.query(
			'INSERT INTO soft_management.account_info (employee_id, email_address, password) VALUES (?,?,?)',
			[ employee_id, email, password ],
			(err, result) => {}
		);
	}
}
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
            /*
                  Here you will be calling the createTable function to create each table passing the above created 
                  variable as a paramter to the function.
                  */
            // createTable(createUsersTable); //creates users table
            // createTable(createPrivilegeTable); //creates privileges table
            // createTable(createEmployeeReviewsTable); // creates employee reviews table
            // createTable(createEmployeeTable); // creates employee table
            SeedUsers(15000);
            connectionString.end();
          }
        }
      );
    } else {
      console.log("Connection failed");
      console.log(error);
    }
  });
  
      
