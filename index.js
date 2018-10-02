'use strict'

const app = require('./app');
const port = process.envPORT || 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursofavoritos', (err, res) =>{
    if (err){
        throw err;
    }else {
        app.listen(port, function () {console.log('application started')});
    }
});