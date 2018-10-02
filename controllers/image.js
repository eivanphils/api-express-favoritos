'use strict';
const Image = require('../models/image.model');
const Favorito = require('../models/favorito.model');

function getImage(req, res) {
    let imageId = req.params.id;

    Image.findById(imageId, (err, image) =>{
        if (err){
            res.status(500).send({message:'Error en la peticion'});
        }else{
            if(!image){
                res.status(404).send({ message: 'no existe la imagen' });
            }else{
                Favorito.populate(image, {path: 'favorito'}, (err, image) =>{
                    if (err){
                        res.status(500).send({message: 'Error en la peticion'});
                    }else{
                        res.status(200).send({ message: 'imagen encontrado', data: image });
                    }
                })
            }
        }
    });
}
function getImages(req, res) {
    let favoritoId = req.params.favorito;
    console.log('favoritoId', favoritoId)

    let query;
    if (!favoritoId){
        query = Image.find({}).sort({title: 1});
    }else{
        query = Image.find({favorito: favoritoId})
                .populate('favorito')
                .sort({title: 1})
    }

    query.exec((err, images) =>{
        if (err){
            res.status(500).send({message: 'Error al devolver las imagenes'});
        }else{
            if(!images){
                res.status(404).send({message: 'No hay imagenes'});
            }else{
                res.status(200).send({
                    message: 'imagenes con favorito',
                    data: images
                });
            }
        }
    });
}

function saveImage(req, res) {
    let image = new Image();
    let params = req.body;

    image.title = params.title;
    image.path = null;
    image.favorito = params.favorito;

    image.save((err, imageStored)=>{
        if (err){
            res.status(500).send({message: 'Error al guardar la imagen'});
        }else{
            if(!imageStored){
                res.status(404).send({message: 'No hay marcadores'});
            }else{
                res.status(200).send({
                    message: 'image guardado exitosamente',
                    data: image
                });
            }
        }
    });
}

module.exports = {
    getImage,
    getImages,
    saveImage
};
