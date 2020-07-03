const express = require('express');
const router = express.Router();



//load productModel, this is a local module we need to specify the path
const productModel = require("../models/product");


//show all products
router.get("/list", (req, res) => {
    res.render("products/productList", {
        title: "Product List Page",
        products: productModel.getAllProducts()
    });
});

//add product form
router.get("/add", (req, res) => {
    res.render("products/productAdd", {
        title: "Product Add Form"
    });
});


router.post("/add", (req, res) => {
    res.render();
});

module.exports = router;
