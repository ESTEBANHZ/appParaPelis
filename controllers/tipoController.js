const Tipo = require('../models/tipo')

exports.agregar = async (req, res)=>{
    const tipo = new Tipo(req.body);
    await tipo.save();
    res.json(tipo);
}

exports.visualizar = async (req, res)=>{
    const tipos = await Tipo.find();
    res.json(tipos);
}

exports.actualizar = async (req, res)=>{
    const idTipo = req.params.id;
    const tipo = req.body;
    const actualizarTipo = await Tipo.findByIdAndUpdate({_id: idTipo}, {$set: tipo});
    res.json("tipo actualizado");
}

exports.eliminar = async (req, res)=>{
    const idTipo = req.params.id;
    const eliminarTipo = await Tipo.findByIdAndDelete({_id: idTipo});
    res.json("se ha eliminado exitosamente")
}