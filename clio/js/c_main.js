$(function(){
    $(".hp_wrap>div").on("mouseover focusin", function(){
        $(this).find(".product_more_info").stop().fadeIn(500);
    });
    $(".hp_wrap>div").on("mouseout focusout", function(){
        $(this).find(".product_more_info").stop().fadeOut(500);
    });
    $(".motd_sub_wrap").bxSlider({
        pager:false,
        onSliderLoad:function(currentIndex){
            $(".motd_item_img_wrap .motd_sub_wrap>div").eq(currentIndex+1).addClass("on")
            $(".motd_sub_wrap>div").eq(currentIndex+1).find("p").addClass("on");
        },
        onSlideAfter:function($slideElement, oldIndex, newIndex){
            $(".motd_item_img_wrap .motd_sub_wrap>div").removeClass("on")
            $slideElement.addClass("on");
            $(".motd_sub_wrap>div").eq(oldIndex+1).find("p").removeClass("on");
            $slideElement.find("p").addClass("on");
        }
    });
    
    /* video play */
    $(".see_video>a").click(function(){
        $(this).next("div").fadeIn();
        return false;
    });
    $(".bg_notbubb").click(function(){
        $(".md_bg").fadeOut();
    }); // video play E
    
    $(".insta_story").bxSlider({
        
    });
}); //E 