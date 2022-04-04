//Express Application
const express = require("express");
const app = express();

//Environment variable using dotenv
const dotenv = require("dotenv");
dotenv.config();

//Creating connection to database
const mongooseConnection = require('./config/database')

//API Routes for CRUD operations
const testRoute = require('./routes/test')

//Defining api endpoints
app.use("/api/test",testRoute)

app.listen(3001);
console.log("Server listening on 3001");