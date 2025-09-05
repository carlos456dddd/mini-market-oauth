import express from 'express';

import  * as dotenv from 'dotenv';
dotenv.config()
import aut from './routes/authRoutes.js';
import router from './routes/oauthRoutes.js';


const app = express();
app.use(express.json());



app.use('/api/auth',aut);
app.use('/auth',router)

app.get('/health', (request, response) => {

    response.json({status:'ok'});
})

export default app;


