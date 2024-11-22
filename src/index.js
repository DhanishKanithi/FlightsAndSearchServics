// IMPORTING DEPENDENCIES
const express = require("express");     // Core framework for building web applications and APIs
const bodyParser = require("body-parser");  // Middleware for parsing incoming request bodies (e.g., JSON or form data).

const {PORT} = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');


const setupAndStartServer = async () => {

    // create the express object 
    const app = express();  // Initializes an Express application object (app), which acts as the central object for routing and middleware.


    // body-parser is essential for handling incoming data in a variety of formats, such as JSON, URL-encoded form data, and raw or text data.
    // It transforms this data into a readable format under req. body for easier processing in your application.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', ApiRoutes);
    // The . use() method in express is a middleware handler, app. use() as we saw here will always run the contained middleware callback function
    // that it receives every time we get a request, and it does so like an event listener
    


    app.listen(PORT, ()=> {
        console.log(`Server started on port no : ${PORT}`)
    })
}

setupAndStartServer();