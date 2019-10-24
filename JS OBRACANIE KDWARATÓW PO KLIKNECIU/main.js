let rotate = 0;
const deg = 10; 




let btn = document.querySelector('button');
let divSquare = document.querySelector('div');
divSquare.style.transitionDuration = "0.5s";






btn.addEventListener('click', function() {
    rotate += deg;

    divSquare.style.transform ="rotate( " + rotate + "deg )";
})

