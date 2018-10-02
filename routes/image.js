'use strict'

const express = require('express');
const ImageController = require('../controllers/image');
const api = express.Router();

api.get('/image/:id', ImageController.getImage);
api.get('/images/:favorito?', ImageController.getImages);
api.post('/image', ImageController.saveImage);
api.put('/image/:id', ImageController.updateImage);
api.delete('/image/:id', ImageController.deleteImage);

module.exports = api;

