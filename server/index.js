const express = require('express'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy,
    keys = require('../config/keys');

const app = express();

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log("index / accessToken: ", accessToken);
        console.log("index / refreshToken: ", refreshToken);
        console.log("index / profile: ", profile);
        console.log("index / done: ", done);
    })
);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

// listen for Heroku environment variable PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);