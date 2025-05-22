const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const userSchema = require('../models/userModel');

require('dotenv').config(); 

passport.use( "google",
    new GoogleStrategy(
        {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        scope:["profile","email"],
        },
        async function(accessToken,refreshToken,profile,done){
            try {
                let user = await userSchema.findOne({ email: profile._json.email });
                if (!user) {
                  user = new userSchema({
                    name: profile.displayName,
                    email: profile._json.email,
                    imageURL: profile._json.picture
                  });
                  await user.save();
                }
                return done(null, user);
              } catch (err) {
                return done(err, false);
              }
        }
    )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userSchema.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});