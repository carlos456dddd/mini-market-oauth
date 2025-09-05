import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
app.use(cors());



app.use('/users', createProxyMiddleware({ target: 'http://users:3000', changeOrigin: true }));

app.use('/products', createProxyMiddleware({
    target: 'http://products:3000',
    changeOrigin: true,
    logLevel: 'debug'
}));

app.listen(3000, () => console.log('Gateway on 3000'));