const ProductController = require("../controllers/Product.controller");



module.exports = (app) => {
    app.get("/api/products", ProductController.getAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.getOneProduct);
    app.put("/api/updateProduct/:id", ProductController.updateProduct);
    app.delete("/api/deleteProduct/:id", ProductController.DeleteOneProduct);
};