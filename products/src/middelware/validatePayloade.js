import passport from "passport";


export function validatorJWT(req, res, next) {

    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) return next(err);               
        if (!user) return res.status(401).json({ error: info.message || 'Token inválido' });
        req.user = user;                          
        next();
    })(req, res, next)

}

