window.addEventListener('load', function(){

    var filterbtn = document.querySelector('.filorg__btn');
    var filorg = document.querySelector('.filorg--container');
    var btn_cart = document.querySelectorAll('.addtocart');
    var select = document.querySelector('.order');
    

    function filters(order){
        fetch('/tienda'+order)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(data) {//data es lo que le mando
            console.log(data);
        });
    }

    select.addEventListener('change',function(){
        filters("?selectValue="+select.value);
    });

    filters("");

    function handleClick0(){
        filorg.classList.toggle('filorg--active');
    }

    filterbtn.addEventListener('click',handleClick0);
    
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