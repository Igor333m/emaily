const express = require('express'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy,
    keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken) => {
        console.log("index / accessToken: ", accessToken);
    })
); 

// listen for Heroku environment variable PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);