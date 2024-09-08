const express = require("express");

const {PORT} = require("../src/config/serverConfig");

const setupAndStartServer = async () => {

    // create the express object 
    const app = express();
    const PORT = 3000;

    app.listen(3000, ()=> {
        console.log(`Server started on port no : ${PORT}`)
    })
}

setupAndStartServer();