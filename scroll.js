$(document).ready(function(){
    $("#learnMore").click(function(){
        $('html, body').animate({
            scrollTop: $(".sect-2").offset().top
        }, 500);
    });
});