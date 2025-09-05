import express from 'express';
import { getProducts, createProduct } from '../controllers/productController.js';
import { validate } from '../middelware/validate.js';
import { createProductSchema } from '../schemas/productSchema.js';




const router = express.Router();
router.get('/', getProducts);
router.post('/', validate(createProductSchema), createProduct);
router.delete('/:id', createProduct);
router.patch('/:id', createProduct);




export default router;