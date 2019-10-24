const btnJs =document.querySelector('.js');
// const divItem = document.createElement('div');
// const btnJq = document.querySelector('.jq');



function creatDiv () {
    const divItem = document.createElement('div');

    divItem.classList.add("box");

    document.body.appendChild(divItem);

}

btnJs.addEventListener("click", creatDiv)




$('.jq').on('click', function (){

    $("body").append('<div class="box">')
})





// function removeElement () {
//     const divItem = document.removeLastChild('box');

    


// }

// btnJq.addEventListener("click " ,removeElement )
