let express = require('express');
let app = express();
const path = require('path');

app.use(express.static('public'));  

app.listen(3030, () => {
    console.log('Servidor Corriendo')
} );

app.get('/', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/home.html')
    res.sendFile(htmlPath)
});

app.get('/register.html', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/register.html')
    res.sendFile(htmlPath)
});

app.get('/login.html', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/login.html')
    res.sendFile(htmlPath)
});