const express = require('express');
const rutas = express.Router();
const controller = require('../controllers/generoController');

rutas.post('/', controller.agregar);
rutas.get('/', controller.visualizar);
rutas.patch('/:id', controller.actualizar);
rutas.delete('/:id', controller.eliminar);
module.exports = rutas;