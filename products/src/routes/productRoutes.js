import express from 'express';
import { getProducts, createProduct } from '../controllers/productController.js';

const router = express.Router();
router.get('/', getProducts);
router.post('/', createProduct);
router.delete('/:id', createProduct);
router.put('/:id', createProduct);




export default router;