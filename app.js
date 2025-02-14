//levantar un server
const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/FLORES', (req, res) => {
    res.render('FLORES');
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});