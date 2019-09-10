var buttons = document.querySelectorAll('.manybtn__img');
var imgButton = document.querySelector('img');

function handleClick (event){
    var name = event.target.getAttribute('src')
    var parts = name.split('/');
    var newName = './data/img' + parts[2];
    var image = document.querySelector(".inter__img");
    image.setAttribute('src', newName);
    console.log(newName);
}

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', handleClick );   
}


var more = document.querySelector('.detail__more');
var detail = document.querySelector('.detail__descrip');

function handleClick(){
    detail.classList.toggle('detail__descrip--active');
    // more.setAttribute('name', 'Mostrar menos -')
}

more.addEventListener('click', handleClick);