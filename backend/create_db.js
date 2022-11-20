const dotenv = require("dotenv");
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser')
dotenv.config({path:".env"});
const { promisify } = require("util");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

/*
//DO NOT MODIFY ANY PART OF THIS CODE USELESS TOLD TO DO SO.
*/ 
/*Add you connestion details to the env file*/
var connectionString = mysql.createConnection(
    {
        host:process.env.host,
        user: process.env.user,
        password:process.env.password
    }
);
function createTable(CreateQuerry)
{
    console.log(CreateQuerry)
    /*
    The function is responsible for creating tables in your database. Do not modify it.

    */
   return new Promise((resolve, reject)=>{
    connectionString.query(CreateQuerry,
        (err,result)=>
        {
            if(err)
            {
                console.log("Table creation failed");
                reject(err);
            }
            else
            {
                console.log("Table created");
                resolve()
                //console.log(result);
            }
        });

   });
}
    


const createTablePromised = promisify(createTable)

/*
    Here you will be writing your create table queries and storing them in a const variable.

*/
const queries = ["CREATE TABLE IF NOT EXISTS soft_management.account_info (email_address varchar(200) PRIMARY KEY, password varchar(200))",];



connectionString.connect( (error)=>
{
    if(!error)
    {
        console.log("Connection has been established");
        connectionString.query(`CREATE DATABASE IF NOT EXISTS ${process.env.database}`, async (err2,result) =>
        {
            if(err2)
            {
                console.log(err2);
            }
            else
            {
                console.log("Database Created");
                try{
                    for (let i = 0; i < queries.length ;i ++)
                    {
                        CreateQuerry = queries[i];
                        await createTable(CreateQuerry);
                    }
                    //call create table here using await like done below here.                    
                }
                catch(err)
                {
                    console.log(err)
                }
                

                /*
                Here you will be calling the createTable function to create each table passing the above created 
                variable as a paramter to the function.
                */
                connectionString.end();
            }
        });
    }
    else
    {
        console.log("Connection failed");
        console.log(error);
    }
});