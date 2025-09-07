import express from 'express';
import 'dotenv/config';
import productRoutes from './routes/productRoutes.js';
import passport, { session } from 'passport';
import { jwtStrategy } from './config/passport.js';

const app = express();
app.use(express.json());

passport.use(jwtStrategy);
app.use(passport.initialize());



app.use('/products', passport.authenticate('jwt', {session:false}), productRoutes);

app.listen(3000, () => console.log('Products-API on 3000'));