'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = Schema({
    title: String,
    path: String,
    favorito: {type: Schema.ObjectId, ref: 'Favorito'}
});


module.exports = mongoose.model('Image', ImageSchema);