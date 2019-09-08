var buttons = document.querySelectorAll('.manybtn__img');
var imgButton = document.querySelector('img');

function handleClick (event){
    //var img = document.querySelector('.firstButton');
    var name = event.target.getAttribute('src')
    var parts = name.split('/');
    var newName = './data/img' + parts[2];
    var image = document.querySelector(".int__img");
    image.setAttribute('src', newName);
    console.log(newName);
}

//function handleClick(event) { //el event es para obtener informacion sobre el evento
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', handleClick );   
}
//}

