const divS = document.querySelectorAll('div');

divS.forEach(function (div) {

div.addEventListener('click', zmienKolor);

})

function zmienKolor () {
    document.body.className = this.className; 
}