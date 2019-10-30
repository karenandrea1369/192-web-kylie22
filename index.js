const express = require('express');
// importar body parser
var bodyParser = require('body-parser');
// importar handlebars :)
var exphbs  = require('express-handlebars');
 
// instanciar app
const app = express();
//lineas de handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// configuración body parser para poder usar variables post en el body
app.use(bodyParser.urlencoded({ extended: true }));

// definir puerto
const port = 5000;

const assert = require('assert');

// definir una carpeta como pública
app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});