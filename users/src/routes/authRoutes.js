import express from 'express';
import {register, login, logger} from '../controllers/authController.js';
import { authenticate } from '../middelware/auth.js';


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/papas', authenticate,logger)



export default router
