const Product = require("../models/Product.model");



module.exports.getAllProducts=(req, res) => {
        Product.find({})
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    }


    module.exports.createProduct= (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    },

module.exports.getOneProduct=(req, res) => {
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err));
    }


module.exports.DeleteOneProduct=(req , res) =>{
    Product.deleteOne({ _id: req.params.id })
    .then(result =>res.json("Delete with "))
    .catch((err) => console.log(err));
}

module.exports.updateProduct= (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => console.log(err));
}