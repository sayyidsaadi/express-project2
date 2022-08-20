const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const pageroute = require('./routes/page-router');

// Express Init
const app = express();

// Environment Variable
dotenv.config();
const PORT = process.env.PORT_SERVER;

// data manage
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// Folder Static
app.use(express.static('public'));

// Listen Server
app.listen(PORT, ()=>{
    console.log(`
        Server Is Running now on port ${PORT}
    `);
})


// Router Init
app.use(pageroute);

