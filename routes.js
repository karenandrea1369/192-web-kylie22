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

    /*app.get('/tienda', (request, response) =>{
        const products = db.collection('products');
        
        console.log("esto es la wea:"+request.query.selectValue);
                //console.log(copyProducts);

                var context = {};

                if(request.query.selectValue == 'cheap'){
                    //console.log("funciona");
                    products.find().sort(function(a,b){
                        return a.price - b.price,
                        console.log("funciona x2"),
                        console.log(copyProducts);
                    }) //1 es ascendente
                    return;
                }else if(request.query.selectValue == 'expensive'){
                    console.log("funciona");
                    products.find().sort({ price: -1}) //1 es ascendente
                    .toArray((err,result) => {
                        assert.equal(null,err);

                        console.log(result);

                        copyProducts = result;

                    });
                    return;
                }else if(request.query.selectValue == 'az'){
                    products.find().sort({name: 1}) //1 es ascendente
                    .toArray((err,result) => {
                        assert.equal(null,err);

                        context = {
                            products: result,
                            message: 'ok'
                        };

                        response.render('store',context);
                    });
                    return;
                }else if(request.query.selectValue == 'za'){
                    products.find().sort({name: -1}) //1 es ascendente
                    .toArray((err,result) => {
                        assert.equal(null,err);

                        context = {
                            products: result,
                            message: 'ok'
                        };

                        response.render('store',context);
                    });
                    return;
                }else{
                    products.find().toArray((err,result) => {
                        assert.equal(null,err);

                        context = {
                            products: result,
                            message: 'ok'
                        };
                    });
                }
                response.render('store',context);
        });
        */


    app.get('/crea', (request, response) => {
        console.log('Alguien entró a crear');
        response.render('create');
    });

    app.get('/kit', (request, response) => {
        console.log('Alguien entró al kit');
        response.render('create');
    });

    app.get('/carrito', (request, response) => {
        const products = db.collection('products');
        const cart = db.collection("cart");
        console.log('Alguien entró al carrito');
        
        //buscamos los id de los productos que agregué al carro
        cart.find({})
        //transformamos el cursor en un arreglo
        .toArray((err,result)=>{
            //aseguramos de que no hay error
            assert.equal(null, err);

            //console.log(result);
            
            var idsCart = [];//un arreglo para guardar todos los ids que tengo en el carrito
            result[0].products.forEach(id => {
            idsCart.push(new ObjectID (id));//agrego todos los id al nuevo arreglo
            });
           // console.log(idsCart);

            //buscamos todos los productos
            products.find({ _id: {$in: idsCart}})
            //transformamos el cursor a un arreglo
            .toArray((err, resultProducts) => {
                //aseguramos de que no hay error
                assert.equal(null, err);
                var context = {
                    products: resultProducts,
                };
                response.render('cart',context);
            });
        });
    });

    /*

    app.get('/compra', (request, response) => {
        const carItems = db.collection('carItems');
        const products = db.collection ('products');
        //buscamos todos los productos
        carItems.find({})
        //transformamos el cursor a una arreglo
        .toArray((err, result) => {
            //aseguramos de que no hay error
            assert.equal(null, err);
            var ids = [];
            //console.log(result[0]);
            //arreglo de ids
            result[0].products.forEach(id => {
                ids.push(new ObjectID (id));
            });
             
            products.find({ _id: {$in: ids}})
            //transformamos el cursor a una arreglo
            .toArray((err, resultProducts) => {
                //console.log(resultProducts);
                //arreglo de productos 
                resultProducts.forEach( product => {
                    var count = 0;
                    result[0].products.forEach( resultId => {
 
                        if(resultId == product._id){
                            count += 1;
                        }
                    });
                    product.count = count;
                });
                var context = {
                    products: resultProducts,
                };
                response.render('car', context);
            });

    */

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

    app.get('/api/cart/',(request,response)=>{
        const cart = db.collection('cart');

        cart.find({}).toArray((err, result) => { //result es lo que me trae

            //aseguramos de que no hay error
            assert.equal(null, err);
            response.send(result[0]);
        });
    });

    app.post('/api/cart/',(request,response)=>{
        const cart = db.collection('cart'); //selecciono la colección de la base de datos
        cart.find({}).toArray((err, result) => { //result es lo que me trae
            var arrayCart = result[0]; //lo guardo en una variable
            arrayCart.products.push(request.body.idProduct); //le agrego en texto lo que me llegó de body, le llega en texto

            cart.updateOne({_id: new ObjectID (arrayCart._id) }, //convierte el id qu ele llegó en texto, a un id de mongo
                {
                    $set: {products: arrayCart.products} //lo actualiza
                } 
            );
            //aseguramos de que no hay error
            assert.equal(null, err);
            response.send({
                message: 'todo bien',
                arrayCart
            });
        });
    });

    app.get('/kitdone',(request,response)=>{
        response.render('kitdone');
    
        
    });




//------------------------------------------------------
}
    module.exports = createRoutes;