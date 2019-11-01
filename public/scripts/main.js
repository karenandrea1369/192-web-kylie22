window.addEventListener('load', function(){

    var navbtn = document.querySelector('.mainheader__btn');
    var mainnav = document.querySelector('.mainheader__nav');

    function handleClick0(){
        mainnav.classList.toggle('mainheader__nav--active');
    }
    
    navbtn.addEventListener('click', handleClick0);


    var buttons = document.querySelectorAll('.manybtn__img');
    //var imgButton = document.querySelector('img');

    function handleClick1(event){
        var name = event.target.getAttribute('src')
        var parts = name.split('/');
        var newName = './data/img' + parts[2];
        var image = document.querySelector(".inter__img");
        image.setAttribute('src', newName);
        console.log(newName);
    }

    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener('click', handleClick1 );   
    }


    var more = document.querySelector('.detail__more');
    var detail = document.querySelector('.detail__descrip');


    function handleClick2(){
        detail.classList.toggle('detail__descrip--active');

        if(more.innerHTML== '+ Mostrar más'){
            more.innerHTML = '- Mostrar menos';
        } else {
            more.innerHTML = '+ Mostrar más';
        }
        // more.setAttribute('name', 'Mostrar menos -') ++++++++++++++++++++++++++++++++++++preguntar
    }

    more.addEventListener('click', handleClick2);

});