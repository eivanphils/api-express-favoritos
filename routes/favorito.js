'use strict'

const express = require('express');
const FavoritoController = require('../controllers/favorito');
const api = express.Router();

api.get('/favorito/:id', FavoritoController.getFavorito);
api.get('/favoritos', FavoritoController.getFavoritos);
api.post('/favorito', FavoritoController.saveFavoritos);
api.put('/favorito/:id', FavoritoController.updateFavoritos);
api.delete('/favorito/:id', FavoritoController.deleteFavoritos);

module.exports = api;

