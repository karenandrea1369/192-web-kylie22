window.addEventListener('load', function(){

    var btn_cart = document.querySelectorAll('.addtocart');
    //var shopping_counter = document.querySelector('.shopping_counter');

    btn_cart.forEach(function(btn) {

        btn.addEventListener('click', function(event){
            
            event.preventDefault();

            var data = new URLSearchParams();
            data.append("idProduct", btn.getAttribute("data-name")); //idProduct es el nombre de la variable con el que se lee en la ruta

            // console.log("helow madafaka")

            var promise = fetch('/api/cart/', { method: 'POST', body : data });

            promise.then(function(response) {
                    console.log(response);
                    return response.json();
                })
                .then(function(data) {//data es lo que le mando
                    updateCart(); //aquí se llama la función que refresca el carrito
                    console.log(data);
                   // shopping_counter.innerText = data.cartLength;
                });

        });


    });
 
});
        // function displayList() {
        //     fetch('/api/productsItems')
        //     .then(function(response) {
        //         return response.json();
        //     })
        //     .then(function(listItems) {
        //         listItems.forEach(element => {
        //             console.log(element.name);
        //         });
        //     });
        // }
    
        // displayList();