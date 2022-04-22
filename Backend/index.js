//Express Application
const express = require("express");
const app = express();


//CORS 
const cors = require('cors')
app.use(cors())

//Environment variable using dotenv
const dotenv = require("dotenv");
dotenv.config();

//Creating connection to database
const mongooseConnection = require('./config/database')

//API Routes for CRUD operations
const testRoute = require('./routes/test')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const shopRoute = require('./routes/shop')
const cartRoute = require('./routes/cart')

//Defining api endpoints
app.use(express.json());
app.use("/api/test",testRoute);
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute)
app.use("/api/shop",shopRoute)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)

app.listen(3001);
console.log("Server listening on 3001");