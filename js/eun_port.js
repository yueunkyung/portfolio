$(function(){
    /* fullpage */
    $("#eun_fp").fullpage({
        menu:"#eunp_hd",
        anchors:["st_page","se_page","thi_page","four_page","la_page"],
        navigation: false,
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',
        afterRender: function(){
            $(".eunp_intro>h1>span").addClass("on");
            $("#eunp_tip").addClass("pos1");
        },
        afterLoad: function(anchorLink, index){
            $("#eunp_hd>ul>li>a").removeClass("on size"); 
            $("#eunp_hd>ul>li").eq(index-1).children("a").addClass("size");
            
            /* mobile gnb color */
            $(".m_gnb_wrap>li").removeClass("on");
            $(".m_gnb_wrap>li").eq(index-1).addClass("on");
            $(".btn_gnb>span").removeClass("on");
            
            if(index==1){
                $("#eunp_hd>ul>li").addClass("rdr");
            }
            if(index==2){
                $("#eunp_hd>ul>li>a").addClass("on");
                $(".pic_of_me").addClass("on");
                $(".btn_gnb>span").addClass("on");
            }
            if(index==3){
                $("#eunp_hd>ul>li>a").addClass("on");
                $(".ability_list").addClass("on");
                $(".btn_gnb>span").addClass("on");
                
                /* counting */
                setTimeout(function(){late();},1000);
                function late(){
                    t1=setInterval(function(){changeT();},50);
                }
                var c=0;
                function changeT(){
                    c++;
                    if(c<=41){
                        $(".fill_skill").each(function(){
                            p1 = $(this).attr("data-percent");
                            n1 = $(this).parent().height()/100;
                            $(this).animate({"height":p1*n1},2000);
                            w1 = $(this).height();
                            $(this).parent().nextAll("span").text(Math.ceil(w1/n1)+"%");
                        });
                    }else{
                        clearInterval(t1);
                    }
                };
            }
            if(index==5){
                $(".live_a_day").addClass("on");
                $(".my_qr").addClass("on");
            }
        },
        onLeave: function(index, nextIndex, direction){            
            $("#eunp_tip").removeClass();
            $("#eunp_tip").addClass("pos"+nextIndex);
            if(nextIndex==1){
                $("#eunp_tip>span").text("start");
            }
            if(nextIndex==2){
                $("#eunp_tip>span").text("two");
            }
            if(nextIndex==3){
                $("#eunp_tip>span").text("three");
            }
            if(nextIndex==4){
                $("#eunp_tip>span").text("four");
            }
            if(nextIndex==5){
                $("#eunp_tip>span").text("see you again");
            }            
        }
    });
    
    /* portfolio image */
    $(".con_img_space").each(function(){
        var changeBg=$(this).parents(".all_port").index()+1;
        $(this).css({"background-image":"url(img/port"+changeBg+".png)"})
    });
    
    /* sort-light-box */
    $(".menu_sub>li>button").click(function(){
        $(".menu_sub>li>button").removeClass("on")
        $(this).addClass("on")
        
        $(".all_port").show();
        $(".all_port").hide();
        var sortPort=$(this).attr("data-con");
        var leng=$("."+sortPort).length;
        
        $("."+sortPort).show();
        for(var i=1; i<=12; i++){
            $(".all_port").removeClass("on"+i)
        }
        for(var j=1; j<=leng; j++){
            $("."+sortPort).eq(j-1).addClass("on"+j);
        }
    });
    $(".all_port>a").click(function(){
        var connectA=$(this).attr("href");
        $(connectA).fadeIn(700);
    });
    $(".btn_close").click(function(){
        $(".move_light_box").fadeOut(700);
    });
    
    /* tablet personal info */
    $(".more_see_personal").click(function(){
        var agreeInfo=$(this).attr("href");
        $(agreeInfo).fadeIn(500);
    });
    $(".close_agree, .person_modal").click(function(){
        $("#eunp_person_modal").fadeOut(500);
    })
    
    /* mobile gnb toggle */
    $(".btn_gnb").click(function(){
        $(this).toggleClass("on");
        $(".m_gnb_wrap").fadeToggle();
    })
    
}); //E