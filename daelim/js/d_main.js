$(function(){
    $(".d_operation_guide_wrap>div>div").on("mouseover focusin",function(){
        $(this).children("div:last-child").stop().fadeIn(500);
    });
    $(".d_operation_guide_wrap>div>div").on("mouseout focusout",function(){
        $(this).children("div:last-child").stop().fadeOut(500);
    });
    $(".best_items_list>li>a").click(function(){
        var ch_bx=$(this).attr("href");
        $(ch_bx).siblings().hide();
        $(ch_bx).fadeIn();
        $(".best_items_list>li>a").removeClass("on");
        $(this).addClass("on");        
        return false;
    });
  
    $('.mv_wrap').bxSlider({
        mode:'fade',
        speed:0,
        auto:true,
        pause:11000,
        preloadImages:'all',
        autoControls:true,
        autoControlsCombine:true,
        stopAutoOnClick:true,
        onSliderLoad:function(currentIndex){
            auto1(0,5,2000);
        },
        onSlideAfter:function($slideElement, oldIndex, newIndex){
            $('.mv_wrap>div>div').eq(oldIndex).find('img').hide();
            $('.mv_wrap>div>div').eq(oldIndex).find('img').first().show();
            au1=0;
            clearTimeout(timeout1);
            if(newIndex==0){
                auto1(0,5,2000);
            }else if(newIndex==1){
                auto1(1,34,200);
            }else if(newIndex==2){
                auto1(2,6,2000);
            };
        }
    });
    
    var au1=0;
    function auto1(order1,count1,interval1){
        if(order1==1){
            $('.mv_wrap>div>div').eq(order1).find('img').eq(au1).hide();
            au1++;
            $('.mv_wrap>div>div').eq(order1).find('img').eq(au1).show();
        }else{
            if(au1==0){
                $('.mv_wrap>div>div').eq(order1).find('img').eq(au1).show().stop().delay(interval1).fadeOut(interval1/3);
                au1++;
                $('.mv_wrap>div>div').eq(order1).find('img').eq(au1).hide().stop().delay(interval1).fadeIn(interval1/3);
            }else{
                $('.mv_wrap>div>div').eq(order1).find('img').eq(au1).stop().fadeOut(interval1/3);
                au1++;
                $('.mv_wrap>div>div').eq(order1).find('img').eq(au1).stop().fadeIn(interval1/3);
            }
        }
        if(au1==count1){
            au1=0;
            return;
        }
        timeout1=setTimeout(function(){auto1(order1,count1,interval1)},interval1);
    }
    
    /* tab & bxSlider Start */
    var sliders=[];
    $('.d_bath_remodel').each(function (i) {
        sliders[i] = $(this).bxSlider({
            onSlideAfter:function($slideElement, oldIndex, newIndex){
                $(".d_bath_remodel>li").removeClass("on");
                $slideElement.addClass("on");
            }
        });
    });
    $(".remodel_menu_wrap>ul>li>a").click(function(){
        var ch_remodel_page=$(this).attr("href")
        $(ch_remodel_page).siblings().hide();
        $(ch_remodel_page).fadeIn();
        $(".remodel_menu_wrap>ul>li").removeClass("on");
        $(this).parent("li").addClass("on");
        
        ch_index=$(this).parent().index();
        
        sliders[ch_index].reloadSlider();
        return false;
    }); /* tab & bxSlider End */
    
    
    $(".pager_showroom_add>a").click(function(){
        var showroom=$(this).attr("href");
        $(showroom).siblings().hide();
        $(showroom).fadeIn();
        $(".pager_showroom_add>a").removeClass("on");
        $(this).addClass("on")
        return false;
    })
    
    /* mobile mv */
    $('.m_d_mainvisual_wrap').bxSlider({
        controls:false,
        auto:true,
        pause:3000
    });
    
}); //E