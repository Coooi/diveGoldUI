var LocalStrategy   = require('passport-local').Strategy;

module.exports = function(passport) {

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
        if (email !== 'Divegold_Dib') {
            return done(null, false, req.flash('signupMessage', 'Email não cadastrado!'));
        }

        if (password != 'D1v3g0ld') {
            return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
        }

        return done(null, 1);
    }));

    passport.serializeUser(function(user, done) {
        done(null, 1);
    });

    passport.deserializeUser(function(id, done) {
        done(null, 'Divegold_Dib');
    });
};