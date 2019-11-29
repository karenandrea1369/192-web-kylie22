window.addEventListener('load', function(){

    var btnssombra = document.querySelectorAll('.intercontainer__btnsombra');

    function handleClick1(event){
        var name = event.target.getAttribute('src')
        var imagesombra = document.querySelector(".intercontainer__sombraimg");
        imagesombra.setAttribute('src', name);
        console.log(name);
    }

    for (var i = 0; i < btnssombra.length; i++) {
        var button = btnssombra[i];
        button.addEventListener('click', handleClick1 );   
    }

    var btnsrubor = document.querySelectorAll('.intercontainer__btnrubor');

    function handleClick2(event){
        var name = event.target.getAttribute('src')
        var imagerubor = document.querySelector(".intercontainer__ruborimg");
        imagerubor.setAttribute('src', name);
        console.log(name);
    }

    for (var i = 0; i < btnsrubor.length; i++) {
        var button = btnsrubor[i];
        button.addEventListener('click', handleClick2 );   
    }

    var btnslabial = document.querySelectorAll('.intercontainer__btnlabial');

    function handleClick3(event){
        var name = event.target.getAttribute('src')
        var imagelabial = document.querySelector(".intercontainer__labialimg");
        imagelabial.setAttribute('src', name);
        console.log(name);
    }

    for (var i = 0; i < btnslabial.length; i++) {
        var button = btnslabial[i];
        button.addEventListener('click', handleClick3 );   
    }


});