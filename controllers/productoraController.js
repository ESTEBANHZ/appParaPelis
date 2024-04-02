const Productora = require('../models/productora')

exports.agregar = async (req, res)=>{
    const productora = new Productora(req.body);
    await productora.save();
    res.json(productora);
}

exports.visualizar = async (req, res)=>{
    const productoras = await Productora.find();
    res.json(productoras);
}

exports.actualizar = async (req, res)=>{
    const idProductora = req.params.id;
    const productora = req.body;
    const actualizarProductora = await Productora.findByIdAndUpdate({_id: idProductora}, {$set: productora});
    res.json("productora actualizada");
}

exports.eliminar = async (req, res)=>{
    const idProductora = req.params.id;
    const eliminarProductora = await Productora.findByIdAndDelete({_id: idProductora});
    res.json("se ha eliminado exitosamente")}