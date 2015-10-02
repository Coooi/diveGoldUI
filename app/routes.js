module.exports = function(app, passport) {
    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    var path = require('path');

    // app.set('case sensitive routing', true);

    app.get('/login', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'login.html'));
    });

    app.get('/', isLoggedIn, function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'home.html'));
    });

    app.get('/reserva', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'reservas.html'));
    });

    app.get('/confirmacoes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'confirmacoes.html'));
    });

    app.get('/operacoes', isLoggedIn, function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'operacoes.html'));
    });

    app.get('/planilha', isLoggedIn, function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'planilha.html'));
    });

         // process the login form
    app.post('/signin', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}