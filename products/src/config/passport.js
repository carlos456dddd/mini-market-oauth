import { Strategy as JwtStrategy,ExtractJwt} from 'passport-jwt';



const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || null,
};



export const jwtStrategy = new JwtStrategy(opts,(payloads,done) => {
    return done(null, payloads)
})
             