'use strict'
const Favorito = require('../models/favorito.model');

function prueba(req, res) {
    let name = '';
    if (req.params.name) {
        name = req.params.name;
    }
    res.status(200).send({message: 'Hola mundoooo! para ' + name})
}

function getFavorito(req, res) {
    let favoritoId = req.params.id;

    Favorito.findById(favoritoId, (err, favorito)=>{
        if (err){
            res.status(500).send({message: 'Error al devolver el marcador'});
        }else{
            if(favorito.length === 0){
                res.status(404).send({message: 'No existe el marcador'});
            }else{
                res.status(200).send({favorito});
            }
        }
    });
}

function getFavoritos(req, res) {
    Favorito.find({}).sort({title: 1}).exec((err, favoritos) =>{
       if (err){
           res.status(500).send({message: 'Error al devolver los marcadores'});
       }else{
           if(favoritos.length === 0){
               res.status(404).send({message: 'No hay marcadores'});
           }else{
               res.status(200).send({
                   favoritos: favoritos
               });
           }
       }
    });
}

function saveFavoritos(req, res) {
    let favorito = new Favorito();
    let params = req.body;

    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;
    favorito.image = params.image;

    favorito.save((err, favorito)=>{
        if (err){
            res.status(500).send({message: 'Error al guardar el marcador'});
        }else{
            res.status(200).send({
                message: 'Favorito guardado exitossamente',
                favorito: favorito
            });
        }
    });
}

function updateFavoritos(req, res) {
    let params = req.body;
    let favoritoId = req.params.id;

    Favorito.findByIdAndUpdate(favoritoId, params, (err, favorito)=>{
        if (err){
            res.status(500).send({message: 'Error al devolver el marcador'});
        }else{
            res.status(200).send({favorito});
        }
    });
}

function deleteFavoritos(req, res) {
    let favoritoId = req.params.id;

    Favorito.findById(favoritoId, (err, favorito) =>{
        if (err){
            res.status(500).send({message: 'Error al eliminar el favorito'});
        }else{
            if(favorito.length === 0){
                res.status(404).send({message: 'No existe el favorito a eliminar'});
            }else{
                favorito.remove(err =>{
                    if (err){
                        res.status(500).send({message: 'Error al borrar el favorito'});
                    }else{
                        res.status(200).send({message: 'Favorito eliminado'});
                    }
                });
            }
        }
    });
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavoritos,
    updateFavoritos,
    deleteFavoritos
}