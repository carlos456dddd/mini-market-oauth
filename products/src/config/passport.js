import { Strategy as JwtStrategy,ExtractJwt} from 'passport-jwt';



const opts = {
    jwtfromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};



export const jwtStrategy = new JwtStrategy(opts,(payloads,done) => {
    return done(null, payloads)
})
