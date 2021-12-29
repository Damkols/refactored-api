//posts Model
import Products from '../models/Product.js';

// Get All products Controller
export const getAllProducts = async (req, res) => {
    try{
        const products = await Products.find();
        if(!products) throw Error('No items');
        res.status(200).json(products);
    }catch(err) {
        res.status(400).json({ msg: err })
    }
};

// Get individual products controller
export const getProductById = async (req, res) => {
    try{
        const product = await Products.findById(req.params.id);
        if(!product) throw Error('No item');
        res.status(200).json(product);
    }catch(err) {
        res.status(400).json({ msg: err })
    }
};


// Create a product controller
export const createProduct =  async (req, res) => {
    const newProduct = new Products(req.body);
    try{
        const product = await newProduct.save();
        if(!product) throw Error('Something went wrong while saving the product')

        res.status(200).json(product);
    }catch(err) {
        res.status(400).json({ msg: err })
    }
};


// Update a product controller
export const updateProduct = async (req, res) => {
    try{
        const product = await Products.findByIdAndUpdate(req.params.id, req.body);
        if(!product) throw Error('Something went wrong while updating the product');
        res.status(200).json({ successfullyUpdated: true })
    }catch(err) {
        res.status(400).json({ msg: err })
    }
}


// Delete a product controller
export const deleteProduct = async (req, res) => {
    try{
        const product = await Products.findByIdAndDelete(req.params.id);
        if(!product) throw Error('No product found!');
        res.status(200).json({ successfullyDeleted: true })
    }catch(err) {
        res.status(400).json({ msg: err })
    }
};