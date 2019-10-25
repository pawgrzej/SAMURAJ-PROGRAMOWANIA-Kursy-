$('.interface').on("click", function(){

// console.log("działa")

if($(this).hasClass("orange")){ 
    //  console.log("działa pomarancz");

    $('body').attr("class", "orange")
}

if($(this).hasClass("green")) {
    $('body').attr("class", "green")
}

if($(this).hasClass("increase")) {

    $('.text').animate({
        "font-size": "+=2px"
    }, 500)
}

if($(this).hasClass("move")) {

    $('.text').animate({
        "left": "+=10px", "letter-spacing": "+=3px"
    })
}

})

