import express from 'express';
import { passport } from '../config/passport.js';
import jwt from 'jsonwebtoken';



const router = express.Router();
router.get('/google', passport.authenticate('google', { session: false }));


router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {


    const token = jwt.sign({ id: req.user.id, email: req.user.email, role: req.user.role }, process.env.JWT_SECRET, { expiresIn: '15m' });

    res.redirect(`${process.env.FRONT_URL}/oauth/success?token=${token}`);
});

export default router;