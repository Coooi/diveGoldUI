var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.get('/reserva', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/reservas.html'));
});

app.get('/confirmacoes', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/confirmacoes.html'));
});

app.get('/operacoes', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/operacoes.html'));
});

app.get('/planilha', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/planilha.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/login.html'));
});

app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/js', express.static(path.join(__dirname, '/public/js')));
app.use('/fonts', express.static(path.join(__dirname, '/public/fonts')));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});