import express from 'express';
import 'dotenv/config';
import productRoutes from './routes/productRoutes.js';
import passport from 'passport';
import { jwtStrategy } from './config/passport.js';
import { validatorJWT } from './middelware/validatePayloade.js';

const app = express();
app.use(express.json());

passport.use(jwtStrategy);
app.use(passport.initialize());


app.use('/products', validatorJWT, productRoutes);

app.listen(3000, () => console.log('Products-API on 3000'));