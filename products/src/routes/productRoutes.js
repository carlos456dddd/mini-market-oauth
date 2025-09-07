import express from 'express';
import { getProducts, createProduct, DeleteProduct, editProduct } from '../controllers/productController.js';
import { validate } from '../middelware/validate.js';
import { createProductSchema } from '../schemas/productSchema.js';




const router = express.Router();
router.get('/', getProducts);
router.post('/', validate(createProductSchema), createProduct);
router.delete('/:id', DeleteProduct);
router.patch('/:id', editProduct);




export default router;