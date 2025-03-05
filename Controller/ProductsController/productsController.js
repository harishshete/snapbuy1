const Product = require('../../models/Product');
const fs = require("fs");

exports.addProduct = async (req, res) => {
    url = req.protocol + '://' + req.get("host") + '/productImages/' + req.file.filename;
    console.log(req.params.id);
    const product = new Product({
        sellerid: req.params.id,
        title: req.body.title,
        summary: req.body.summary,
        category: req.body.category,
        shop: req.body.shop,
        instock: req.body.instock,
        size: req.body.size.split(" "),
        color: req.body.color.split(" "),
        price: req.body.price,
        image: url
    });

    try {
        console.log(product);
        const newProduct = await product.save();
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(500).json("Could Not Add product " + error)
    }

}

exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({ sellerid: req.params.id });
        res.status(200).send(allProducts);
    } catch (error) {
        res.status(500).send(error);
    }
}


exports.getProductsByCategory = async (req, res) => {

    try {
        const products = await Product.find({ category: req.body.category });
        if (products) {
            res.status(200).json(products);
        } else {
            res.status(204).json("no data found, make sure you entered correct Category");
        }
    } catch (error) {
        res.status(500).json(error);
    }

}

exports.getProductById = async (req, res) => {
    const productId = req.params.id.trim();
    console.log(productId);
    try {
        const product = await Product.findById(productId);
        console.log("Product" + product);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(204).json("Product Not Found, make sure you entered correct product id");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.allProducts = async (req, res) => {
    console.log("Working...")

    try {
        const allProducts = await Product.find();
        if(allProducts){
            res.status(200).json(allProducts);
        }else{
            res.status(204).json("No data found");
        }
    } catch (error) {
        res.status(500).json(error);
    }
    
    // const productId = req.params.id.trim();
    // console.log(productId);
    // try {
    //     const product = await Product.findById(productId);
    //     console.log("Product" + product);
    //     if (product) {
    //         res.status(200).json(product);
    //     } else {
    //         res.status(204).json("Product Not Found, make sure you entered correct product id");
    //     }
    // } catch (error) {
    //     res.status(500).json(error);
    // }

    // res.send("working..");
    // console.log("Working..")

}






exports.deleteProduct = async (req, res) => {

    const imgURL = await Product.findOne({ _id: req.params.id }, { _id: 0, image: 1 });
    const arr = imgURL.image.split("/");
    // res.send();
    const imageName = arr[arr.length - 1];
    try {
        await Product.findByIdAndDelete(req.params.id, (err, docs) => {
            if (err) {
                res.status(500).json(err);
            } else {
                fs.unlink(`productImages/${imageName}`, (err) => {
                    if (err) {
                        // throw err;
                        res.status(500).json(err);
                    } else {
                        res.status(200).json("Deleted");
                    }
                });
            }
        })

    } catch (error) {

    }
}


exports.updateProduct = async (req, res) => {
    const SellerWhoRequestedUpdate = req.user.id;
    const sellerIdFromProduct = await Product.findOne({ _id: req.params.id }, { _id: 0, sellerid: 1 });
    if (sellerIdFromProduct.sellerid == SellerWhoRequestedUpdate) {
        if (req.body.size) {
            req.body.size = req.body.size.split(" ");
        }
        if (req.body.color) {
            req.body.color = req.body.color.split(" ");
        }
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json("Could Not Update " + error)
        }
    }
    else {
        res.status(500).json("You Don't have permission to Update This Product");
    }
}




// exports.getAllProductsShoppers = async (req, res) => {
//     res.send("working..");
// }







