const Pelicula = require('../models/media')

exports.agregar = async (req, res)=>{
    const pelicula = new Pelicula(req.body);
    await pelicula.save();
    res.json(pelicula);
}

exports.visualizar = async (req, res)=>{
    const peliculas = await Pelicula.find();
    res.json(peliculas);
}

exports.actualizar = async (req, res)=>{
    const idPelicula = req.params.id;
    const pelicula = req.body;
    const actualizarPelicula = await Pelicula.findByIdAndUpdate({_id: idPelicula}, {$set: pelicula});
    res.json("pelicula actualizada");
}

exports.eliminar = async (req, res)=>{
    const idPelicula = req.params.id;
    const eliminarPelicula = await Pelicula.findByIdAndDelete({_id: idPelicula});
    res.json("Pelicula eliminada exitosamente")}