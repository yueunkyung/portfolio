$(function(){
    $("#d_gnb_wrap>li").on("mouseover focusin",function(){
        $(this).children().stop().fadeIn(500);
        $(this).children("a").addClass("on");
    });
    $("#d_gnb_wrap>li").on("mouseout focusout",function(){
        $(this).children("div").stop().fadeOut(500);
        $(this).children("a").removeClass("on");
    });
    
    $(window).scroll(function(){
        var calcuSct=$(this).scrollTop();
        var introOffset=$("#d_intro_wrap").offset().top;
        if(calcuSct>=introOffset){
            $("#d_quickMenu_wrap").fadeIn(500);
        }else{
            $("#d_quickMenu_wrap").fadeOut(500);
        };
    });
    $(".btn_top").click(function(){
        $("html,body").animate({scrollTop:0},1000);
        return false;
    });
    $(".btn_end").click(function(){
        var bh=$("body").height();
        $("html,body").animate({scrollTop:bh},1000);
        return false;
    });
    
    /* mobile */
    $(".m_btn_munu").click(function(){
        $(this).children("span").toggleClass("on");
        $(this).nextAll("#m_d_gnb_wrap").slideToggle(800);
        $(this).next("span").fadeToggle();
    });
    $("#m_d_gnb_wrap>li>a").click(function(){
        $(this).next().slideDown(600);
        $(this).parent().siblings().children("ul").slideUp(600);
        $(this).parent().siblings().children("a").removeClass("on");
        $(this).addClass("on");
    });
    
}); //E