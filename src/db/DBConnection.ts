import mysql from "mysql2";
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "Saqib@1292", 
    database: "cars", 
});

console.log(connection);


connection.connect((err) => {
    if (err) {
        console.error("Connection error:", err);
        return;
    }
    console.log("Connected to the database!");
});

// connection.query();