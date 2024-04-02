const Genero = require('../models/genero')

exports.agregar = async (req, res)=>{
    const genero = new Genero(req.body);
    await genero.save();
    res.json(genero);
}

exports.visualizar = async (req, res)=>{
    const generos = await Genero.find();
    res.json(generos);
}

exports.actualizar = async (req, res)=>{
    const idGenero = req.params.id;
    const genero = req.body;
    const actualizarGeneros = await Genero.findByIdAndUpdate({_id: idGenero}, {$set: genero});
    res.json("generos actualizados");
}

exports.eliminar = async (req, res)=>{
    const idGenero = req.params.id;
    const eliminarGenero = await Genero.findByIdAndDelete({_id: idGenero});
    res.json("Genero eliminado exitosamente")}