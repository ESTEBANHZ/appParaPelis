const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/pelison';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Base de datos enlazada exitosamente');
});