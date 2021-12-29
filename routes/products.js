import express from "express";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../controllers/products.js";
//import { getAllProducts, createProduct, getProductById } from "../controllers/products.js";

const router = express.Router();

// @routes Get /products
// @description Get All products
router.get('/', getAllProducts);


// @routes Get /products/:id
// @description Get A product
router.get('/:id', getProductById);



// @routes product /products
// @description Create A product
router.post('/', createProduct);


// @routes Update /products/:id
// @description Update A product
router.patch('/:id', updateProduct);


// @routes Delete /products/:id
// @description Delete A product
router.delete('/:id', deleteProduct);


export default router;