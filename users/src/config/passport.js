import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/users/auth/google/callback",
    scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
    ],

}, async (accessToken, refreshToken, profile, done) => {
    console.log("Google profile:", profile);
    const email = profile.emails?.[0]?.value || null;
    const googleId = profile.id;
    const name = profile.displayName;
    if (!email) {
        return done(new Error("No se pudo obtener el email de Google"), null);
    }

    const user = await prisma.user.upsert({
        where: { email },
        update: { googleId, name },
        create: { email, googleId, name, role: 'user' ,password:null}
    });

    return done(null, user);
}));

export { passport };