const Director = require('../models/director')

exports.agregar = async (req, res)=>{
    const director = new Director(req.body);
    await director.save();
    res.json(director);
}

exports.visualizar = async (req, res)=>{
    const director = await director.find();
    res.json(director);
}

exports.actualizar = async (req, res)=>{
    const idDirector = req.params.id;
    const director = req.body;
    const actualizarDirector = await Director.findByIdAndUpdate({_id: idDirector}, {$set: director});
    res.json("Director actualizado");
}

exports.eliminar = async (req, res)=>{
    const idDirector = req.params.id;
    const eliminarDirector = await Director.findByIdAndDelete({_id: idDirector});
    res.json("Director eliminado exitosamente")}