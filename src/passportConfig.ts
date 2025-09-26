import passport from 'passport'
import {Strategy as GoogleStrategy,Profile} from 'passport-google-oauth20'
import dotenv from 'dotenv'
dotenv.config()
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            callbackURL: process.env.GOOGLE_CALLBACK_URL || "",
        },
        (accessToken, refreshToken, profile, done) => {
            // Ensure profile matches the expected Express.User type
            console.log('Google Profile: ',profile)
            const user: Express.User = {
                ...profile,
                _raw:(profile as any)._raw||"",
                _json:(profile as any)._json||"",
            };
            
            
            done(null, user);
        }
    )
);


passport.serializeUser((user, done) => {
    console.log('Serializing User:', user.displayName);
    done(null, user);
});

passport.deserializeUser((user:Express.User, done) => {
    console.log('Deserializing User:', user.displayName);
    done(null,user)
});