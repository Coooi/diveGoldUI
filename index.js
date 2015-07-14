var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

// viewed at http://localhost:8080
app.get('/reserva', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/reservas.html'));
});

// viewed at http://localhost:8080
app.get('/confirmar-reservas', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/confirmar-reservas.html'));
});

// viewed at http://localhost:8080
app.get('/operacoes', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/operacoes.html'));
});

// viewed at http://localhost:8080
app.get('/planilha', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/planilha.html'));
});


app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/js', express.static(path.join(__dirname, '/public/js')));
app.use('/fonts', express.static(path.join(__dirname, '/public/fonts')));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});