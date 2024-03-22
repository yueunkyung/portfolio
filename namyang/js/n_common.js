$(function(){

    $("#gnb_wrap>li").on("mouseover focusin",function(){
        $(this).children().addClass("n_active");
        $("#gnb_wrap>li>ul").stop().slideDown(500);
    });
    $("#gnb_wrap>li").on("mouseout focusout",function(){
        $(this).children().removeClass("n_active");
        $("#gnb_wrap>li>ul").stop().slideUp(500);
    });
    
    $(".btn_search").click(function(){
        $(".search_bg").fadeIn(800);
    });
    $(".n_search_close").click(function(){
        $(".search_bg").fadeOut(800);
    });
    
    $(".info_wrap>li:last-child>button").click(function(){
        $(".n_fam").stop().slideToggle(800);
    });
    
    $('.n_top').fadeOut();
    $(window).scroll(function(){
    if($(this).scrollTop() > 700){
        $('.n_top').eq(0).delay(0).fadeIn();
	}
    if($(this).scrollTop() < 700){
        $('.n_top').eq(0).delay(0).fadeOut();
	}
    });
    
    // 반응형
    // header & nav
    $(".btn_m_search").click(function(){
        $(this).toggleClass("on");
        $(".m_search_bg").stop().fadeToggle(500);
    });
    $(".n_btn_mgnb").click(function(){
        $(this).toggleClass("on");
        $(".mgnb_slider").toggleClass("on");
        $(".m_gnb_cor").stop().fadeToggle(1000);
    });
    $("#m_gnb>li").click(function(){
        $(this).children().slideDown(500);
        $(this).siblings().children("ul").slideUp(500);
    });
    $("#m_gnb>li>a, #m_gnb>li>ul>li>a").click(function(){
        $(this).addClass("on");
        $(this).parent().siblings().children("a").removeClass("on");
    });
}); //E