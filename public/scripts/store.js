window.addEventListener('load', function(){

    var btn_cart = document.querySelectorAll('.addtocart');
    var shopping_counter = document.querySelector('.shopping__counter');

    btn_cart.forEach(function(btn) {

        btn.addEventListener('click', function(event){
            event.preventDefault();
            var id = btn.getAttribute('data-name');
            console.log("helow madafaka")

            var promise = fetch('/api/cart/' + id, { method: 'POST' });

            promise.then(function(response) {
                    console.log(response);
                    return response.json();
                })
                .then(function(data) {
                    console.log(data);
                    shopping_counter.innerText = data.cartLength;
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

});