'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X.Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE');
    res.header('Allow', 'GET, PUT, POST, OPTIONS, DELETE');
    next();
});
app.use('/api', api);


module.exports = app;