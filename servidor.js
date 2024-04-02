const express = require('express');
require('./database');
const app = express();
app.use(express.json());
const tipoRoutes = require('./routes/tipoRoutes')
const productoraRouter = require('./routes/productoraRouter');
const generoRouter = require('./routes/generoRouter');
const directorRouter = require('./routes/directorRouter');
const mediaRouter = require('./routes/mediaRouter');

async function aplication(){
    await app.listen(3055);
    console.log('servidor establecido => 3055');
}

app.get('/', (req, res)=>{
    res.send("HI, do you speak spanish?");
})

app.use('/tipo', tipoRoutes)
app.use('/productoras', productoraRouter);
app.use('/generos', generoRouter);
app.use('/directores', directorRouter);
app.use('/media', mediaRouter);
aplication();

