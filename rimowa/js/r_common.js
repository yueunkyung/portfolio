$(function(){
    $(".ri_gnb>li").on("mouseover focusin",function(){
        $(this).children("a").addClass("on")
        $(this).children().stop().fadeIn();
    });
    $(".ri_gnb>li").on("mouseout focusout",function(){
        $(this).children("a").removeClass("on")
        $(this).children("ul").stop().fadeOut();
    });
}); //E