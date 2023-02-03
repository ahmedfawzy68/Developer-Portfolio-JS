

$(window).scroll(function () { 
    let scrollValue = $(window).scrollTop();
    let secondSectionPos = $("#about").offset().top;

    if(scrollValue >= secondSectionPos){
        $("nav").css("background-color" , "#09c")
    }
    else{
        $("nav").css("background-color" , "#040404")
    } 
});