let express = require('express');
let app = express();
const path = require('path');
const port = process.env.PORT || 3030;


app.listen(port, () =>{console.log("Servidor corriendo en http://localhost:" + port)});

app.use(express.static("./public"));

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