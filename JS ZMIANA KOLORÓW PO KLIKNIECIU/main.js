let pierwszyDiv = document.querySelector('.s1')
let drugiDiv = document.querySelector('.s2')

function zmianaKoloru (){
//    pierwszyDiv.classList.toggle('red');
//    drugiDiv.classList.toggle('red');

this.classList.toggle('red');

}


pierwszyDiv.addEventListener('click', zmianaKoloru);
drugiDiv.addEventListener('click', zmianaKoloru);