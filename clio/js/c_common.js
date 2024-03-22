$(function(){
    
    /* header */
    $("#c_gnb_wrap>ul>li").on("mouseover focusin", function(){
        $(this).find("div").stop().slideDown(500);
    });
    $("#c_gnb_wrap>ul>li").on("mouseout focusout", function(){
        $(this).find("div").stop().slideUp(500);
    });
    
    /* media header */
    var tick=0;
    $(".btn_menu").click(function(){
        $(this).toggleClass("on");
        tick++;
        if(tick%2==1){
            $(this).children("span").text("CLOSE");
        }else{
            $(this).children("span").text("MENU");        
        }
        $("#cm_gnb_wrap").toggleClass("on");
        $(".moda_gb").fadeToggle();
    });
    $(".navi_wrap>li>a").click(function(){
        $(".navi_wrap>li").children().next().stop().slideUp(600);
        $(this).next("ul").stop().slideToggle(600);
    });
    
    $(window).scroll(function(){
        var calSct=$(this).scrollTop();
        if(calSct>=44){
            $("#c_gnb_wrap, #c_gnb_wrap>ul>li, #c_gnb_wrap>ul>li>a, .c_logo").addClass("on");
        }else{
            $("#c_gnb_wrap, #c_gnb_wrap>ul>li, #c_gnb_wrap>ul>li>a, .c_logo").removeClass("on");
        };
        var motdOffset=$(".c_motd_wrap").offset().top;
        if(calSct>=motdOffset){
            $(".btn_quick").fadeIn(500);
        }else{
            $(".btn_quick").fadeOut(500);
        }
        /* lip texture */
        var instaOff=$(".c_real_life_wrap").offset().top
        if(calSct>=instaOff){
            $(".t_lip, .b_lip").addClass("on");
        } //lip texture E
    });
    
    /* quick button */
    $(".tothetop").click(function(){
        $("html, body").animate({scrollTop:0},1000);
        return false;
    });

    /* footer */
    $(".ft_rt_wrap>div>button").click(function(){
        $(this).toggleClass("on");
        $(this).prev("ul").find("ul").stop().slideToggle(500);
         });
}); //E 