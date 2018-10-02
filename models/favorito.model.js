'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoritoSchema = Schema({
    title: String,
    description: String,
    url: String,
    image: String,
    star: {type: Number, default: 0}
});


module.exports = mongoose.model('Favorito', FavoritoSchema);