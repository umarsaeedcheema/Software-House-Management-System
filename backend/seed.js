const dotenv = require("dotenv");
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const csv = require("csv-parser");
dotenv.config({ path: ".env" });
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//DO NOT MODIFY ANY PART OF THIS CODE USELESS TOLD TO DO SO.
/*Add you connestion details to the env file*/
let dataSetPath = "PRECON";
const readdir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (error, filenames) => {
      if (error) {
        reject(error);
      } else {
        resolve(filenames);
      }
    });
  });
};

var connectionString = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
async function reader(file) {
  const results = [];
  return new Promise(function (resolve, reject) {
    fs.createReadStream(file)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        resolve(results);
      });
  });
}

// function seedData(query) {
//   /*
//     Call this fuction to  insert a record into your db to the respective table using
//     the query.The variable query corresponds to the sql query you will write to accomplish this.
//      */

//   connectionString.query(query, (err2, result) => {
//     if (err2) {
//       console.log("Seeding Failed");
//       console.log(err2);
//     } else {
//       console.log("Seeding done");
//     }
//   });
// }

function seedData(query) {
  /*
        Call this fuction to  insert a record into your db to the respective table using 
        the query.The variable query corresponds to the sql query you will write to accomplish this. 
        */
  return new Promise((resolve, reject) => {
    connectionString.query(query, (err2, result) => {
      if (err2) {
        console.log("Seeding Failed");
        reject(err2);
      } else {
        resolve();
        console.log("Seeding done");
      }
    });
  });
}

connectionString.connect(async (err) => {
  if (err) {
    console.log(err);
  } else {
    let fileClient = await reader("../../clients.csv");
    console.log(fileClient[0]);
    // let fileContentMeta = await reader("../../account_info.csv");
    // let fileContentEmployees = await reader("../../employees.csv");
    /* The file content from the metadata has been read for you here.
        You can write code over here to add the columns to your respective tables depending on
        your schema
        */

    let insertClientQuery = `INSERT INTO clients (client_id, name) VALUES ('${fileClient[0]["client_id"]}', '${fileClient[0]["client_name"]}') `;
    for (let i = 1; i < fileClient.length; i++) {
      insertClientQuery += `, ('${fileClient[i]["client_id"]}' ,'${fileClient[i]["client_name"]}' )`;
    }
    await seedData(insertClientQuery);

    // let account_infoQuery = `INSERT INTO account_info (employee_id, email_address, password) VALUES ('${fileContentMeta[0]["employee_id"]}', '${fileContentMeta[0]["email_address"]}', '${fileContentMeta[0]["password"]}' ) `;
    // for (let i = 1; i < fileContentMeta.length; i++) {
    //   account_infoQuery += `, ('${fileContentMeta[i]["employee_id"]}' ,'${fileContentMeta[i]["email_address"]}' , '${fileContentMeta[i]["password"]}'   )`;
    // }

    // let insertEmployeesQuery = `INSERT INTO employees (id, first_name, last_name, designation, hired_on) VALUES ('${fileContentEmployees[0]["id"]}', '${fileContentEmployees[0]["first_name"]}', '${fileContentEmployees[0]["last_name"]}', '${fileContentEmployees[0]["designation"]}', '${fileContentEmployees[0]["hired_on"]}' ) `;
    // for (let i = 1; i < fileContentEmployees.length; i++) {
    //   insertEmployeesQuery += `, ('${fileContentEmployees[i]["id"]}' ,'${fileContentEmployees[i]["first_name"]}' , '${fileContentEmployees[i]["last_name"]}' , '${fileContentEmployees[i]["designation"]}' , '${fileContentEmployees[i]["hired_on"]}'  )`;
    // }
    // await seedData(insertEmployeesQuery);

    // await seedData(account_infoQuery);

    connectionString.end();
  }
});
