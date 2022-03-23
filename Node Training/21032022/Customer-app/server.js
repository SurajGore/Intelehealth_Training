const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
// Configuring the database
const dbConfig = require('./Config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology:true 
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Cross origin resource sharing (CORS)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 
    "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Customer FeedBack application."});
});
require('./app/routes/customer.route')(app);


// listen for requests
app.listen(2200, () => {
    console.log("Server is listening on port 2200");
});