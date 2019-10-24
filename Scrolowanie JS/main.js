const spanResult = document.querySelector ('span')

document.addEventListener('scroll', function (){

spanResult.textContent =window.scrollY;

})