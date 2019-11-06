const assert = require('assert');
const ObjectID = require ('mongodb').ObjectID;

function createRoutes (app, db) {

    app.get('/', (request, response) => {
        console.log('Alguien entró a la ruta inicial');
        response.sendFile(__dirname + '/public/index.html');
    });

    // app.get('/tiendass', (request, response) => {
    //     console.log('Alguien entró a la tienda');
    //     response.render('store');
    // });

    app.get('/tienda', (request, response) => {
        const products = db.collection('products');
        console.log('Alguien entró a la tienda');

        //buscamos todos los productos
        products.find({})
            //transformamos el cursor a una arreglo
            .toArray((err, result) => {
                //aseguramos de que no hay error
                assert.equal(null, err);

                var context = {
                    products: result
                };

                response.render('store',context);
        });
    });

    app.get('/producto/:name', (request, response) => {
        // response.send("Cada producto");
        
        const products = db.collection('products');
        console.log('Alguien entró a cada producto');

        products.find({ name: request.params.name }).toArray((err, result) => {

            //aseguramos de que no hay error
            assert.equal(null, err);

            var context = {
                product: result[0]
            };

            response.render('eachproduct',context);

        });

    });
}
    module.exports = createRoutes;