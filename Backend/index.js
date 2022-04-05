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
const userRoute = require('./routes/user')

//Defining api endpoints
app.use(express.json())
app.use("/api/test",testRoute)
app.use("/api/auth",userRoute)

app.listen(3001);
console.log("Server listening on 3001");