'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const favorito_routes = require('./routes/favorito');
const image_routes = require('./routes/image')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X.Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE');
    res.header('Allow', 'GET, PUT, POST, OPTIONS, DELETE');
    next();
});
app.use('/api', favorito_routes);
app.use('/api', image_routes);


module.exports = app;